export type WorkBlockPriority = 'required' | 'recommended' | 'optional'

export type EstimateRange = {
  min: number
  max: number
}

export type CategoryConfig = {
  id: string
  label: string
  color?: string
}

export type PriorityConfig = {
  id: WorkBlockPriority
  label: string
  locked?: boolean
}

export type WorkBlock = {
  id: string
  title: string
  description: string
  estimate: EstimateRange
  category: string
  priority: WorkBlockPriority
  billable?: boolean
  consequence?: string
}

export type Milestone = {
  id: string
  title: string
  summary: string
  killerFeature?: string
  billable?: boolean
  blocks: WorkBlock[]
  risks?: string[]
}

export type CalculatorConfig = {
  meta: {
    projectName: string
    clientName: string
    calculatorTitle: string
    language: 'uk' | 'en'
    preparedBy: string
    repoName?: string
  }
  commercial: {
    hourlyRate: number
    currency: 'USD' | 'EUR' | 'UAH'
    monthlyTeamCapacityHours: number
    teamLabel: string
    targetBudget?: number
    targetHours?: number
  }
  theme: {
    accent: string
    accentSoft: string
    logoText: string
  }
  labels: {
    fullScope: string
    leanScope: string
    recommendedScope: string
    exportPdf: string
    copySummary: string
  }
  categories: CategoryConfig[]
  priorities: PriorityConfig[]
  milestones: Milestone[]
  assumptions: string[]
  nextQuestions: string[]
}

export type SelectionState = Record<string, boolean>

export type BlockWithMilestone = WorkBlock & {
  milestoneId: string
  milestoneTitle: string
  billable: boolean
}

export type ScopeTotals = {
  picked: BlockWithMilestone[]
  removed: BlockWithMilestone[]
  min: number
  max: number
  billableMin: number
  billableMax: number
  freeMin: number
  freeMax: number
  breakdown: Record<string, EstimateRange>
}
