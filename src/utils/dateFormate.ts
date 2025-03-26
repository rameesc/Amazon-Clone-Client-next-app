
import { format } from "date-fns"



export const dateFormatted=(date:string)=>{
   return format(date,"MM-dd-yyyy")
}