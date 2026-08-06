import { useState } from 'react'
import { trajectory } from '../../data/experiences'
import type { ExperienceRecord } from '../../types/about'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { TrajectoryRecordDetail } from './TrajectoryRecordDetail'
import { TrajectoryRecordList } from './TrajectoryRecordList'

export function TrajectoryChapter({ chapter }: AboutChapterComponentProps) {
  const [focusedId, setFocusedId] = useState<ExperienceRecord['id']>(trajectory.records[0].id)
  const focusedExperience = trajectory.records.find((experience) => (
    experience.id === focusedId
  )) ?? trajectory.records[0]

  return (
    <AboutChapter chapter={chapter} modifier="trajectory">
      <div className="trajectory-introduction">
        <p
          className="about-chapter__display-title trajectory-introduction__title"
          aria-hidden="true"
        >
          Trajectory
        </p>
        <p className="about-chapter__lead">{trajectory.lead}</p>
      </div>
      <div className="trajectory-records">
        <TrajectoryRecordList
          records={trajectory.records}
          selectedId={focusedExperience.id}
          onSelect={setFocusedId}
        />
        <TrajectoryRecordDetail experience={focusedExperience} />
      </div>
    </AboutChapter>
  )
}
