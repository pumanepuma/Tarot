import { useSSRSafeId } from "@react-aria/ssr";
import { makeAutoObservable } from "mobx";
import { IUser } from "../models/User";

class UserStore{
    isAuth:boolean = localStorage.getItem('isAuth') ? JSON.parse(localStorage.getItem('isAuth')!):false
    userId:string = localStorage.getItem('user') || ''
    constructor(){
        makeAutoObservable(this)
    }

    setIsAuth(isAuth:boolean){
        this.isAuth = isAuth
        localStorage.setItem('isAuth',JSON.stringify(this.isAuth))
    }

    setUser(userId:string){
        this.userId = userId
        localStorage.setItem('user',this.userId)
    }
}

export default new UserStore()