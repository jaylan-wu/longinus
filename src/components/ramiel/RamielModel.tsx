import { EdgesGeometry, MathUtils, OctahedronGeometry } from 'three'
import { reiColors } from '../../styles/colors'

const RAMIEL_GEOMETRY = new OctahedronGeometry(1, 0)
const RAMIEL_EDGE_GEOMETRY = new EdgesGeometry(RAMIEL_GEOMETRY, 1)

type RamielModelProps = {
  /** A normalized intensity value that scenes may derive from interaction state. */
  energy?: number
}

export function RamielModel({ energy = 0 }: RamielModelProps) {
  const normalizedEnergy = MathUtils.clamp(energy, 0, 1)
  const shellScale = 1.045 + normalizedEnergy * 0.018
  const coreScale = 0.3 + normalizedEnergy * 0.06

  return (
    <group name="ramiel-model">
      <mesh
        name="ramiel-core"
        geometry={RAMIEL_GEOMETRY}
        scale={coreScale}
        rotation={[0, Math.PI * 0.25, 0]}
        renderOrder={0}
        castShadow={false}
        receiveShadow={false}
      >
        <meshStandardMaterial
          color={reiColors.light}
          emissive={reiColors.blueInk}
          emissiveIntensity={0.22 + normalizedEnergy * 0.34}
          roughness={0.42}
          metalness={0}
          transparent
          opacity={0.18 + normalizedEnergy * 0.18}
          depthWrite={false}
          flatShading
        />
      </mesh>

      <mesh
        name="ramiel-body"
        geometry={RAMIEL_GEOMETRY}
        renderOrder={1}
        castShadow={false}
        receiveShadow={false}
      >
        <meshStandardMaterial
          color={reiColors.blue}
          emissive={reiColors.blueDeep}
          emissiveIntensity={0.025 + normalizedEnergy * 0.11}
          roughness={0.3}
          metalness={0.08}
          transparent
          opacity={0.93}
          depthWrite={false}
          flatShading
        />
      </mesh>

      <mesh
        name="ramiel-shell"
        geometry={RAMIEL_GEOMETRY}
        scale={shellScale}
        renderOrder={2}
        castShadow={false}
        receiveShadow={false}
      >
        <meshStandardMaterial
          color={reiColors.surfaceBlue}
          emissive={reiColors.blue}
          emissiveIntensity={0.02 + normalizedEnergy * 0.07}
          roughness={0.2}
          metalness={0.02}
          transparent
          opacity={0.1 + normalizedEnergy * 0.06}
          depthWrite={false}
          flatShading
        />
      </mesh>

      <lineSegments
        name="ramiel-edges"
        geometry={RAMIEL_EDGE_GEOMETRY}
        scale={shellScale + 0.006}
        renderOrder={3}
      >
        <lineBasicMaterial
          color={reiColors.blueDeep}
          transparent
          opacity={0.42 + normalizedEnergy * 0.2}
          depthWrite={false}
          toneMapped={false}
        />
      </lineSegments>
    </group>
  )
}
