import Express  from "express";
import {client} from "@repo/db/client"
import {userschema ,roomschema } from "@repo/common/zod"

const appp=Express();
appp.use(Express.json());

appp.post("/signin",async(req,res)=>{
    const parseddata=userschema.safeParse(req.body);
    if(!parseddata.success){
        return res.json({
            message:"the data format is not right"
        })
    }
    try{
    const user=await client.user.create({
        data:{
            username:parseddata.data.username,
            email:parseddata.data.email,
            password:parseddata.data.password
        }
    })
    res.json({
        message:"the user data is stored"
    })}catch(e){
        console.log(e);
        return res.json({
            message:"fatt gaya mc"
        })
    }
})









appp.listen(3000);