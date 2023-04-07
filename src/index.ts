import express,{Request,Response} from 'express'
import {router} from './routes/route'

const app=express();

const PORT =5000;
app.use('/',router)


app.listen(PORT,():void=>{
    console.log('server listening on port 5000');
    
});