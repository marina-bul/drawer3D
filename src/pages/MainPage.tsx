import { useCallback, useState } from 'react';
import { Instruments } from 'features/Instruments/Instruments';
import { SceneViewer } from 'features/SceneViewer/SceneViewer';

import styles from './MainPage.module.scss';

const getRandomPosition = () => [
  (Math.random() - 0.5) * 10,
  Math.random() * 5,    
  (Math.random() - 0.5) * 10
];


export const MainPage = () => {
  const [groups, setGroups] = useState([])

  const addGroup = useCallback((groupType: 'box' | 'pyramide') => {
    setGroups(prev => [...prev, { type: groupType, position: getRandomPosition() }])
  }, [])

  return (
    <div className={styles.page}>
      <Instruments addGroup={addGroup} />
      <SceneViewer groups={groups} />
    </div>
  );
};
