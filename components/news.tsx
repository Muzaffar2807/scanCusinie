import Link from 'next/link'
import Image from 'next/image'
import NewsImage01 from '@/public/images/news-01.jpg'
import NewsImage02 from '@/public/images/news-02.jpg'
import NewsImage03 from '@/public/images/news-03.jpg'
import NewsAuthor01 from '@/public/images/news-author-01.jpg'
import NewsAuthor02 from '@/public/images/news-author-02.jpg'

export default function News() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-3 md:py-5">

        
         {/*  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">Here are several ways in which Scancuisine can contribute to the growth and scalability of these establishments:</h2>
          </div> */}
 
         {/*  <div className="mb-12 md:mb-16">
            <ul className="flex flex-wrap justify-center text-sm font-medium -m-2">
              <li className="m-2">
                <a className="inline-flex text-center text-gray-100 py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out" href="#0">Developers</a>
              </li>
              <li className="m-2">
                <a className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">SaaS</a>
              </li>
              <li className="m-2">
                <a className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Web Agencies</a>
              </li>
              <li className="m-2">
                <a className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">E-Commerce</a>
              </li>
              <li className="m-2">
                <a className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Startups</a>
              </li>
            </ul>
          </div> */}
 
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

               <article className="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={NewsImage03} width={352} height={198} alt="News 03" />
                    </figure>
                  </a> 
                  <h1 className="text-xl font-bold leading-snug tracking-tight">
                    Flexible Menu Management
                  </h1>

                   <h3 className='py-4'>Scancuisine's admin panel enables restaurants and dhabas to easily edit and update their menus. This flexibility is crucial for adapting to changing trends, incorporating seasonal offerings, and responding to customer feedback promptly.</h3>
                </header> 
              </article>
 
 
              <article className="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="150">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={NewsImage02} width={352} height={198} alt="News 02" />
                    </figure>
                  </a> 
                  <h1 className="text-xl font-bold leading-snug tracking-tight">
                   Streamlined Operations
                  </h1>

                  <h3 className='py-4'>By digitizing menus, Scancuisine streamlines the ordering process and reduces the reliance on traditional paper menus. This efficiency extends to the backend, allowing restaurants to manage orders, track customer preferences, and optimize inventory seamlessly.</h3>
                </header> 
              </article>

              {/* 3rd article */}
              <article className="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={NewsImage03} width={352} height={198} alt="News 03" />
                    </figure>
                  </a> 
                  <h1 className="text-xl font-bold leading-snug tracking-tight">
                    Customer Engagement
                  </h1>

                   <h3 className='py-4'>The interactive and visual nature of Scancuisine's digital menus enhances customer engagement. Restaurants can leverage this platform to showcase featured dishes, share chef recommendations, and engage with customers through enticing visuals and detailed descriptions.</h3>
                </header> 
              </article>

               {/* 4rd article */}
             
              <article className="flex flex-col h-full" data-aos="zoom-y-out">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src={NewsImage01} width={352} height={198} alt="News 01" />
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
              <article className="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={NewsImage03} width={352} height={198} alt="News 03" />
                    </figure>
                  </a> 
                  <h1 className="text-xl font-bold leading-snug tracking-tight">
                    Cost Efficiency
                  </h1>

                   <h3 className='py-4'>Going digital with Scancuisine reduces costs associated with printing and distributing physical menus. This cost efficiency can contribute to the financial health of restaurants and dhabas, freeing up resources for other aspects of business expansion.</h3>
                </header> 
              </article>

               {/* 6rd article */}
              <article className="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={NewsImage03} width={352} height={198} alt="News 03" />
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