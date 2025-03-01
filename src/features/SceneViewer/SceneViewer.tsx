/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import styles from './SceneViewer.module.scss';

import type { FC } from 'react';

interface Group {
  type: 'box' | 'pyramide'
  position: [number, number, number]
  sizes?: [number, number, number]
}

interface Groups {
  groups: Group[]
}


export const SceneViewer: FC<Groups> = ({ groups }) => {

  console.log(groups)

  return (
    <div className={styles.container}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 5, 10]} />
        <OrbitControls target={[0, 0, 0]} />

        <ambientLight intensity={1} />
        <pointLight position={[-5, -5, 0]} />

        {groups.map((group, index) => {
          switch(group.type) {
          case 'box':
            return (
              <mesh key={index} position={group.position}>
                <boxGeometry />
                <meshBasicMaterial color="red" attach="material-0" />
                <meshBasicMaterial color="blue" attach="material-1" />
                <meshBasicMaterial color="green" attach="material-2" />
                <meshBasicMaterial color="purple" attach="material-3" /> 
                <meshBasicMaterial color="yellow" attach="material-4" />
                <meshBasicMaterial color="orange" attach="material-5" />
              </mesh>
            )
          case 'pyramide':
            return (
              <mesh key={index} position={group.position}>
                <coneGeometry args={[1, 2, 4]} /> 
                <meshStandardMaterial color="orange" />
              </mesh>
            )
          }
        })}
      </Canvas>

    </div>
  );
};