import { useCallback, useState } from 'react'

import type { Geometry, Group, GroupParams } from 'shared/types/Groups';

const getRandomPosition = (): Geometry => [
  (Math.random() - 0.5) * 10,
  Math.random() * 5,    
  (Math.random() - 0.5) * 10
];

const getRandomColors = (length: number) => {
  return Array.from({ length }, 
    () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
  )
};

export const useGroups = () => {
  const [groups, setGroups] = useState<Group[]>([])
  const [activeGroupId, setActiveGroupId] = useState('')

  let boxCount = 0
  let pyramideCount = 0

  const handleAddGroup = useCallback((groupVals: GroupParams) => {
    const sidesNum = groupVals.type === 'box' ? 6 : groupVals.height
    const addedGroups:Group[] = []

    for(let i=1; i<=groupVals.number; i++) {
      let groupIndex:number
    
      if(groupVals.type === 'box') {
        boxCount++
        groupIndex = boxCount
      } else if(groupVals.type === 'pyramide') {
        pyramideCount++
        groupIndex = pyramideCount
      }

      addedGroups.push(
        { 
          id: `${groupVals.type}${groupIndex}`,
          type: groupVals.type, 
          position: getRandomPosition(), 
          sizes: [groupVals.length, groupVals.width, groupVals.height],
          colors: getRandomColors(sidesNum)
        }
      )
    }

    setGroups(prev => [...prev, ...addedGroups])  
    
  }, [])

  const handleResetGroups = useCallback(() => {
    setGroups([])   
    boxCount = 0
    pyramideCount = 0  
  }, [])

  const handlePickGroup = useCallback((groupId: string) => {
    setActiveGroupId(groupId) 
  }, [])

  return { groups, activeGroupId, handleAddGroup, handleResetGroups, handlePickGroup }
}