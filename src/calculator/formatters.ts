import type { CalculatorConfig } from './types'

export function formatHours(min: number, max: number, locale = 'uk-UA') {
  return `${min.toLocaleString(locale)}-${max.toLocaleString(locale)} h`
}

export function formatBudget(min: number, max: number, config: CalculatorConfig) {
  const formatter = new Intl.NumberFormat(config.meta.language === 'uk' ? 'uk-UA' : 'en-US', {
    style: 'currency',
    currency: config.commercial.currency,
    maximumFractionDigits: 0,
  })

  return `${formatter.format(min * config.commercial.hourlyRate)}-${formatter.format(
    max * config.commercial.hourlyRate,
  )}`
}

export function formatMonthRange(min: number, max: number, config: CalculatorConfig) {
  const low = (min / config.commercial.monthlyTeamCapacityHours).toFixed(1)
  const high = (max / config.commercial.monthlyTeamCapacityHours).toFixed(1)
  return `${low}-${high} міс.`
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9а-яіїєґ]+/gi, '-')
    .replace(/^-+|-+$/g, '')
}
