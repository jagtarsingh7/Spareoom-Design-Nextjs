'use client'

import { IMyDivProp } from '../../../Interface/Interfaces';
import { Children } from 'react';
import Image from 'next/image';
import { useState } from "react";
import Loading from '../../../app/loading';
import { Chilanka } from 'next/font/google';
import { animated, useInView } from '@react-spring/web';
import { AnimationLoader } from 'three';

export default function MyDiv(props: IMyDivProp) {

    const { picOpp, backgroundImageName, children, customCssPicInner, customCssPicOuter } = props
    const [reff, inView] = useInView()

    return (
        <div  className='min-h-screen relative dark:bg-black'>
            {
                picOpp && <div className={customCssPicOuter}>
                    <Image quality={100} height={500} width={500} className={customCssPicInner} priority style={{ objectFit: 'cover' }} src={`/images/${backgroundImageName}`} alt={'banner'} />
                </div>
            }
            <animated.div  ref={reff} className='flex flex-col min-h-screen w-full container mx-auto justify-center dark:text-slate-100 text-black  '>
                    {inView && children}      
            </animated.div >
        </div>

    )
}