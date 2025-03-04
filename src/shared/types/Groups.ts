export type Geometry = [number, number, number]
export type GroupType = 'box' | 'pyramide'

export interface Group {
  id: string
  type: GroupType
  position: Geometry
  sizes: Geometry
  colors: string[]
}

export interface GroupParams {
  type: 'box' | 'pyramide';
  length: number;
  width: number;
  height: number;
  number: number;
}