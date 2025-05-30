export interface IProduct{
    id:string;
    name:string;
    data:string;
    total:number
}

export interface IListProduct{
    data:IProduct[]
}