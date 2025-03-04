import { useCallback, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { SceneViewer, Form } from 'features/SceneViewer';
import { NavPanel } from 'features/Instruments/Instruments';
import { ButtonMain } from 'shared/UI';
import { useGroups } from 'shared/hooks/useGroups';

import styles from './MainPage.module.scss';

import type { GroupParams } from 'shared/types/Groups';


export const MainPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { 
    groups, 
    activeGroupId,  
    handleAddGroup, 
    handleResetGroups, 
    handlePickGroup 
  } = useGroups()


  const handleOpenModal = () => {setIsModalOpen(true)}

  const handleCloseModal = () => {setIsModalOpen(false)}

  const handleSubmit = useCallback((groupVals: GroupParams) => {
    handleAddGroup(groupVals)
    handleCloseModal()
  }, [handleAddGroup, handleCloseModal])

  return (
    <div className={styles.page}>
      <NavPanel 
        groups={groups} 
        activeGroup={activeGroupId}
        openModal={handleOpenModal} 
        resetGroups={handleResetGroups} 
        pickGroup={handlePickGroup}
      />
      <SceneViewer groups={groups} activeGroup={activeGroupId} pickGroup={handlePickGroup} />

      <Dialog 
        open={isModalOpen} 
        onClose={handleCloseModal}
        sx={{
          '& .MuiDialog-paper': { width: '400px' }
        }}
      >
        <DialogTitle>Add group</DialogTitle> 
        <DialogContent>
          <Form onSubmit={handleSubmit}>
            <DialogActions>
              <ButtonMain onClick={handleCloseModal}>
                Cancel
              </ButtonMain>
              <ButtonMain type="submit">
                Ok
              </ButtonMain>
            </DialogActions>
          </Form>
        </DialogContent>

      </Dialog>
    </div>
  );
};
