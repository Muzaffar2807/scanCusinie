import Image from 'next/image';

import EnjoyImage from "@/public/images/enjoy.webp";
import ScanImage from "@/public/images/scan.jpeg";
import FeaistImage from "@/public/images/awaits.jpeg";
import ExploreImage from "@/public/images/explore.jpeg";
import QrCodeImage from "@/public/images/qr-code.jpeg";
import ShareImage from "@/public/images/share.jpeg"

import "./features-blocks.css"

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Operational Process</h2>
            <p className="text-xl text-gray-600">Unveil the operational process behind your dining experience with our seamless Product</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-2xl boxes">
            
              <Image className='banner-image' src={EnjoyImage} alt='enjoy' />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">No Wait, Just Enjoy</h4>
              <p className="text-gray-600 text-center">Forget about waiting for a physical menu or a waiter to take your order. With ScanCusinie, the menu is at your fingertips, giving you the freedom to decide at your own pace..</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl boxes">
             
              <Image className='banner-image' src={ScanImage} alt='scan' style={{ height: "80%"}}/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Scan </h4>
              <p className="text-gray-600 text-center">Begin your culinary journey by scanning the QR code on your table or at the entrance. This simple step opens up a digital gateway to explore the diverse and enticing menu offerings.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl boxes">
            
              <Image className='banner-image' src={FeaistImage} alt='awaits' />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Visual Feast Awaits</h4>
              <p className="text-gray-600 text-center">Immerse yourself in a visual feast as the digital menu unfolds on your device. Each dish is artfully presented with vivid images and detailed descriptions, offering a  preview of what's available.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl boxes" >
             
              <Image className='banner-image' src={ExploreImage} alt='explore' />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Browse and Explore</h4>
              <p className="text-gray-600 text-center">Take your time to peruse the menu, discovering an array of flavors and options. From appetizers to desserts, our digital menus provide an interactive  way to your dining experience.</p>
            </div>

            {/* 4th item */}
            

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-2xl boxes">
            
              <Image className='banner-image' src={QrCodeImage} alt='qr' />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">QR Codes Everywhere</h4>
              <p className="text-gray-600 text-center">Look for our distinctive QR codes at partner restaurants, dhabas, bakery's, ice cream stations across the city. Scan and unlock a world of culinary exploration wherever you go.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl boxes">
             
              <Image className='banner-image' src={ShareImage} alt='share' />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Share the Experience</h4>
              <p className="text-gray-600 text-center">Enhance your dining experience by sharing the digital menu with friends and family at the table. Engage in lively discussions about your favorite dishes and plan the perfect meal together.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}