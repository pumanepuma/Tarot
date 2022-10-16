import { authHost } from ".";
import { ICard } from "../models/Card";

export async function createAlignment(userId:string,name:string,cards:ICard[]){
    try{
        const cardsIds = cards.map(card => card._id)
        const res = await authHost.post('/api/alignments',{userId,name,cards:cardsIds})
        return res.data
    }
    catch(e){
        console.log(e)
    }
}

export async function getAlignments(userId:string){
    try{
        const res = await authHost.get(`/api/alignments?id=${userId}`)
        return res.data
    }
    catch(e){
        console.log(e)
    }
}

export async function getOne(id:string){
    try{
        const res = await authHost.get(`/api/alignments/${id}`)
        return res.data
    }
    catch(e){
        console.log(e)
    }
}

export async function deleteAlignment(id:string){
    try{
        const res = await authHost.delete(`/api/alignments/${id}`)
        return res.data
    }
    catch(e){
        console.log(e)
    }
}