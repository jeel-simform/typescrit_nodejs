 import {Schema,model,Document}  from "mongoose";


export interface UserDocument extends Document{
       name:string,
        dept:string
}

 const userSchema=new Schema<UserDocument>({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    }
 })
 
const UserModel=model<UserDocument>('User',userSchema)

export default UserModel
