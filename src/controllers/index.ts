import { create } from 'domain';
import express ,{Request, Response} from 'express';
import connects from '../config/db'
import {createUser,findUser,findAndUpdate,deleteUser} from '../services/user'



const getHome=async(req:Request,res:Response)=>{

    const user=await createUser({name:"jeel",dept:"ce"})

    // const user=await findAndUpdate({name:"jeel"},{dept:"IT"},{new:true})

    // const user=await findUser({_id:"642fc2a8c763db722087406c"})
    // const user=await deleteUser({_id:"642fc2a8c763db722087406c"})

    res.json({
        message:"welcome to home page",
        data:user
    })

}

connects()

export{
    getHome
}