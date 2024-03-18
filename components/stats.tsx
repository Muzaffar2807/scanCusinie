import Image from 'next/image'
import PlanetImage from '@/public/images/planet.png'
import PlanetAvatar03 from '@/public/images/planet-avatar-03.png'
import PlanetAvatar04 from '@/public/images/planet-avatar-04.png'
import PlanetAvatar05 from '@/public/images/planet-avatar-05.png'

export default function Stats() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4  md:text-3xl">Growing Digitally</h1>
            <p className="md:text-xl sm:text-sm sm:px-2 md:px-0 text-gray-600 mb-8">In today's digital age, growth opportunities abound for businesses willing to embrace innovation and technology. We are committed to leveraging digital strategies to drive growth and expand our reach. Through targeted marketing, strategic partnerships, and continuous technological advancements, we aim to position ourselves as a leader in the digital dining space, both locally and globally..</p>
          </div>

          {/* World illustration */}
          <div className="flex flex-col items-center pt-16 pb-12 md:pt-20 md:pb-16">
            <div className="relative">
              {/* Halo effect */}
              <svg className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" width="800" height="800" viewBox="0 0 800 800" style={{ maxWidth: '200%' }} xmlns="http://www.w3.org/2000/svg">
                <g className="fill-current text-gray-400 opacity-75">
                  <circle className="pulse" cx="400" cy="400" r="200" />
                  <circle className="pulse pulse-1" cx="400" cy="400" r="200" />
                  <circle className="pulse pulse-2" cx="400" cy="400" r="200" />
                </g>
              </svg>
              {/* White box */}
              
              {/* Globe image */}
              <Image className="relative rounded-full shadow-xl" src={PlanetImage} width={400} alt="Planet" />
              {/* Static dots */}
              <svg className="absolute top-0 w-full h-auto" viewBox="0 0 400 400" style={{ left: '12%' }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter x="-41.7%" y="-34.2%" width="183.3%" height="185.6%" filterUnits="objectBoundingBox" id="world-ill-a">
                    <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-83.3%" y="-68.5%" width="266.7%" height="271.2%" filterUnits="objectBoundingBox" id="world-ill-c">
                    <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-7.3%" y="-23.8%" width="114.5%" height="147.6%" filterUnits="objectBoundingBox" id="world-ill-e">
                    <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                  </filter>
                  <ellipse id="world-ill-b" cx="51" cy="175.402" rx="24" ry="23.364" />
                  <ellipse id="world-ill-d" cx="246" cy="256.201" rx="12" ry="11.682" />
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="world-ill-f">
                    <stop stopColor="#0070F4" stopOpacity="0" offset="0%" />
                    <stop stopColor="#0070F4" stopOpacity=".64" offset="52.449%" />
                    <stop stopColor="#0070F4" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <g transform="translate(0 -.818)" fill="none" fillRule="evenodd">
                  <use fill="#000" filter="url(#world-ill-a)" xlinkHref="#world-ill-b" />
                  <use fill="#0070F4" xlinkHref="#world-ill-b" />
                  <use fill="#000" filter="url(#world-ill-c)" xlinkHref="#world-ill-d" />
                  <use fill="#0070F4" xlinkHref="#world-ill-d" />
                  <ellipse fillOpacity=".32" fill="#0070F4" cx="293" cy="142.303" rx="8" ry="7.788" />
                  <ellipse fillOpacity=".64" fill="#0070F4" cx="250" cy="187.083" rx="6" ry="5.841" />
                  <ellipse fillOpacity=".64" fill="#0070F4" cx="13" cy="233.811" rx="2" ry="1.947" />
                  <ellipse fill="#0070F4" cx="29" cy="114.072" rx="2" ry="1.947" />
                  <path d="M258 256.2l87-29.204" stroke="#666" strokeWidth="2" opacity=".16" filter="url(#world-ill-e)" />
                  <path d="M258 251.333c111.333-40.237 141-75.282 89-105.136M136 103.364c66.667 4.543 104.667 32.45 114 83.72" stroke="url(#world-ill-f)" strokeWidth="2" strokeDasharray="2" />
                </g>
              </svg>
              {/* Dynamic dots */}
              <svg className="absolute max-w-full" width="48" height="48" viewBox="0 0 48 48" style={{ width: '12%', top: '45%', left: '50%' }} xmlns="http://www.w3.org/2000/svg">
                <g className="fill-current text-blue-600">
                  <circle className="pulse pulse-mini pulse-1" cx="24" cy="24" r="8" />
                  <circle className="pulse pulse-mini pulse-2" cx="24" cy="24" r="8" />
                  <circle cx="24" cy="24" r="8" />
                </g>
              </svg>
              <svg className="absolute max-w-full" width="48" height="48" viewBox="0 0 48 48" style={{ width: '12%', top: '19%', left: '46%' }} xmlns="http://www.w3.org/2000/svg">
                <g className="fill-current text-blue-600">
                  <circle className="pulse pulse-mini" cx="24" cy="24" r="8" />
                  <circle className="pulse pulse-mini pulse-2" cx="24" cy="24" r="8" />
                  <circle cx="24" cy="24" r="8" />
                </g>
              </svg>  
            </div>
          </div>

          {/* Items */}
         {/*  <div className="max-w-sm mx-auto grid gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-5xl pt-8 md:pt-12">
 
            <div className="text-center">
              <div className="h3 mb-1">2012</div>
              <div className="text-gray-600">Lorem ipsum is placeholder text commonly used tristique senectus et netus.</div>
            </div> 
            <div className="text-center">
              <div className="h3 mb-1">$20M</div>
              <div className="text-gray-600">Lorem ipsum is placeholder text commonly used tristique senectus et netus.</div>
            </div> 
            <div className="text-center">
              <div className="h3 mb-1">250M+</div>
              <div className="text-gray-600">Lorem ipsum is placeholder text commonly used tristique senectus et netus.</div>
            </div> 
            <div className="text-center">
              <div className="h3 mb-1">2700+</div>
              <div className="text-gray-600">Lorem ipsum is placeholder text commonly used tristique senectus et netus.</div>
            </div>
 
            <div className="text-center">
              <div className="h3 mb-1">400K</div>
              <div className="text-gray-600">Lorem ipsum is placeholder text commonly used tristique senectus et netus.</div>
            </div> 
            <div className="text-center">
              <div className="h3 mb-1">Millions</div>
              <div className="text-gray-600">Lorem ipsum is placeholder text commonly used tristique senectus et netus.</div>
            </div>

          </div> */}

        </div>
      </div>
    </section>
  )
}