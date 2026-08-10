import {
  useState,
  type FocusEventHandler,
  type MouseEventHandler,
  type PointerEventHandler,
} from 'react'
import {
  PERSONAL_AXIS_LABELS,
  type PersonalAxis,
} from '../../../../../types/personalAxis'
import { identity } from '../../../data/identity'

export const currentDirectionAxes = identity.axes.map((axis) => ({
  ...axis,
  label: PERSONAL_AXIS_LABELS[axis.axis],
}))

type DirectionAxisInteractionProps = {
  'aria-pressed': boolean
  onBlur: FocusEventHandler<HTMLButtonElement>
  onClick: MouseEventHandler<HTMLButtonElement>
  onFocus: FocusEventHandler<HTMLButtonElement>
  onPointerEnter: PointerEventHandler<HTMLButtonElement>
  onPointerLeave: PointerEventHandler<HTMLButtonElement>
}

export function useDirectionAxisInteraction() {
  const [focusedAxis, setFocusedAxis] = useState<PersonalAxis | null>(null)
  const [hoveredAxis, setHoveredAxis] = useState<PersonalAxis | null>(null)
  const [selectedAxis, setSelectedAxis] = useState<PersonalAxis | null>(null)
  const activeAxis = hoveredAxis ?? focusedAxis ?? selectedAxis

  const getAxisInteractionProps = (
    axis: PersonalAxis,
  ): DirectionAxisInteractionProps => ({
    'aria-pressed': selectedAxis === axis,
    onBlur: () => setFocusedAxis((current) => current === axis ? null : current),
    onClick: () => setSelectedAxis((current) => current === axis ? null : axis),
    onFocus: () => setFocusedAxis(axis),
    onPointerEnter: () => setHoveredAxis(axis),
    onPointerLeave: () => setHoveredAxis((current) => current === axis ? null : current),
  })

  return {
    activeAxis,
    getAxisInteractionProps,
  }
}
