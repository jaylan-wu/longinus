import { Component, type ErrorInfo, type ReactNode } from 'react'

type SceneErrorBoundaryProps = { children: ReactNode }
type SceneErrorBoundaryState = { failed: boolean }

export class SceneErrorBoundary extends Component<SceneErrorBoundaryProps, SceneErrorBoundaryState> {
  state: SceneErrorBoundaryState = { failed: false }

  static getDerivedStateFromError(): SceneErrorBoundaryState {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('3D scene unavailable; preserving the accessible DOM interface.', error, info)
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}
