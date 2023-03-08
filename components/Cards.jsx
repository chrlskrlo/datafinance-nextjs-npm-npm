import React from 'react'
import Image from 'next/image'

import Single from '../public/single.png'
import Double from '../public/double.png'
import Triple from '../public/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-transparent'>
                    <Image className='w-20 mx-auto mt-[-3rem]'
                        src={Single}
                        unoptimized={true} />
                        <h2 className='text-2xl font-bold text-center py-8'>One User</h2>
                        <p className='text-center text-4xl font-bold'>₱8,200</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>100 GB Storage</p>
                            <p className='py-2 border-b mx-8'>1 Granted User</p>
                            <p className='py-2 border-b mx-8'>Send up to 50 GB</p>
                        </div>
                        <button className='bg-[#da54ff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
                    <Image className='w-20 mx-auto mt-[-3rem] bg-white'
                        src={Double}
                        unoptimized={true} />
                        <h2 className='text-2xl font-bold text-center py-8'>Two User</h2>
                        <p className='text-center text-4xl font-bold'>₱15,500</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                            <p className='py-2 border-b mx-8'>2 Granted User</p>
                            <p className='py-2 border-b mx-8'>Send up to 250 GB</p>
                        </div>
                        <button className='bg-black text-[#da54ff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-transparent'>
                    <Image className='w-20 mx-auto mt-[-3rem] bg-white'
                        src={Triple}
                        unoptimized={true} />
                        <h2 className='text-2xl font-bold text-center py-8'>Many User</h2>
                        <p className='text-center text-4xl font-bold'>₱30,200</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>900 GB Storage</p>
                            <p className='py-2 border-b mx-8'>5 Granted User</p>
                            <p className='py-2 border-b mx-8'>Send up to 500 GB</p>
                        </div>
                        <button className='bg-[#da54ff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>


            </div>
        </div>
    )
}

export default Cards