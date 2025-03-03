import { useCallback, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Instruments } from 'features/Instruments/Instruments';
import { Viewer } from 'features/SceneViewer/SceneViewer';
import { ButtonMain } from 'shared/UI/ButtonMain/ButtonMain';
import { Form } from 'shared/UI/Form/Form';

import styles from './MainPage.module.scss';


const getRandomPosition = () => [
  (Math.random() - 0.5) * 10,
  Math.random() * 5,    
  (Math.random() - 0.5) * 10
];


export const MainPage = () => {
  const [groups, setGroups] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddGroup = useCallback((groupType: 'box' | 'pyramide') => {
    setGroups(prev => [...prev, { type: groupType, position: getRandomPosition() }])
  }, [])

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <div className={styles.page}>
      <Instruments addGroup={handleAddGroup} openModal={handleOpenModal} />
      <Viewer groups={groups} />

      <Dialog 
        open={isModalOpen} 
        onClose={handleCloseModal}
        sx={{
          '& .MuiDialog-paper': { width: '400px' }
        }}
      >
        <DialogTitle>Add group</DialogTitle> 
        <DialogContent>
          <Form>
            <DialogActions>
              <ButtonMain onClick={handleCloseModal}>Cancel</ButtonMain>
              <ButtonMain type="submit" onClick={handleCloseModal}>
                Add group
              </ButtonMain>
            </DialogActions>
          </Form>
        </DialogContent>

      </Dialog>
    </div>
  );
};
