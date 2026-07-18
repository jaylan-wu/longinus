import { useState } from 'react'
import { trajectory, type TrajectoryRecord } from '../../aboutData'
import { ChapterHeading } from '../ChapterHeading'
import { TrajectoryRecordDetail } from './TrajectoryRecordDetail'
import { TrajectoryRecordList } from './TrajectoryRecordList'

export function TrajectoryChapter() {
  const [selectedId, setSelectedId] = useState<TrajectoryRecord['id']>(trajectory.records[0].id)
  const selected = trajectory.records.find((experience) => experience.id === selectedId) ?? trajectory.records[0]

  return (
    <section className="about-chapter about-chapter--trajectory" id="trajectory" aria-labelledby="trajectory-title">
      <ChapterHeading index="02" label="Trajectory" title="Trajectory" />
      <p className="about-chapter__lead">{trajectory.lead}</p>
      <div className="trajectory-records">
        <TrajectoryRecordList
          records={trajectory.records}
          selectedId={selected.id}
          onSelect={setSelectedId}
        />
        <TrajectoryRecordDetail experience={selected} />
      </div>
    </section>
  )
}
