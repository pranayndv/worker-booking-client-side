import React from 'react'

function about() {
  return (
    <section>
        <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="/img/about/about.png"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text text-xl">
            <span class="text-gray-500 border-b-2 border-black uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-gray-500">Our Company</span>
            </h2>
            <p class="text-gray-700 ">
            <p className='mb-2'>
            Bookie is a pioneering platform dedicated to transforming the landscape of local services by bringing convenience right to your doorstep. Our mission is to redefine the way people access essential services, making them more accessible, reliable, and hassle-free.</p>
                <p className='mb-2'>
            With a commitment to innovation and customer satisfaction, Bookie.com offers a comprehensive range of home services, spanning from household repairs and maintenance to beauty and wellness, all conveniently accessible through our user-friendly app or website.
            </p> <p className='mb-2'>
            Our nationwide network of service providers ensures that no matter where you are, you can rely on Bookie.com to deliver prompt and professional assistance. Whether it's fixing a leaky faucet, getting a haircut, or arranging for a yoga session, we've got you covered.
            </p><p className='mb-2'>
            At Bookie.com, we believe in the power of technology to simplify lives and empower communities. Join us in our journey to make everyday tasks easier and more enjoyable for everyone. Experience the convenience of doorstep services with Bookie.com today!
            </p></p>
        </div>
    </div>
</div>
    </section>
  )
}

export default about