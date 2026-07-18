import { CurrentDirectionChapter } from './chapters/CurrentDirectionChapter'
import { IdentityChapter } from './chapters/IdentityChapter'
import { InteractiveInfluencesChapter } from './chapters/InteractiveInfluencesChapter'
import { OutsideSystemChapter } from './chapters/OutsideSystemChapter'
import { TrajectoryChapter } from './chapters/TrajectoryChapter'

export function AboutChapters() {
  return (
    <>
      <IdentityChapter />
      <TrajectoryChapter />
      <OutsideSystemChapter />
      <InteractiveInfluencesChapter />
      <CurrentDirectionChapter />
    </>
  )
}
