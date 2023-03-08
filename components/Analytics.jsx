import React from 'react'
import Laptop from '../public/laptop.jpg'
import Image from 'next/image'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <Image className='w-[500px] mx-auto py-4'
                    src={Laptop}
                    unoptimized={true} />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#da54ff] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus libero consequuntur iste nostrum aliquam eos incidunt saepe inventore fugiat officiis quo, doloribus ad hic odit porro dolore? Alias, aperiam!
                    </p>
                    <button className='text-[#da54ff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>
                </div>
            </div>


        </div>
    )
}

export default Analytics