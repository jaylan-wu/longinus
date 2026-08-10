import type { PersonalAxis } from '../../../types/personalAxis'

export const ABOUT_CHAPTER_IDS = {
  identity: 'identity',
  trajectory: 'trajectory',
  outsideSystem: 'outside-system',
  creativeInfluences: 'interactive-influences',
  currentDirection: 'current-direction',
} as const

export type AboutChapterId = (typeof ABOUT_CHAPTER_IDS)[keyof typeof ABOUT_CHAPTER_IDS]

export type AboutChapterDefinition = {
  id: AboutChapterId
  index: string
  label: string
  navigationLabel: string
  headingId: `${AboutChapterId}-title`
}

export type AboutSceneState = {
  activeChapter: AboutChapterId
}

export type IdentityAxis = {
  id: `AX-${string}`
  axis: PersonalAxis
  shortStatement: string
  shortStatementLines: readonly [string, string]
  supportingStatement: string
}

export type IdentityContent = {
  name: string
  location: string
  creativeSignature: string
  displayStatement: readonly string[]
  openingStatement: {
    context: string
    pivot: string
    realization: string
    connection: string
  }
  axes: readonly IdentityAxis[]
}

export type ExperienceOrganizationMarkId = 'nyu' | 'new-york-mets' | 'major-league-baseball'
export type ExperienceOrganizationMarkPosition =
  | 'center'
  | 'lower-content-center'
  | 'lower-right'
  | 'upper-right'
export type ExperienceOrganizationMarkScale = 'portrait' | 'large-square' | 'compact-wide'
export type ExperienceTitleVariant = 'standard' | 'long' | 'extra-long'

export type ExperienceOrganizationMark = {
  id: ExperienceOrganizationMarkId
  imageSrc: string
  position: ExperienceOrganizationMarkPosition
  scale: ExperienceOrganizationMarkScale
}

export type ExperienceNarrative = {
  label: string
  body: string
}

export type ExperienceRecord = {
  id: `EDU-${string}` | `EXP-${string}`
  organization: string
  roleOrDegree: string
  officialRole?: string
  displayTitle: readonly string[]
  titleVariant: ExperienceTitleVariant
  selectorTitleVariant?: ExperienceTitleVariant
  period: string
  detailMetadata: readonly string[]
  context: ExperienceNarrative
  definingContribution: ExperienceNarrative
  reflection: ExperienceNarrative
  personalAxes: readonly PersonalAxis[]
  supportingThemes: readonly string[]
  relatedProjectIds?: readonly string[]
  organizationMark: ExperienceOrganizationMarkId
}

export type PhotographyRecord = {
  id: `PHOTO-${string}`
  imageSrc: string
  thumbnailSrc: string
  alt: string
  width: number
  height: number
  thumbnailWidth: number
  thumbnailHeight: number
  location: string
  year: number
  country?: string
  caption?: string
  camera?: string
  orientation?: 'landscape' | 'portrait'
  featured?: boolean
  reflection?: string
}

export type InfluenceRecord = {
  id: `INF-${string}`
  directoryOrder: number
  directoryTitleParts: readonly {
    text: string
    prominence: 'primary' | 'supporting'
  }[]
  directoryTitleVariant?: 'compact'
  title: string
  medium: string
  displayMedium?: string
  creator?: string
  releaseYear: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
  }
  includedWorks?: readonly string[]
  featuredQuote: string
  quoteAttribution?: string
  quoteVerificationNote?: string
  categories: readonly string[]
  specificElement: readonly string[]
  displayReflection: readonly string[]
  designTakeaway: string
  connectionToLonginus?: readonly string[]
}

export type AboutAction = {
  label: string
  href: string
}
