import Image from 'next/image' 

import MenuManagementImage from "@/public/images/menu-management.jpeg";
import OperationsImage from "@/public/images/operations.jpeg";
import CustomerMangementImage from "@/public/images/customer-management.jpeg";
import VisibilityImage from "@/public/images/visibility.jpeg";
import CostImage from "@/public/images/cost.jpeg";
import TrendsImage from "@/public/images/trends.jpeg";

import "./news.css"
 


export default function News() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-3 md:py-5">

        
         
 
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

               <article className="flex flex-col h-full md:pr-3 sm:pr-0 news-boxes" data-aos="zoom-y-out" data-aos-delay="300">
                <header>
                  <a href="#0" className="block mb-6 align-middle justify-center">
                    <figure className="relative h-0 pb-9/16  justify-center overflow-hidden translate-z-0 rounded align-middle">
                      <Image className="svg-images h-full w-full absolute inset-0  justify-center object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={MenuManagementImage} width={300} height={150} alt="News 03" />
                    </figure>
                  </a> 
                  <h1 className="text-xl text-center  font-bold leading-snug tracking-tight">
                    Flexible Menu Management
                  </h1>

                   <h3 className='py-4 text-center '>Scancuisine's admin panel enables restaurants and dhabas to easily edit and update their menus. This flexibility is crucial for adapting to changing trends, incorporating seasonal offerings, and responding to customer feedback promptly.</h3>
                </header> 
              </article>
 
 
              <article className="flex justify-center align-middle  flex-col h-full  md:pr-3 sm:pr-0 news-boxes" data-aos="zoom-y-out" data-aos-delay="150">
                <header  >
                  <a href="#0" className="block mb-6 justify-center">
                    <figure className="relative h-0 pb-9/16 align-middle overflow-hidden translate-z-0 rounded">
                      <Image className="svg-images absolute  inset-0 h-full w-full justify-center object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={OperationsImage} width={200} height={200} alt="News 02" />
                    </figure>
                  </a> 
                  <h1 className="text-xl font-bold leading-snug tracking-tight">
                   Streamlined Operations
                  </h1>

                  <h3 className='py-4'>By digitizing menus, Scancuisine streamlines the ordering process and reduces the reliance on traditional paper menus. This efficiency extends to the backend, allowing restaurants to manage orders, track customer preferences, and optimize inventory seamlessly.</h3>
                </header> 
              </article>

              {/* 3rd article */}
              <article className="flex flex-col h-full md:pr-3 sm:pr-0  news-boxes"data-aos="zoom-y-out" data-aos-delay="300">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="svg-images  absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={CustomerMangementImage} width={352} height={198} alt="News 03" />
                    </figure>
                  </a> 
                  <h1 className="text-xl   font-bold leading-snug tracking-tight">
                    Customer Engagement
                  </h1>

                   <h3 className='py-4  '>The interactive and visual nature of Scancuisine's digital menus enhances customer engagement. Restaurants can leverage this platform to showcase featured dishes, share chef recommendations, and engage with customers through enticing visuals and detailed descriptions.</h3>
                </header> 
              </article>

               {/* 4rd article */}
             
              <article className="flex   flex-col h-full  md:pr-3 sm:pr-0 news-boxes" data-aos="zoom-y-out">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="svg-images  absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src={VisibilityImage} width={352} height={198} alt="News 01" />
                    </figure>
                  </a>

                  <div>
                    <h1 className="text-xl font-bold leading-snug tracking-tight">Enhanced Visibility</h1>
                  </div>
                  
                  <h3 className='py-4'>
                    Scancuisine provides restaurants and dhabas with a platform to showcase their menus digitally. This increased visibility can attract a larger audience, including tech-savvy customers who prefer the convenience of digital interactions.
                  </h3>
                </header> 
              </article>

               {/* 5rd article */}
              <article className="flex flex-col h-full md:pr-3 sm:pr-0  news-boxes"data-aos="zoom-y-out" data-aos-delay="300">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="svg-images  absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={CostImage} width={352} height={198} alt="News 03" />
                    </figure>
                  </a> 
                  <h1 className="text-xl  font-bold leading-snug tracking-tight">
                    Cost Efficiency
                  </h1>

                   <h3 className='py-4 '>Going digital with Scancuisine reduces costs associated with printing and distributing physical menus. This cost efficiency can contribute to the financial health of restaurants and dhabas, freeing up resources for other aspects of business expansion.</h3>
                </header> 
              </article>

               {/* 6rd article */}
              <article className="flex   flex-col h-full  md:pr-3 sm:pr-0 news-boxes" data-aos="zoom-y-out" data-aos-delay="300">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="svg-images  absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={TrendsImage} width={352} height={198} alt="News 03" />
                    </figure>
                  </a> 
                  <h1 className="text-xl font-bold leading-snug tracking-tight">
                    Adaptability to Trends
                  </h1>

                   <h3 className='py-4'>Scancuisine allows restaurants and dhabas to stay agile and adapt to industry trends quickly. Whether it's incorporating new cuisines, introducing innovative dishes, or participating in food trends, the digital platform facilitates swift adjustments.</h3>
                </header> 
              </article>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}