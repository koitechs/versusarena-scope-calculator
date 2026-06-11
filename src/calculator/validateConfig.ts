import type { CalculatorConfig } from './types'
import { getAllBlocks } from './calculateScope'

export function validateCalculatorConfig(config: CalculatorConfig) {
  const errors: string[] = []
  const categories = new Set(config.categories.map((category) => category.id))
  const priorities = new Set(config.priorities.map((priority) => priority.id))
  const ids = new Set<string>()

  for (const block of getAllBlocks(config)) {
    if (ids.has(block.id)) errors.push(`Duplicate block id: ${block.id}`)
    ids.add(block.id)
    if (!categories.has(block.category)) errors.push(`Unknown category "${block.category}" in ${block.id}`)
    if (!priorities.has(block.priority)) errors.push(`Unknown priority "${block.priority}" in ${block.id}`)
    if (block.estimate.min > block.estimate.max) errors.push(`Invalid estimate range in ${block.id}`)
  }

  if (config.commercial.hourlyRate <= 0) errors.push('hourlyRate must be greater than 0')
  if (config.commercial.targetBudget !== undefined && config.commercial.targetBudget <= 0) {
    errors.push('targetBudget must be greater than 0')
  }
  if (config.commercial.targetHours !== undefined && config.commercial.targetHours <= 0) {
    errors.push('targetHours must be greater than 0')
  }
  if (config.commercial.monthlyTeamCapacityHours <= 0) {
    errors.push('monthlyTeamCapacityHours must be greater than 0')
  }

  return errors
}
