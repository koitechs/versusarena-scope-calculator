import type {
  BlockWithMilestone,
  CalculatorConfig,
  EstimateRange,
  ScopeTotals,
  SelectionState,
  WorkBlock,
} from './types'

export function getAllBlocks(config: CalculatorConfig): BlockWithMilestone[] {
  return config.milestones.flatMap((milestone) =>
    milestone.blocks.map((block) => ({
      ...block,
      milestoneId: milestone.id,
      milestoneTitle: milestone.title,
      billable: block.billable ?? milestone.billable ?? true,
    })),
  )
}

export function createInitialSelection(config: CalculatorConfig): SelectionState {
  return Object.fromEntries(getAllBlocks(config).map((block) => [block.id, true]))
}

export function createLeanSelection(config: CalculatorConfig): SelectionState {
  return Object.fromEntries(
    getAllBlocks(config).map((block) => [block.id, block.priority === 'required']),
  )
}

export function calculateScopeTotals(
  blocks: BlockWithMilestone[] | WorkBlock[],
  selected: SelectionState,
  categories: string[],
): ScopeTotals {
  const picked = blocks.filter((block) => selected[block.id]) as BlockWithMilestone[]
  const removed = blocks.filter((block) => !selected[block.id]) as BlockWithMilestone[]
  const emptyBreakdown = Object.fromEntries(
    categories.map((category) => [category, { min: 0, max: 0 } satisfies EstimateRange]),
  )

  const breakdown = picked.reduce<Record<string, EstimateRange>>((acc, block) => {
    if (!acc[block.category]) acc[block.category] = { min: 0, max: 0 }
    acc[block.category].min += block.estimate.min
    acc[block.category].max += block.estimate.max
    return acc
  }, emptyBreakdown)

  return {
    picked,
    removed,
    min: picked.reduce((sum, block) => sum + block.estimate.min, 0),
    max: picked.reduce((sum, block) => sum + block.estimate.max, 0),
    billableMin: picked.reduce((sum, block) => sum + (block.billable !== false ? block.estimate.min : 0), 0),
    billableMax: picked.reduce((sum, block) => sum + (block.billable !== false ? block.estimate.max : 0), 0),
    freeMin: picked.reduce((sum, block) => sum + (block.billable === false ? block.estimate.min : 0), 0),
    freeMax: picked.reduce((sum, block) => sum + (block.billable === false ? block.estimate.max : 0), 0),
    breakdown,
  }
}

export function canToggleBlock(priority: string) {
  return priority !== 'required'
}
