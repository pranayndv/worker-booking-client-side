import Link from "next/link"
export default function SignUp(){
    return(
    
   <section class="bg-[#f6f4ff]">
		<div class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">

			<div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
				<h1 data-aos="fade-right" data-aos-once="true" class="my-4 text-5xl font-bold leading-tight text-darken">
					<span class="text-[#23bdee] animate-bounce">Thank you!</span> Your Application in under verification.
				</h1>
				<p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="leading-normal text-2xl mb-8">bookie will inform soon...</p>
				<div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
					<Link href="/" class="lg:mx-0 bg-black text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						Home
					</Link>
					<div class="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						<button class="bg-white w-14 h-14 rounded-full flex items-center justify-center">
							<svg class="w-5 h-5 ml-2" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
							</svg>
						</button>
						<span class="cursor-pointer">Watch how it works</span>
					</div>
				</div>
			</div>

			<div class="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
				<img data-aos="fade-up" data-aos-once="true" class="w-10/12 mx-auto 2xl:-mb-20 my-[4rem] overflow-hidden" src="/img/signup/girl2.png" />
		
			</div>
		</div>
		<div class="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
			<svg class="xl:h-[10rem] xl:w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
			</svg>
			<div class="bg-white w-full h-[11rem] -mt-px"></div>
		</div>
	</section>


    )
}