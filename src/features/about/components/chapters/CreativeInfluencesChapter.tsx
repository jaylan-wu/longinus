import { useState } from 'react'
import { creativeInfluences } from '../../data/influences'
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
    creativeInfluences[0].id,
  )
  const selectedInfluence = creativeInfluences.find((influence) => (
    influence.id === selectedId
  )) ?? creativeInfluences[0]

  return (
    <AboutChapter chapter={chapter} modifier="influences">
      <div className="influence-records">
        <InfluenceRecordList
          detailId={SELECTED_INFLUENCE_DETAIL_ID}
          records={creativeInfluences}
          selectedId={selectedInfluence.id}
          onSelect={setSelectedId}
        />
        <InfluenceDetail
          detailId={SELECTED_INFLUENCE_DETAIL_ID}
          influence={selectedInfluence}
        />
      </div>
    </AboutChapter>
  )
}
