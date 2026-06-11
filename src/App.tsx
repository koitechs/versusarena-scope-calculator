import { useMemo, useState } from 'react'
import {
  Clipboard,
  Download,
  Lock,
  RotateCcw,
  Sparkles,
} from 'lucide-react'
import './App.css'
import { calculateScopeTotals, canToggleBlock, createInitialSelection, createLeanSelection } from './calculator/calculateScope'
import { formatBudget, formatHours, formatMonthRange } from './calculator/formatters'
import type { Milestone, SelectionState, WorkBlock } from './calculator/types'
import { validateCalculatorConfig } from './calculator/validateConfig'
import { demoConfig as config } from './data/demoConfig'
import { exportScopePdf } from './export/pdf'

const categoryIds = config.categories.map((category) => category.id)
const initialSelection = createInitialSelection(config)
const initialMilestone = 'all'

function App() {
  const [selected, setSelected] = useState<SelectionState>(initialSelection)
  const [activeMilestone, setActiveMilestone] = useState(initialMilestone)
  const [compactMode, setCompactMode] = useState(false)

  const validationErrors = validateCalculatorConfig(config)
  const visibleMilestones = useMemo(() => {
    if (activeMilestone === 'all') return config.milestones
    return config.milestones.filter((milestone) => milestone.id === activeMilestone)
  }, [activeMilestone])

  const visibleBlocks = useMemo(
    () =>
      visibleMilestones.flatMap((milestone) =>
        milestone.blocks.map((block) => ({
          ...block,
          milestoneId: milestone.id,
          milestoneTitle: milestone.title,
          billable: block.billable ?? milestone.billable ?? true,
        })),
      ),
    [visibleMilestones],
  )

  const totals = useMemo(
    () => calculateScopeTotals(visibleBlocks, selected, categoryIds),
    [selected, visibleBlocks],
  )

  const warnings = totals.removed.filter((block) => block.consequence)
  const maxCategory = Math.max(...Object.values(totals.breakdown).map((item) => item.max), 1)
  const targetHours = config.commercial.targetHours ?? (
    config.commercial.targetBudget ? config.commercial.targetBudget / config.commercial.hourlyRate : null
  )
  const budgetDelta = targetHours ? Math.round(totals.billableMax - targetHours) : null

  function toggleBlock(block: WorkBlock) {
    if (!canToggleBlock(block.priority)) return
    setSelected((current) => ({ ...current, [block.id]: !current[block.id] }))
  }

  async function copySummary() {
    const lines = [
      `${config.meta.projectName} — ${config.meta.calculatorTitle}`,
      `Estimate: ${formatHours(totals.min, totals.max)}`,
      `Billable budget: ${formatBudget(totals.billableMin, totals.billableMax, config)}`,
      totals.freeMax > 0 ? `Complimentary first stage: ${formatHours(totals.freeMin, totals.freeMax)}` : '',
      `Calendar: ${formatMonthRange(totals.min, totals.max, config)} with ${config.commercial.teamLabel}`,
      '',
      ...totals.picked.map(
        (block) =>
          `- ${block.milestoneTitle} / ${block.title}: ${formatHours(
            block.estimate.min,
            block.estimate.max,
          )}`,
      ),
    ].filter(Boolean)

    await navigator.clipboard.writeText(lines.join('\n'))
  }

  return (
    <main className="app-shell" style={{ '--accent': config.theme.accent, '--accent-soft': config.theme.accentSoft } as React.CSSProperties}>
      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Koitechs scope calculator</p>
            <h1>{config.meta.projectName}</h1>
            <span>{config.meta.calculatorTitle}</span>
          </div>
          <div className="topbar-actions">
            <button type="button" className="ghost-button" onClick={() => setCompactMode((value) => !value)}>
              <Sparkles size={16} />
              {compactMode ? 'Detailed' : 'Compact'}
            </button>
            <button type="button" className="ghost-button" onClick={() => setSelected(createLeanSelection(config))}>
              Lean MVP
            </button>
            <button type="button" className="ghost-button" onClick={() => setSelected(initialSelection)}>
              <RotateCcw size={16} />
              Reset
            </button>
            <button type="button" className="primary-button" onClick={copySummary}>
              <Clipboard size={16} />
              Copy
            </button>
            <button type="button" className="primary-button dark" onClick={() => exportScopePdf(config, totals)}>
              <Download size={16} />
              PDF
            </button>
          </div>
        </header>

        <section className="hero-panel">
          <div>
            <h2>Budget-fit MVP calculator for the selected delivery scope.</h2>
            <p>
              Toggle recommended and post-MVP blocks to compare a lean budget-fit version with the full
              requested scope, then export a focused proposal summary.
            </p>
          </div>
          <div className="hero-stats">
            <Stat label="Hours" value={formatHours(totals.min, totals.max)} />
            <Stat label="Billable budget" value={formatBudget(totals.billableMin, totals.billableMax, config)} />
            {targetHours && <Stat label="Budget fit" value={budgetDelta && budgetDelta > 0 ? `+${budgetDelta} h` : 'Within cap'} />}
            <Stat label="Calendar" value={formatMonthRange(totals.min, totals.max, config)} />
            <Stat label="Blocks" value={`${totals.picked.length}/${visibleBlocks.length}`} />
          </div>
        </section>

        <nav className="milestone-tabs" aria-label="Milestones">
          {config.milestones.map((milestone) => (
            <button
              key={milestone.id}
              className={activeMilestone === milestone.id ? 'active' : ''}
              onClick={() => setActiveMilestone(milestone.id)}
            >
              {milestone.id.toUpperCase()}
            </button>
          ))}
          <button className={activeMilestone === 'all' ? 'active' : ''} onClick={() => setActiveMilestone('all')}>
            All
          </button>
        </nav>

        {validationErrors.length > 0 && (
          <section className="validation-card">
            <strong>Config needs attention</strong>
            {validationErrors.map((error) => (
              <span key={error}>{error}</span>
            ))}
          </section>
        )}

        <section className="content-grid">
          <div className="milestone-list">
            {visibleMilestones.map((milestone) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                selected={selected}
                compactMode={compactMode}
                onToggle={toggleBlock}
              />
            ))}
          </div>

          <aside className="summary-panel">
            <section className="summary-card">
              <h3>Breakdown</h3>
              <div className="breakdown-list">
                {config.categories.map((category) => {
                  const item = totals.breakdown[category.id] ?? { min: 0, max: 0 }
                  return (
                    <div className="breakdown-row" key={category.id}>
                      <div>
                        <span>{category.label}</span>
                        <strong>{formatHours(item.min, item.max)}</strong>
                      </div>
                      <div className="bar-track">
                        <i style={{ width: `${Math.max(3, (item.max / maxCategory) * 100)}%` }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="summary-card">
              <h3>Removed impact</h3>
              {warnings.length === 0 ? (
                <p className="muted">No recommended block has been removed.</p>
              ) : (
                <ul className="warning-list">
                  {warnings.map((block) => (
                    <li key={block.id}>
                      <strong>{block.title}</strong>
                      <span>{block.consequence}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="summary-card">
              <h3>Project notes</h3>
              <ul className="plain-list">
                {(config.assumptions.length ? config.assumptions : [
                  'Required blocks are locked to keep the core scope intact.',
                  'Recommended blocks can be removed to model a leaner delivery plan.',
                  'Totals update immediately for the selected milestone or full scope.',
                ]).map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>

            <section className="summary-card total">
              <p className="eyebrow">Selected scope</p>
              <strong>{formatHours(totals.min, totals.max)}</strong>
              <b>{formatBudget(totals.billableMin, totals.billableMax, config)}</b>
              {totals.freeMax > 0 && (
                <small>{formatHours(totals.freeMin, totals.freeMax)} included as a complimentary first stage</small>
              )}
              {targetHours && (
                <em className={budgetDelta && budgetDelta > 0 ? 'budget-status over' : 'budget-status'}>
                  {budgetDelta && budgetDelta > 0
                    ? `Over $15k target by about ${budgetDelta} h`
                    : 'Fits the $15k target at selected max estimate'}
                </em>
              )}
              <span>
                {formatMonthRange(totals.min, totals.max, config)} with {config.commercial.teamLabel}
              </span>
            </section>
          </aside>
        </section>
      </section>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function MilestoneCard({
  milestone,
  selected,
  compactMode,
  onToggle,
}: {
  milestone: Milestone
  selected: SelectionState
  compactMode: boolean
  onToggle: (block: WorkBlock) => void
}) {
  const totalMin = milestone.blocks.reduce((sum, block) => sum + block.estimate.min, 0)
  const totalMax = milestone.blocks.reduce((sum, block) => sum + block.estimate.max, 0)

  return (
    <article className="milestone-card">
      <header>
        <div>
          <h2>{milestone.title}</h2>
          <p>{milestone.killerFeature ?? milestone.summary}</p>
          {milestone.billable === false && <span className="free-stage">Complimentary first stage</span>}
        </div>
        <strong>{formatHours(totalMin, totalMax)}</strong>
      </header>
      <div className="block-list">
        {milestone.blocks.map((block) => {
          const isSelected = selected[block.id]
          const locked = !canToggleBlock(block.priority)
          const category = config.categories.find((item) => item.id === block.category)?.label ?? block.category
          const priority = config.priorities.find((item) => item.id === block.priority)?.label ?? block.priority

          return (
            <button
              type="button"
              key={block.id}
              className={`work-block ${isSelected ? 'selected' : 'removed'} ${locked ? 'locked' : ''}`}
              onClick={() => onToggle(block)}
            >
              <span className="check">{locked ? <Lock size={13} /> : isSelected ? '✓' : ''}</span>
              <span className="block-main">
                <span className="block-title-row">
                  <strong>{block.title}</strong>
                  <em>{priority}</em>
                </span>
                {!compactMode && <span>{block.description}</span>}
              </span>
              <span className="category">{category}</span>
              <span className="hours">{formatHours(block.estimate.min, block.estimate.max)}</span>
            </button>
          )
        })}
      </div>
    </article>
  )
}

export default App
