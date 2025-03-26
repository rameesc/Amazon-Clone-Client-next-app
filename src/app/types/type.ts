



export type UserProps={
    email:string,
    password:string,
    loginDomain:string,
    restPasswordLink:string,
    emailVerifyLink:string,
    isBlocked:string;
    _id:string,
    role:string,
    photo:string,
    
     name:string
    phone:string
}
export type BannerData={
    _id:string,
bannerPhoto:string,
link:string,
product:string,
isDeleted:string|null,

createdAt:string,
updatedAt:string,

}
export type ProductBrandProps={
    brandName:string
    systemName:string
    slug:string
    _id:string
}

export type CategoriesProps={

    systemName:string
    displayName:string,
    parent:ProductBrandProps
    brands:string[]
    slug:string
    isDisabled:string,
    _id:string

}
export type AdminProps={

    name:string
    _id:string
    shopname:string,
    geolocation:{
        type:string,
        coordinates:string[]
    }
    address:string
    shippingRate:number
    shippingCost:number
    district:string
    muncipality:string
    wardno:number
    businessInfo:string
    adminBank:string
    adminWareHouse:string
    phone:number
    email:string
    password:string
    photo:string
    holidayMode:{
        start:number
        end:number
    },
    salt:string
    role:'admin'|"superadmin"
    resetPasswordLink:string
    emailVerifyLink:string
    isVerified: string
    isBlocked:string

}

export type ProductImagesProps={

    thumbnail:string
    _id:string,
    medium:string
    large:string
    productLink:ProductProps
   
}

export type RemarkProps={
    comment:string
    isDeleted:string
    _id:string
}
export type ProductProps={
    _id:string
   name:string
   brand:ProductBrandProps
   quantity:number
   category:CategoriesProps[]
   averageRating:number
   totalRatingUser:number
   soldBy:AdminProps
   images:ProductImagesProps[]
   warranty:string
   return:string
   size:string[]
   model:string
   color:string[]
   weight:string[]
   description:string
   highlights:string
   tags:string[]
   price:number
   discountRate:number
   videoURL:string[]
   isVerified:string
   isRejected:string
   isDeleted:string
   isFeatured:string
   viewsCount:number
   trendingScore:number
   noOfSoldOut:number
   slug:string
   availableDistricts:string[]
   remark:RemarkProps


}
export type CartProps={

    user:UserProps
    product:ProductProps
    quantity:number
    productAttributes:string
    isDeleted:string
    _id:string

}

export type AddressTypes={
    user:string
    _id:string
    city:string
    country:string
    state:string
    
    pinCode:string
    area:string
    label:"home"|"office"|"other"
    address:string
    phone:string
    isActive:string |null
    createdAt:string,
    updatedAt:string,
}

type OrderOptionrRazarpay={
    
        totalAmount:number
        addressId:string
        paymentMethod:string
        shippingCharge:number|string
        user:AddressTypes

    
}

type RazorpayResponese={
    orderOption:OrderOptionrRazarpay
     razorpay_order_id: string
     razorpay_payment_id: string
     razorpay_signature:string
    status:boolean
}
export type CreateOrderRazorpayOption={
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id:string
    handler: (response:RazorpayResponese) => void;
    prefill?: {
      name:string
      email?: string;
      contact?: string;
    };
    theme:{
      color:string
    }
     
   
    
  }
export type RazorpayOption={
        amount:number
        amount_due:number
        amount_paid:number
        attempts:number
        created_at:number
        currency:string
        entity:string
        id:string
        notes: string[],
        offer_id: string|null,
        receipt:string| null,
        status:string
}

export type OrderOption={
    addressId:string
    paymentMethod:string
    totalAmount:number  
}

export type PaymentProps={

    user:UserProps
    order:OrderProps
    method: string
    shippingCharge:string
    amount:string
    returnedAmount:string
    transactionCode:string
    from:number
    isDeleted:string
    _id:string

}

export type DispatchProps={

    email:string,
    name:string
    password:string,
    address:string,
    restPasswordLink:string,
     phone:number
    isBlocked:string;
    _id:string,
   

}

export type OrderStatusChangeProps={
  
      currentStatus:string
      activeDate:string
      approvedDate:string
      dispatchedDetail: {
          dispatchedDate:string
          dispatchedBy:DispatchProps
      },
      cancelledDetail: {
          cancelledDate:string
         
          cancelledByUser:{
              email:string
              name:string
              role:string
              _id:string

          }
          cancelledByAdmin:{
              email:string
              name:string
              role:string
              _id:string
          }
          remark:{
              comment:string
              _id:string
          }
      },
      completedDate:string
      tobereturnedDate:string
      // tobeReturnedDetail: {
      //     tobereturnedDate: {
      //         type: Date
      //     },
      //     remark: {
      //         type: Schema.Types.ObjectId,
      //         ref: 'remark'
      //     },
      // },        
      returnedDetail: {
          returnedDate:string
          returneddBy:string
          remark:string
      },
 

}

export type OrderProps={
    _id:string
    user:UserProps
    orderID:string
    product:ProductProps
    payment:PaymentProps
    quantity:number
    soldBy:AdminProps
    status: {
        currentStatus:string
        activeDate:string
        approvedDate:string
        dispatchedDetail: {
            dispatchedDate:string
            dispatchedBy:DispatchProps
        },
        cancelledDetail: {
            cancelledDate:string
            cancelledByUser:{
                email:string
                name:string
                role:string
                _id:string

            }
            cancelledByAdmin:{
                email:string
                name:string
                role:string
                _id:string
            }
            remark:{
                comment:string
                _id:string
            }
        },
        completedDate:string
        tobereturnedDate:string
        // tobeReturnedDetail: {
        //     tobereturnedDate: {
        //         type: Date
        //     },
        //     remark: {
        //         type: Schema.Types.ObjectId,
        //         ref: 'remark'
        //     },
        // },        
        returnedDetail: {
            returnedDate:string
            returneddBy:string
            remark:string
        },
    },
    shipto:{
        region:string
        city:string
        area:string
        address:string
        geolocation:string
        phoneno:string
    },
    isPaid:boolean
    cancelledByModel:string
    productAttributes:string


}


export type ReviewProps={
    user:UserProps
    _id:string
    product:ProductProps
    comment:string
    star:number
    createdAt:string,
    updatedAt:string,
}

export type CategoryType={
            _id:string,
            systemName:string,
            displayName:string,
            image:string
            brands:string[]
            isDisabled:string|null,
            createdAt:string,
            updatedAt:string,
          
}

export type ProductGeneralFilterType={
    sizes:string[],
    brands:ProductBrandProps[],
    warranties:string[],
    colors:string[],
    weights:string[],
    prices:number[],
    ratings:number[],
    discount:number[]
}

export type WishlistType={
    _id:string
    user:UserProps
    product:ProductProps
    quantity:number
    isDeleted:string|null
    createdAt:string,
    updatedAt:string,
}