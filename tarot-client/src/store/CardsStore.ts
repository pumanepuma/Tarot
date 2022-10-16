import { makeAutoObservable } from "mobx";
import { ICard } from "../models/Card";

export class CardsStore{
    all:ICard[] = localStorage.getItem('allCards') ? JSON.parse(localStorage.getItem('allCards')!) : Array<ICard>()
    constructor(){
        makeAutoObservable(this)
    }

    setAll(cards:ICard[]){
        this.all = cards
        localStorage.setItem('allCards',JSON.stringify(this.all))
    }
}


export default new CardsStore()