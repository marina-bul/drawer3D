
import { ButtonMain } from 'shared/UI/ButtonMain/ButtonMain';

import styles from './Instruments.module.scss';

import type { FC } from 'react';

interface InstrumentsProps {
  addGroup: (groupType: 'box' | 'pyramide') => void
  openModal: () => void
}


export const Instruments: FC<InstrumentsProps> = ({ addGroup, openModal }) => {

  return (
    <div className={styles.container}>
      <ul>
        <li>Слой 1</li>
        <li>Слой 2</li>
        <li>Слой 3</li>
      </ul>

      <div className={styles.buttons}>
        <ButtonMain onClick={() => addGroup('box')}>Clear groups</ButtonMain>
        <ButtonMain onClick={openModal}>Add group</ButtonMain>
      </div>
      
    </div>
  );
};