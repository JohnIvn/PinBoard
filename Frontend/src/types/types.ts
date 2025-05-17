export interface Position {
  x: number;
  y: number;
}

export interface Note {
  id: string;
  text: string;
  color: string;
  textColor: string;
  position: Position;
}
