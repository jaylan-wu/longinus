import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { CurrentDirectionSpatial } from './currentDirection/CurrentDirectionSpatial'

export function CurrentDirectionChapter({
  chapter,
  motionState,
}: AboutChapterComponentProps) {
  return (
    <AboutChapter
      chapter={chapter}
      modifier="direction"
      motionState={motionState}
    >
      <CurrentDirectionSpatial />
    </AboutChapter>
  )
}
