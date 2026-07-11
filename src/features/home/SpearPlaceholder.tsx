export function SpearPlaceholder() {
  return (
    <>
      <div className="spear-shadow" aria-hidden="true" />
      <div className="spear-fallback" aria-hidden="true">
        <div className="spear-fallback__shaft" />
        <div className="spear-fallback__head" />
        <div className="spear-fallback__fork spear-fallback__fork--left" />
        <div className="spear-fallback__fork spear-fallback__fork--right" />
      </div>
    </>
  )
}
