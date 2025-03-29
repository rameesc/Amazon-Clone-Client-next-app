import { NextRequest,NextResponse } from "next/server";
import {auth} from '@/auth'
import { authRouter, protectedRouter } from "./app/router";


export const middleware=async(request:NextRequest)=>{

  const user=  await auth()
  const {nextUrl}=request

  const isLoggedIn=!!user
  

  if(!isLoggedIn && protectedRouter.includes(nextUrl.pathname)){
    
     return NextResponse.redirect(new URL('/',nextUrl))
  }

  if(isLoggedIn && authRouter.includes(nextUrl.pathname)){

    return NextResponse.redirect(new URL('/',nextUrl))
  }


}
export const config = {
    matcher:[ '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}