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
                <div className={customCssPicInner }>
                    <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} onLoad={handleImageLoad} priority={true} src={`/images/${backgroundImageName}`} alt={'banner'} />
                </div>
            </div>
            <div className='flex flex-col h-full w-full container mx-auto relative'>
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