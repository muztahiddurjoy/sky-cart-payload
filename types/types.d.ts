type CarouselItem = {
    title:string,
    link:string,
    linkText:string,
    image:string
}
type Category ={
    category_name:string,
    createdAt:string ,
    id:string,
    updatedAt:string
}
type Variant = {
    id:string,
    color:string,
    createdAt:string,
    updatedAt:string
}
type Shade = {
    id:string,
    shade:string,
    createdAt:string,
    updatedAt:string
}
type Product = {
    id:string,
    product_name:string,
    price:number,
    quantity:number,
    discount:number,
    description:string,
    category:Category,
    createdAt:string,
    updatedAt:string
    shade:Shade,
    variant:Variant
}