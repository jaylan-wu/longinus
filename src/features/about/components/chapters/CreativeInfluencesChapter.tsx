import { useState } from 'react'
import {
  creativeInfluencesIntroduction,
  influenceDirectory,
} from '../../data/influences'
import type { InfluenceRecord } from '../../types/about'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { InfluenceDetail } from './InfluenceDetail'
import { InfluenceRecordList } from './InfluenceRecordList'

const SELECTED_INFLUENCE_DETAIL_ID = 'selected-influence-detail'

export function CreativeInfluencesChapter({ chapter }: AboutChapterComponentProps) {
  const [selectedId, setSelectedId] = useState<InfluenceRecord['id']>(
    influenceDirectory[0].id,
  )
  const selectedInfluence = influenceDirectory.find((influence) => (
    influence.id === selectedId
  )) ?? influenceDirectory[0]

  return (
    <AboutChapter chapter={chapter} modifier="influences">
      <div className="influence-records">
        <div className="influence-records__directory">
          <div className="influence-records__introduction">
            <p
              className="about-chapter__display-title influence-records__title"
              aria-hidden="true"
            >
              Influences
            </p>
            <p className="influence-records__lead">
              {creativeInfluencesIntroduction}
            </p>
          </div>
          <InfluenceRecordList
            detailId={SELECTED_INFLUENCE_DETAIL_ID}
            records={influenceDirectory}
            selectedId={selectedInfluence.id}
            onSelect={setSelectedId}
          />
        </div>
        <InfluenceDetail
          detailId={SELECTED_INFLUENCE_DETAIL_ID}
          influence={selectedInfluence}
        />
      </div>
    </AboutChapter>
  )
}
