import Image from 'next/image'
import AboutImage from '@/public/images/about-02.jpg'
import AboutLogo from '@/public/images/about-logo.png'

export default function AboutStory() {  
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-10">

          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is simple yet profound: to seamlessly connect diners with restaurants and dhabas through our cutting-edge digital menu platform. We aim to redefine the way people explore, order, and enjoy food, fostering a more enjoyable and efficient dining experience for all.
            </p> 
          </div>

           <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Who We Are</h3>
            <p className="text-lg text-gray-600 mb-8">
             We are a team of dedicated individuals driven by a shared vision of transforming the dining industry. With backgrounds in technology and design, we bring a diverse range of expertise to the table, allowing us to create innovative solutions that cater to the needs of both diners and restaurateurs.
            </p> 
          </div> 

           <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">What We Do</h3>
            <p className="text-lg text-gray-600 ">
            ScanCuisine specializes in creating dynamic digital menus that bring menus to life in a visually engaging and interactive format. Through the use of QR codes, customers can effortlessly access menus from their smartphones, enabling them to explore dishes and enjoy a seamless dining experience.
            </p> 
          </div> 

        </div>
      </div>
    </section>
  )
}