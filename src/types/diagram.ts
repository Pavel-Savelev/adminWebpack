export interface DiagramDataPoint {
    date: Date;
    value: number;
  }
  
export interface Diagram {
  id: number;
  title: string;
  type: string;
  data: DiagramDataPoint[];
}

export interface IChargerData{
    date:Date;
    value:number,
}
