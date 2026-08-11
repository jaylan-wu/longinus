import { useState } from 'react'
import { trajectory } from '../../data/experiences'
import type { ExperienceRecord } from '../../types/about'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { TrajectoryRecordDetail } from './TrajectoryRecordDetail'
import { TrajectoryRecordList } from './TrajectoryRecordList'

export function TrajectoryChapter({
  chapter,
  motionState,
}: AboutChapterComponentProps) {
  const [selectedId, setSelectedId] = useState<ExperienceRecord['id']>(trajectory.records[0].id)
  const selectedExperience = trajectory.records.find((experience) => (
    experience.id === selectedId
  )) ?? trajectory.records[0]

  return (
    <AboutChapter
      chapter={chapter}
      modifier="trajectory"
      motionState={motionState}
    >
      <div className="trajectory-introduction">
        <p
          className="about-chapter__display-title trajectory-introduction__title about-motion-group about-motion-group--title"
          aria-hidden="true"
        >
          Trajectory
        </p>
        <p className="about-chapter__lead about-motion-group about-motion-group--lead">
          {trajectory.lead}
        </p>
      </div>
      <div className="trajectory-records">
        <TrajectoryRecordList
          records={trajectory.records}
          selectedId={selectedExperience.id}
          onSelect={setSelectedId}
        />
        <TrajectoryRecordDetail experience={selectedExperience} />
      </div>
    </AboutChapter>
  )
}
