import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import type { CalculatorConfig, ScopeTotals } from '../calculator/types'
import { formatBudget, formatHours, formatMonthRange, slugify } from '../calculator/formatters'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function exportScopePdf(config: CalculatorConfig, totals: ScopeTotals) {
  const report = document.createElement('div')
  report.style.position = 'fixed'
  report.style.left = '-10000px'
  report.style.top = '0'
  report.style.width = '794px'
  report.style.background = '#ffffff'
  report.style.color = '#111827'
  report.style.fontFamily = 'Arial, sans-serif'
  report.style.zIndex = '-1'

  const categoryRows = config.categories
    .map((category) => {
      const item = totals.breakdown[category.id] ?? { min: 0, max: 0 }
      return `
        <div class="pdf-row">
          <strong>${escapeHtml(category.label)}</strong>
          <span>${escapeHtml(formatHours(item.min, item.max))}</span>
        </div>
      `
    })
    .join('')

  const blockRows = totals.picked
    .map(
      (block) => `
      <tr>
        <td>${escapeHtml(block.milestoneTitle)}</td>
        <td>${escapeHtml(block.title)}</td>
        <td>${escapeHtml(formatHours(block.estimate.min, block.estimate.max))}</td>
        <td>${block.billable ? escapeHtml(formatBudget(block.estimate.min, block.estimate.max, config)) : 'Complimentary'}</td>
      </tr>
    `,
    )
    .join('')

  report.innerHTML = `
    <style>
      .pdf-report { width: 794px; box-sizing: border-box; padding: 42px; }
      .pdf-header { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; }
      .pdf-logo { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 9px; background: ${config.theme.accent}; color: #fff; font-size: 22px; font-weight: 900; }
      h1 { margin: 0; color: #111827; font-size: 28px; line-height: 1.1; }
      p { margin: 5px 0 0; color: #64748b; font-size: 12px; line-height: 1.45; }
      .pdf-hero { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 26px; padding: 22px; border-radius: 16px; background: #111827; color: #fff; }
      .pdf-hero span { display: block; color: #cbd5e1; font-size: 11px; text-transform: uppercase; }
      .pdf-hero strong { display: block; margin-top: 8px; font-size: 22px; line-height: 1.05; }
      h2 { margin: 24px 0 12px; font-size: 18px; }
      .pdf-row { display: grid; grid-template-columns: 1fr 100px; gap: 12px; padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; }
      .pdf-row em { font-style: normal; font-weight: 700; text-align: right; }
      table { width: 100%; border-collapse: collapse; font-size: 11px; }
      th { color: #64748b; text-align: left; text-transform: uppercase; }
      td, th { padding: 8px 7px; border-bottom: 1px solid #eef2f7; vertical-align: top; }
    </style>
    <section class="pdf-report">
      <header class="pdf-header">
        <div class="pdf-logo">${escapeHtml(config.theme.logoText)}</div>
        <div>
          <h1>${escapeHtml(config.meta.projectName)}</h1>
          <p>${escapeHtml(config.meta.calculatorTitle)} prepared by ${escapeHtml(config.meta.preparedBy)}</p>
        </div>
      </header>
      <section class="pdf-hero">
        <div><span>Hours</span><strong>${escapeHtml(formatHours(totals.min, totals.max))}</strong></div>
        <div><span>Billable budget</span><strong>${escapeHtml(formatBudget(totals.billableMin, totals.billableMax, config))}</strong></div>
        <div><span>Calendar</span><strong>${escapeHtml(formatMonthRange(totals.min, totals.max, config))}</strong></div>
      </section>
      <h2>Category breakdown</h2>
      ${categoryRows}
      <h2>Selected scope</h2>
      <table>
        <thead><tr><th>Milestone</th><th>Block</th><th>Hours</th><th>Budget</th></tr></thead>
        <tbody>${blockRows}</tbody>
      </table>
    </section>
  `

  document.body.appendChild(report)
  const canvas = await html2canvas(report, { scale: 2, backgroundColor: '#ffffff' })
  const image = canvas.toDataURL('image/png')
  const pdf = new jsPDF('p', 'pt', 'a4')
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const imageHeight = (canvas.height * pageWidth) / canvas.width
  let heightLeft = imageHeight
  let position = 0

  pdf.addImage(image, 'PNG', 0, position, pageWidth, imageHeight)
  heightLeft -= pageHeight

  while (heightLeft > 0) {
    position = heightLeft - imageHeight
    pdf.addPage()
    pdf.addImage(image, 'PNG', 0, position, pageWidth, imageHeight)
    heightLeft -= pageHeight
  }

  pdf.save(`${slugify(config.meta.projectName)}-scope.pdf`)
  report.remove()
}
