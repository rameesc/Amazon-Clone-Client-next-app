



import { CarousalItem } from "@/components/Banner/CarousalItem";
import { LodingComponents } from "@/components/Loading/LodingComponents";
import { FeatureProduct } from "@/components/Products/FeatureProduct";
import { ProductCategory } from "@/components/Products/ProductCategory";
import { ServiceItems } from "@/components/ServiceItems";
import { WhiteSpace } from "@/components/WhiteSpace";
import { Suspense } from "react";

export default  function Home() {

  

  
 
  return (
    <div className="p-2">
      <Suspense fallback={<LodingComponents/>}>
       <CarousalItem/>
       <ServiceItems/>
       <WhiteSpace/>
       <ProductCategory/>
       <WhiteSpace/>
       <FeatureProduct/>
      
      

      </Suspense>
    </div>
  );
}
