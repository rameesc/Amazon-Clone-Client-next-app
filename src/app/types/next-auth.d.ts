
import  {DefaultSession} from "next-auth"

declare module "next-auth" {
    interface Session {
        user:DefaultSession["user"] & {
          image?:string,
          role?:string,
          _id:string,
         accessToken:string,
          refreshToken:string
        };
    }
    interface User{
        image?:string,
        role?:string,
        _id:string,
        accessToken:string,
        refreshToken:string

    }

    
}