import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

import { getUserByEmail } from "./utils/getUserByemail"

import { loginWithGoogle } from "./utils/goooglelogin"
 
export const { handlers, signIn, signOut, auth} = NextAuth({

  
  trustHost:true,
  providers: [
    Google({
      clientId:process.env.AUTH_GOOGLE_ID,
      clientSecret:process.env.AUTH_GOOGLE_SECRET
    }),
   
    Credentials({
     async authorize(credentials) {

     
      const {email}=credentials
       
      const isUser=await getUserByEmail(email as string)

      if(!isUser||isUser==null){
        return null
      }

     
      
      return {
        _id: isUser._id,
        name: isUser.name,
        email: isUser.email,
        role: isUser.role,
        image: isUser.image || '',
        accessToken:isUser?.accessToken,
        refreshToken:isUser?.refreshToken

      };

       
        
      },
    })
  ],

  cookies:{
    sessionToken:{
      name: `__Secure-next-auth.session-token`,
       options: {
        domain:'.iamramees.com',
        path: '/',
        secure: true,
     }
    }
  },
   
   
   basePath:"/api/auth",
   
  pages:{
    signIn:"/login",
    error:"/login"
  },
  callbacks:{

      async session({token,session}){
       
       

          // if(session.user || token){

          //   session.user.email=token.email as string,
          //   session.user.name=token?.name as string,
          //   session.user.image=token.photo as string
          //   session.user.role=token?.role as string
          //   session.user.id=token._id  as string

          // }
          const isUser=await getUserByEmail(token.email as string)

          if(isUser){
           
           session.user ={
            ...session.user,
                 email:isUser.email, 
                 name:isUser.name ,
                 image:isUser.image || token.picture ||'',
                 role:isUser.role ,
                 id:isUser._id , 
                 accessToken:isUser?.accessToken,
                 refreshToken:isUser.refreshToken,
           }
            
          }

        return session
      },

      async jwt({token,user}){

       

        if(user ){
           token.email=user.email;
           token.name=user.name;
           token.photo=user.image || '';
           token.role=user.role || 'user';
           token._id=user._id;
           token.accessToken=user.accessToken;
           token.refreshToken=user.refreshToken;


        }

       

        return token
      },

      async signIn({user,account,profile}){

        if(account?.provider=="google" && profile?.email){
          const {email,name}=user
          const isUser=await getUserByEmail(email as string)

          

          if(isUser){
            return true
          }

         const users=await loginWithGoogle(email as string,name as string)
          
         

           if(users){
            return users
           }
        }

        if(account?.provider=="credentials"){

          const {email}=user

          const isUser=await getUserByEmail(email as string)
        

          if(!isUser||isUser==null){
            return false
          }

          return true

         

        }
        return false
        
        
      }




  }
})