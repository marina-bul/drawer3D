/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';

import styles from './SceneViewer.module.scss';


export const SceneViewer = () => {

  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [2, 2, 5], fov: 75 }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="red" attach="material-0" />
          <meshBasicMaterial color="blue" attach="material-1" />
          <meshBasicMaterial color="green" attach="material-2" />
          <meshBasicMaterial color="yellow" attach="material-3" /> 
          <meshBasicMaterial color="purple" attach="material-4" />
          <meshBasicMaterial color="orange" attach="material-5" />
        </mesh>

        <mesh position={[-4, 0, -3]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[1, 2, 4]} /> 
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>

    </div>
  );
};