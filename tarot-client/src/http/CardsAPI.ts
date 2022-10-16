import axios from "axios";
import { host } from ".";
import { REACT_APP_API_URL } from "../utils/constants";

export async function getAllCards(){
    try{
        const res = await host.get(`/api/cards`)
        return res.data
    }
    catch(e){
        console.log(e)
    }
}

export async function generateAlignment(num:number){
    try{
        const res = await host.get(`/api/cards/random?num=${num}`)
        return res.data
    }
    catch(e){
        console.log(e)
    }
}

export async function getOneCard(id:string){
    try{
        const res = await host.get(`/api/cards/${id}`)
        return res.data
    }
    catch(e){
        console.log(e)
    }
}