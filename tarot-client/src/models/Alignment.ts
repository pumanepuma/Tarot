import { ICard } from "./Card";

export interface IAlignment{
    _id:string,
    name:string,
    userId:string,
    cards:ICard[]
}