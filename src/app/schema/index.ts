

import { z} from "zod"


export const loginValidation=z.object({
    email:z.string().email(),
    password:z.string().min(6)
})
export const registerValidation=loginValidation.extend({
    name:z.string().min(2)
})

export const AddressValidation=z.object({
           address:z.string().min(6),
            area:z.string().min(2),
            label:z.enum(["home","office","other"]),
            phone:z.string().min(10),
            
            city:z.string().min(2),
            pinCode:z.string().min(1),
            country:z.string().nonempty({message:"select country"}),
            state:z.string().nonempty()
           
})

export const reviewValidation=z.object({
      comment:z.string().min(2)
})

export const searchValidation=z.object({
    search:z.string()
})

export const contactValidation=z.object({
    name:z.string().min(2),
    email:z.string().email(),
    subject:z.string().min(6),
    message:z.string().min(6)
})

export const cancelValidation=z.object({
    remark:z.string().min(2).nonempty()
})

export const contactInputName={
    name:"name",
    email:"email",
    subject:"subject",
    message:"message"
}
export const reviewInputName={
    comment:"comment"
}
export const AddressInputName={
            address:"address",
            area:"area",
            label:"label",
            phone:"phone",
            
            city:"city",
            pinCode:"pinCode",
            country:"country",
            state:"state"

}
export const allOrderStatus ={
    "active":"active",
    "approve":"approve",
    "dispatch":"dispatch",
    "cancel":"cancel",
    "complete":"complete",
    "tobereturned":"tobereturned",
    "return":"return",
}
export const registerInputName={
    name:"name",
    email:"email",
    password:"password"
}