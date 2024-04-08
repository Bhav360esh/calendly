import React from 'react'
import background from '../../assets/images/bg.png';


const Hero = () => {
  return (


<section class="bg-center bg-no-repeat bg-blend-multiply pt-20 mb-10 pb-10 dark:bg-gray-800 dark:mb-0 dark:pb-20" style={{ backgroundImage: `url(${background})` }}>
<div class="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
        <h3 class='my-6 text-xl tracking-wide leading-none text-blue-600 dark:text-white'> SOLUTIONS </h3>
        <h1 class="my-12 text-6xl font-extrabold tracking-tight leading-none text-other md:text-5xl lg:text-6xl dark:text-white"> <span class="text-blue-700">Calendly</span> for the work you do</h1>
        <p class="my-10 text-lg font-extralight text-other lg:text-2xl sm:px-16 lg:px-48 dark:text-gray-400">Across a range of uses, Calendly helps people and teams build efficiency, professionalism, and results into the work they do.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex no-underline px-10 my-10 py-5 justify-center items-center text-base font-medium text-center text-white rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Contact Sales
            </a> 
        </div>
    </div>
</section>


  )
}

export default Hero