import mongoose,{connect} from "mongoose";


function connects (){
    return connect('mongodb://mongo:Yy1GM7JnbBuKwnk0Po5g@containers-us-west-198.railway.app:6472').then(()=>{
        console.log('database connected');
        
    }).catch((e:any)=>{
        console.log(e);
        
    })
}
export default connects