'use client'
import { IMyDivProp } from '../../../Interface/Interfaces';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Loading from '@component/app/loading';

export default function MyDiv(props: IMyDivProp) {

    const { picOpp, backgroundImageName, children, customCssPicInner, customCssPicOuter } = props
    const [loader, setLoader] = useState(false)
    const handleImageLoad = () => {
        setLoader(true)
    };

    useEffect(() => {
        setLoader(true);
    }, [])


    return (
        <div className='relative dark:bg-black'>
            {picOpp &&
                <div className ={` z-20 ${customCssPicOuter}`}>
                    <div className={` z-20 ${customCssPicInner}`}>
                        <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} onLoad={handleImageLoad} src={`/images/${backgroundImageName}`} alt={'banner'} />
                    </div>
                </div>
            }
            <div className='flex w-full py-10 border-8 border-yellow-200 z-20'>
                {loader ? (
                    <div className=" min-h-screen flex w-full container mx-auto dark:text-white text-black z-20 ">
                        {children}
                    </div>
                ) : (
                    <Loading />)}
            </div>
        </div>

    )
}