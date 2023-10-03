'use client'

import { IBannerProp } from '../../../Interface/Interfaces';
import { Children } from 'react';
import Image from 'next/image';
import { useState } from "react";
import Loading from '../../../app/loading';
import { Chilanka } from 'next/font/google';

export default function Banner(props: IBannerProp) {

    const {  backgroundImageName, children,  headerOn, customCssPicInner, customCssPicOuter } = props

    const [loader, setLoader] = useState(false)

    const handleImageLoad = () => {
        setLoader(true)
    };

    return (
        <div className='h-screen relative'>
            <div className={customCssPicOuter}>
                <Image quality={75} onLoad={handleImageLoad} height={500} width={500} className={customCssPicInner} priority style={{ objectFit: 'cover' }} src={`/images/${backgroundImageName}`} alt={'banner'} />
            </div>
            <div className='flex flex-col h-full w-full container mx-auto  relative'>
               {headerOn}
                {loader ? (
                        <div className="flex-grow flex flex-col  dark:text-white text-black "> 
                          {children}
                        </div>
                ) : (
                    <Loading />)}
            </div>
        </div>
    )
}