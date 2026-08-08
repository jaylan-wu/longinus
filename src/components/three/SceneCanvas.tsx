import { Canvas, type CanvasProps, type RootState } from '@react-three/fiber'
import { useCallback, useEffect, useRef } from 'react'

const disposedRenderers = new WeakSet<RootState['gl']>()

export function SceneCanvas({ onCreated, ...canvasProps }: CanvasProps) {
  const rendererRef = useRef<RootState['gl'] | null>(null)

  const handleCreated = useCallback((state: RootState) => {
    rendererRef.current = state.gl
    onCreated?.(state)
  }, [onCreated])

  useEffect(() => () => {
    const renderer = rendererRef.current
    if (!renderer) return

    // R3F force-loses an unmounted context but does not dispose the renderer's
    // canvas listeners. Waiting one task distinguishes a real DOM removal from
    // StrictMode's connected effect replay before completing that cleanup.
    window.setTimeout(() => {
      if (!renderer.domElement.isConnected && !disposedRenderers.has(renderer)) {
        disposedRenderers.add(renderer)
        renderer.dispose()
      }
    }, 0)
  }, [])

  return <Canvas {...canvasProps} onCreated={handleCreated} />
}
