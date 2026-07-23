import {
  ABOUT_CHAPTER_IDS,
  type AboutChapterDefinition,
  type AboutChapterId,
} from '../types/about'

function defineChapter(
  id: AboutChapterId,
  index: string,
  label: string,
): AboutChapterDefinition {
  return {
    id,
    index,
    label,
    headingId: `${id}-title`,
  }
}

export const aboutChapters = [
  defineChapter(ABOUT_CHAPTER_IDS.identity, '01', 'Identity'),
  defineChapter(ABOUT_CHAPTER_IDS.trajectory, '02', 'Trajectory'),
  defineChapter(ABOUT_CHAPTER_IDS.outsideSystem, '03', 'Outside the System'),
  defineChapter(ABOUT_CHAPTER_IDS.interactiveInfluences, '04', 'Interactive Influences'),
  defineChapter(ABOUT_CHAPTER_IDS.currentDirection, '05', 'Current Direction'),
] as const

export function getAboutChapter(chapterId: AboutChapterId) {
  return aboutChapters.find((chapter) => chapter.id === chapterId) ?? aboutChapters[0]
}
