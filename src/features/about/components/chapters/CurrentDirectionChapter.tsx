import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { CurrentDirectionSpatial } from './currentDirection/CurrentDirectionSpatial'

export function CurrentDirectionChapter({ chapter }: AboutChapterComponentProps) {
  return (
    <AboutChapter chapter={chapter} modifier="direction">
      <CurrentDirectionSpatial />
    </AboutChapter>
  )
}
