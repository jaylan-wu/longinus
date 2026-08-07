let webGLAvailability: boolean | undefined

export function canCreateWebGLContext() {
  if (typeof document === 'undefined') return false
  if (webGLAvailability !== undefined) return webGLAvailability

  try {
    const canvas = document.createElement('canvas')
    webGLAvailability = Boolean(
      canvas.getContext('webgl2') ?? canvas.getContext('webgl'),
    )
  } catch {
    webGLAvailability = false
  }

  return webGLAvailability
}
