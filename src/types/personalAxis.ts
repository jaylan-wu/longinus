export const PERSONAL_AXIS_IDS = [
  'engineering',
  'game-design',
  'education',
] as const

export type PersonalAxis = (typeof PERSONAL_AXIS_IDS)[number]

export const PERSONAL_AXIS_LABELS = {
  engineering: 'Engineering',
  'game-design': 'Game Design',
  education: 'Education',
} as const satisfies Record<PersonalAxis, string>
