
import { memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import { MemoizedGroup } from './elems/Group/Group';
import styles from './SceneViewer.module.scss';

import type { FC } from 'react';
import type { Group } from 'shared/types/Groups';


interface ViewerProps {
  groups: Group[]
  activeGroup: string
  pickGroup: (id: string) => void
}


const Viewer: FC<ViewerProps> = ({ groups, activeGroup, pickGroup }) => {
  return (
    <div className={styles.container}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 5, 10]} />
        <OrbitControls target={[0, 0, 0]} />

        <ambientLight intensity={1} />
        <pointLight position={[-5, -5, 0]} />

        {groups.map((group) => (
          <MemoizedGroup 
            key={group.id} 
            group={ group } 
            isActive={group.id === activeGroup} 
            pickGroup={pickGroup} 
          />
        ))}
      </Canvas>

    </div>
  );
};

export const SceneViewer = memo(Viewer)