
import CurrentPageHeader from "@/components/currentPageheader"
import { getProd } from "@/services/products"
import  Image  from 'next/image';
import ZoomImage from './../../../../components/img-zoom';
import Sizes from './../../../../components/Sizes';
import { Separator } from '@/components/ui/separator';
import { ProductInfo } from './../../../../components/ProductInfo';
import DoorButton from './../../../../components/doorButton';
import Counter from "@/components/counter";
const SingleProduct = async ({params}) => {

  const prod = await getProd(params.id)
  
  return (
    <>
    <CurrentPageHeader CurrPage={'Product Details'}/>
    <div className="container  my-40 grid xl:grid-cols-2  sm:grid-cols-1">
      <div className="border-2 flex justify-center items-center w-4/5 h-4/6 col-span-1">
        <Image src={prod?.image} width={100} height={100} alt="product image" className="object-contain w-full h-full p-2"></Image>
      </div>
      <div className="col-span-1">
        <h2 className="text-2xl font-semibold">{prod?.title}</h2>
        <div className="flex items-center gap-4 my-5">
        <p className='font-semibold text-xl text-primary'>$ {prod?.price}</p>
        <p className='font-extralight relative after:w-full after:h-px after:bg-gray-500 after:absolute after:left-0 after:top-2'>$ {prod?.price + Math.trunc(prod?.price/20)}</p>
        <p className=" text-green-600">20% off</p>
        <p>{prod?.rating.rate}</p>
        <p>{prod?.rating.count}</p>
        </div>
        <div className="text-gray-600">
          {prod?.description}
        </div>

        <div className="flex items-center gap-2 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><g id="galaSecure0" fill="none" stroke="#FF324D" stroke-dasharray="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="16"><path id="galaSecure1" d="m 127.99999,239.96468 c 0,0 95.98506,-31.99503 95.98506,-111.98257"/><path id="galaSecure2" d="M 223.98505,127.98211 V 31.997059 c 0,0 -31.99502,-15.997511 -95.98506,-15.997511"/><path id="galaSecure3" d="m 128,239.96468 c 0,0 -95.985056,-31.99503 -95.985056,-111.98257"/><path id="galaSecure4" d="M 32.014944,127.98211 V 31.997059 c 0,0 31.995019,-15.997509 95.985056,-15.997509"/><path id="galaSecure5" d="M 191.99003,63.99208 C 128,111.9846 112.00249,175.97464 112.00249,175.97464 c 0,0 -15.997511,-19.0946 -31.995019,-31.99502"/></g></svg>
          <p>1 Year AL Jazeera Brand Warranty</p>
        </div>
        <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32"><path fill="#FF324D" d="M24 21v2h1.748A11.96 11.96 0 0 1 16 28C9.383 28 4 22.617 4 16H2c0 7.72 6.28 14 14 14c4.355 0 8.374-2.001 11-5.345V26h2v-5z"/><path fill="#FF324D" d="m22.505 11.637l-5.989-3.5a1 1 0 0 0-1.008-.001l-6.011 3.5A1 1 0 0 0 9 12.5v7a1 1 0 0 0 .497.864l6.011 3.5A.96.96 0 0 0 16 24c.174 0 .36-.045.516-.137l5.989-3.5A1 1 0 0 0 23 19.5v-7a1 1 0 0 0-.495-.863m-6.494-1.48l4.007 2.343l-4.007 2.342l-4.023-2.342zM11 14.24l4 2.33v4.685l-4-2.33zm6 7.025v-4.683l4-2.338v4.683z"/><path fill="#FF324D" d="M16 2A13.952 13.952 0 0 0 5 7.345V6H3v5h5V9H6.252A11.96 11.96 0 0 1 16 4c6.617 0 12 5.383 12 12h2c0-7.72-6.28-14-14-14"/></svg>
          <p>30 Day Return Policy</p>
        </div>
        <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14"><g fill="none" stroke="#FF324D" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10.02v1.01m0-6.02v.94m0 7.54c3.5 0 6-1.24 6-4c0-3-1.5-5-4.5-6.5l1.18-1.52a.66.66 0 0 0-.56-1button.88a.66.66 0 0 0-.56 1L5.5 3C2.5 4.51 1 6.51 1 9.51c0 2.74 2.5 3.98 6 3.98Z"/><path d="M6 9.56A1.24 1.24 0 0 0 7 10a1.12 1.12 0 0 0 1.19-1A1.12 1.12 0 0 0 7 8a1.12 1.12 0 0 1-1.19-1A1.11 1.11 0 0 1 7 6a1.26 1.26 0 0 1 1 .4"/></g></svg>
          <p>Cash on Delivery available</p>
        </div>
        {
          prod.category !== "electronics" && <Sizes/>
        }
        <div className="mt-5 w-full h-1 bg-gray-100 "></div>

        <div className="mt-5 flex items-center gap-16">
          <Counter id={prod.id}/>
        </div>
        
        <div className="mt-5 w-full h-1 bg-gray-100 "></div>
        <div className="mt-5 flex items-center gap-2">
        <p className="text-gray-500 text-lg ">Category: </p> <span className="text-lg">{prod.category}</span>
        </div>
      </div>
      <ProductInfo prod={prod}/>
    </div>

    </>
  )
}

export default SingleProduct
