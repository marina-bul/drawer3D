
import { ButtonMain } from 'shared/ButtonMain/ButtonMain';

import styles from './Instruments.module.scss';


export const Instruments = () => {

  return (
    <div className={styles.container}>
      <ul>
        <li>Слой 1</li>
        <li>Слой 2</li>
        <li>Слой 3</li>
      </ul>

      <div className={styles.buttons}>
        <ButtonMain>Clear scene</ButtonMain>
        <ButtonMain>Add group</ButtonMain>
      </div>
      
    </div>
  );
};