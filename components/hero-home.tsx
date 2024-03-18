 
import Image from 'next/image'
import FlyerImage from "@/public/images/flyer-logo.png";
import "./hero-home.css"

export default function HeroHome() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute  -left-40 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1460" height="778" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 main-banner">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">ScanCuisine</span> <br /> Elevating Your Dining Experience!</h2>
              <div className="max-w-3xl mx-auto">
              <p className="md:text-xl sm:text-sm sm:px-2 md:px-0 text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150"> At ScanCusinie, we're revolutionizing the way you explore menus and savor delectable dishes. Say goodbye to traditional paper menus and welcome the future of dining with our digital menu service!</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Demo</a>
                </div> 
              </div>
            </div>
            </div>
           
            
          <Image src={FlyerImage} alt="flyer image" className='flyer-image' priority={false}/>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}

        </div>

      </div>
    </section>
  )
}