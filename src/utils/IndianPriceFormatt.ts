
export  const numberFormatted=(price:number,discount:number)=>{

    const amount=price-price*(discount/100)
    const formatted=new Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"INR"
    }).format(amount)

    return formatted


}