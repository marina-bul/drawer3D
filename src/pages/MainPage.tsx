
import { Instruments } from 'features/Instruments/Instruments';
import { SceneViewer } from 'features/SceneViewer/SceneViewer';

import styles from './MainPage.module.scss';


export const MainPage = () => {
  console.log(styles)
  return (
    <div className={styles.page}>
      <Instruments />
      <SceneViewer />
    </div>
  );
};
