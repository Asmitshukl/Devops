import z from "zod";

export const userschema =z.object({
    username:z.string().min(3).max(20),
    email : z.string().min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
    password:z.string()
})

export const  roomschema=z.object({
    slug:z.string(),
    roomid:z.string()
})
