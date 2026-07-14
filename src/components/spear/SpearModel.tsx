import { longinusColors } from '../../styles/colors'

export function SpearModel() {
  return (
    <group>
      <mesh position={[0, -2.9, 0]}>
        <cylinderGeometry args={[0.105, 0.145, 8.8, 10]} />
        <meshStandardMaterial color={longinusColors.primaryDeep} roughness={0.32} metalness={0.62} />
      </mesh>
      <mesh position={[0, 1.63, 0]}>
        <cylinderGeometry args={[0.25, 0.11, 0.6, 10]} />
        <meshStandardMaterial color={longinusColors.primary} roughness={0.28} metalness={0.66} />
      </mesh>
      <mesh position={[0, 2.7, 0]} scale={[0.58, 2.05, 0.34]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={longinusColors.primary} roughness={0.24} metalness={0.7} />
      </mesh>
      <group position={[0, 2.1, 0]}>
        <mesh position={[-0.57, 0.42, 0]} rotation={[0, 0, 0.58]} scale={[0.2, 1.25, 0.22]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={longinusColors.primaryDeep} roughness={0.28} metalness={0.68} />
        </mesh>
        <mesh position={[0.57, 0.42, 0]} rotation={[0, 0, -0.58]} scale={[0.2, 1.25, 0.22]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={longinusColors.primaryDeep} roughness={0.28} metalness={0.68} />
        </mesh>
      </group>
      <mesh position={[0, -7.46, 0]} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.22, 0.65, 8]} />
        <meshStandardMaterial color={longinusColors.primaryShadow} roughness={0.38} metalness={0.55} />
      </mesh>
    </group>
  )
}
