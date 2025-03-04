import { memo } from 'react';

import type { FC } from 'react';
import type { Group } from 'shared/types/Groups';


interface GroupProps {
  group: Group
  isActive?: boolean
  pickGroup: (id: string) => void
}


const Group: FC<GroupProps> = ({ group, isActive, pickGroup }) => {

  const colors = isActive
    ? new Array(group.colors.length).fill('#7A45D6')  
    : group.colors

  return (
    <mesh 
      position={group.position} 
      onClick={() => pickGroup(group.id)}
    >
      {group.type === 'box' && <boxGeometry args={group.sizes} />} 
      {group.type === 'pyramide' && <coneGeometry args={group.sizes} /> }

      {colors.map((color, index) => (
        <meshBasicMaterial key={index} color={color} attach={`material-${index}`} />
      ))}
    </mesh>
  );
};

export const MemoizedGroup = memo(Group)