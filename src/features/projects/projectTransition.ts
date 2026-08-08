import { useCallback, useEffect, useRef, useState } from 'react'
import type { InteractionPhase } from '../../types/interaction'
import type { Project } from './projectData'

export type ProjectTransitionPhase = InteractionPhase
export type ProjectScenePostTransitionDestination = 'inactive-offstage'

// Change this value (and the destination handling in the future detail composition)
// when each theme's final navbar/detail-page motif behavior has been designed.
export const PROJECT_SCENE_DESTINATION: ProjectScenePostTransitionDestination = 'inactive-offstage'

const COMMIT_DURATION_MS = 420
const IMPACT_DURATION_MS = 280
const IMPACT_NAVIGATION_DELAY_MS = 920
const REDUCED_MOTION_DELAY_MS = 120

type UseProjectTransitionOptions = {
  reducedMotion: boolean
  onNavigate: (project: Project) => void
}

export function useProjectTransition({ reducedMotion, onNavigate }: UseProjectTransitionOptions) {
  const [phase, setPhase] = useState<ProjectTransitionPhase>('idle')
  const [focusedId, setFocusedId] = useState<Project['id'] | null>(null)
  const [selectedId, setSelectedId] = useState<Project['id'] | null>(null)
  const timers = useRef<number[]>([])
  const transitionLocked = useRef(false)
  const locked = phase === 'committing' || phase === 'impact' || phase === 'transitioning'

  const clearTimers = useCallback(() => {
    timers.current.forEach(window.clearTimeout)
    timers.current = []
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  const focusProject = useCallback((projectId: Project['id'] | null) => {
    if (locked) return
    setFocusedId(projectId)
    setPhase(projectId ? 'focused' : 'idle')
  }, [locked])

  const selectProject = useCallback((project: Project) => {
    if (transitionLocked.current) return

    transitionLocked.current = true
    clearTimers()
    setFocusedId(project.id)
    setSelectedId(project.id)
    setPhase(reducedMotion ? 'transitioning' : 'committing')

    if (!reducedMotion) {
      timers.current.push(window.setTimeout(() => setPhase('impact'), COMMIT_DURATION_MS))
      timers.current.push(window.setTimeout(
        () => setPhase('transitioning'),
        COMMIT_DURATION_MS + IMPACT_DURATION_MS,
      ))
    }

    timers.current.push(window.setTimeout(
      () => onNavigate(project),
      reducedMotion ? REDUCED_MOTION_DELAY_MS : IMPACT_NAVIGATION_DELAY_MS,
    ))
  }, [clearTimers, onNavigate, reducedMotion])

  return {
    phase,
    focusedId,
    selectedId,
    locked,
    focusProject,
    selectProject,
    sceneDestination: PROJECT_SCENE_DESTINATION,
  }
}
