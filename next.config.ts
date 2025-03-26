import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images:{
  //   domains:["lh3.googleusercontent.com","localhost"],
    
  // }
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"lh3.googleusercontent.com"
      },
      {
        protocol:"http",
        hostname:"localhost"
      },
      {
        protocol:"https",
        hostname:"new.iamramees.com"
      },
    ]
  }
};

export default nextConfig;
