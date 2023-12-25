import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { GetServerSideProps } from 'next'
import payload from 'payload'
import Footer from '../../components/Footer/Footer'
import CategoryTop from '../../components/Categories/CategoryTpp/CategoryTop'
import CategoryPage from '../../components/Categories/CategoryPage/CategoryPage'
import { ArrowLeftCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Category, Product, Social } from '../../payload-types'
import { Footer as FooterType } from '../../types/types'

const Catagorized = ({categories,products,category,hasNextPage,hasPrevPage,nextPage,prevPage,totalPage,page,social}:{categories:Array<Category>,products:Array<Product>,category:Category,nextPage:number|null,prevPage:number|null,hasNextPage:boolean,hasPrevPage:boolean,totalPage:number,page:number,social:FooterType}) => {
  return (
    <div>
      <Navbar categories={categories}/>
      <CategoryTop 
        category_name={category.category_name}
        createdAt={category.createdAt}
        id={category.id}
        updatedAt={category.updatedAt}/>
      <CategoryPage products={products}/>
      <div className='flex items-center px-5 justify-center'>
    <div className="join my-5">
      {hasPrevPage&&<Link href={`/category/${category.id}/?page=${prevPage}`}><button className="join-item btn-square btn btn-sm"><ChevronLeft height={15}/></button></Link>}
      {Array(totalPage).fill(0).map((item, index) => (
        <button className={`join-item btn-square btn btn-sm ${index+1==page&&'btn-primary'}`} key={index}>{index+1}</button>
      ))}
      {hasNextPage&&<Link href={`/category/${category.id}/?page=${nextPage}`}><button className="join-item btn-square btn btn-sm"><ChevronRight height={15}/></button></Link>}
    </div>
    </div>
      <Footer address={social.address} 
      categories={categories}
      email={social.email}
      facebook={social.facebook}
      instagram={social.instagram}
      phone={social.phone}
      whatsapp={social.whatsapp}
      />
    </div>
  )
}

export default Catagorized




export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.query.slug
  const products = await payload.find({
    collection:'product',
    page:Number(ctx.query.page?ctx.query.page:1),
    limit:12,
    where:{
      category:{
        equals:slug
      }
    }
  })
  const categories = await payload.find({
    collection:'categories',
  })
  const category = await payload.findByID({
    collection:'categories',
    id:String(slug)
  })
  // const func = sharedGetServerSideProps.bind(this);
  // return func(ctx)
  const social = await payload.findGlobal({
    slug:'social'
  });
  return {
          props: {
            categories:categories.docs?categories.docs : [],
            products:products.docs?products.docs : [],
            category:category?category:{id:'',category_name:'',createdAt:'',updatedAt:''},
            page:products.page,
            nextPage:products.nextPage,
            prevPage:products.prevPage,
            totalPage:products.totalPages,
            hasNextPage:products.hasNextPage,
            hasPrevPage:products.hasPrevPage,
            social:social?social:{}
          },
  };
};
