import { memo } from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { ButtonMain } from 'shared/UI/ButtonMain/ButtonMain';

import styles from './Instruments.module.scss';

import type { FC } from 'react';
import type { Group } from 'shared/types/Groups';


interface InstrumentsProps {
  groups: Group[]
  activeGroup: string
  openModal: () => void
  resetGroups: () => void
  pickGroup: (id: string) => void
}


const Instruments: FC<InstrumentsProps> = ({ 
  groups,
  activeGroup, 
  openModal, 
  resetGroups, 
  pickGroup 
}) => {

  return (
    <div className={styles.container}>
      <List>
        {
          groups.map(group => {
            const positionToString = group.position.map((item) => Math.ceil(item)).join(', ')
            const isActive = group.id === activeGroup
            return (
              <ListItem 
                key={positionToString} 
                sx={{ 
                  padding: '4px 8px', 
                  backgroundColor: isActive ? '	#7A45D6' : 'transparent',
                  cursor: 'pointer'
                }}
                onClick={() => pickGroup(group.id)}
              >
                <ListItemText 
                  primary={group.id.toUpperCase()} 
                  secondary={`position (${positionToString})`} 
                  slotProps={{
                    secondary: {
                      sx: {
                        fontStyle: 'italic',
                        color: 'white',
                      },
                    }
                  } }
                />
                <ListItemIcon  
                  sx={{
                    backgroundColor: group.colors[0],
                    minWidth: 20,
                    height: 20
                  }} />

              </ListItem>
            )})
        }
      </List>

      <div className={styles.buttons}>
        <ButtonMain onClick={resetGroups}>Clear groups</ButtonMain>
        <ButtonMain onClick={openModal}>Add group</ButtonMain>
      </div>
      
    </div>
  );
};

export const NavPanel = memo(Instruments)