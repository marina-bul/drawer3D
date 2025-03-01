
import { ButtonMain } from 'shared/ButtonMain/ButtonMain';

import styles from './Instruments.module.scss';

import type { FC } from 'react';

interface InstrumentsProps {
  addGroup: (groupType: 'box' | 'pyramide') => void
}


export const Instruments: FC<InstrumentsProps> = ({ addGroup }) => {

  return (
    <div className={styles.container}>
      <ul>
        <li>Слой 1</li>
        <li>Слой 2</li>
        <li>Слой 3</li>
      </ul>

      <div className={styles.buttons}>
        <ButtonMain onClick={() => addGroup('box')}>Add box</ButtonMain>
        <ButtonMain onClick={() => addGroup('pyramide')}>Add pyramide</ButtonMain>
      </div>
      
    </div>
  );
};