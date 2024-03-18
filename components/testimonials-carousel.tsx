'use client'

import { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Transition } from '@headlessui/react'
 
import KingsImage from "@/public/images/kings-logo.png"

export default function TestimonialsCarousel() {

  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const [autorotateTiming] = useState<number>(7000)

  interface Item {
    img: StaticImageData
    alt: string
    quote: string
    name: string
    
  }
  
  const items: Item[] = [
    {
      img: KingsImage,
      alt: 'Kings Family Dhaba',
      quote: '“Working with ScanCuisine has been a game-changer for us at Kings Family Dhaba. Their digital menu platform has streamlined our operations and enhanced the dining experience for our customers. “',
      name: 'Kings Family Dhaba',
     
    },  
     {
      img: KingsImage,
      alt: 'Kings Family Dhaba',
      quote: '“Working with ScanCuisine has been a game-changer for us at Kings Family Dhaba. Their digital menu platform has streamlined our operations and enhanced the dining experience for our customers. “',
      name: 'Kings Family Dhaba',
     
    },  
  ]

  const testimonials = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement) testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`
  }

 /*  useEffect(() => {
    heightFix()
  }, [])   */

  return (
    <section className="relative">

     

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Trusted by over 10+ Restaurants and Dhaba's </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">We take pride in delivering exceptional service and exceeding the expectations of our clients.</p>
          </div>

          

          {/* Carousel area */}
          <div className="max-w-3xl mx-auto">

            {/* Carousel */}
            <div className="relative mt-20" data-aos="zoom-y-out">

              {/* Testimonials */}
              <div className="transition-all border-2 border-gray-200 rounded bg-white">
                <div className="relative flex flex-col items-start z-10" ref={testimonials}>

                  {items.map((item, index) => (
                    <Transition
                      key={index}
                      show={active === index}
                      className="w-full text-center px-12 py-8 h-full   mx-4 md:mx-0"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterFrom="opacity-0 -translate-y-8"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-8"
                    //  beforeEnter={() => heightFix()}
                      unmount={false}
                    >
                     {/*  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2" style={{ background: '#000', borderRadius: '50%', width: '15%', height: '38%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                       
                        <Image className="relative rounded-full" src={item.img} width={120} height={80} alt={item.alt} /> 
                      </div> */} 

                   
                         <div className="justify-center flex py-2"  >
                       
                        <Image className="relative rounded-full" src={item.img} width={120} height={80} alt={item.alt} /> 
               
                      </div>
                      <blockquote className="text-xl font-medium mb-4">{item.quote}</blockquote>
                      <cite className="block font-bold text-lg not-italic mb-1">{item.name}</cite>
                      
                    </Transition>
                  ))}

                </div>
              </div>

              {/* Arrows */}
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  className="relative z-20 w-16 h-16 p-1 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:shadow-lg transform -translate-x-2 md:-translate-x-1/2"
                  onClick={() => { setActive(active === 0 ? items.length - 1 : active - 1); setAutorotate(false); }}
                >
                  <span className="sr-only">Previous</span>
                  <svg className="w-4 h-4 fill-current text-gray-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                  </svg>
                </button>
                <button
                  className="relative z-20 w-16 h-16 p-1 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:shadow-lg transform translate-x-2 md:translate-x-1/2"
                  onClick={() => { setActive(active === items.length - 1 ? 0 : active + 1); setAutorotate(false); }}
                >
                  <span className="sr-only">Next</span>
                  <svg className="w-4 h-4 fill-current text-gray-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}