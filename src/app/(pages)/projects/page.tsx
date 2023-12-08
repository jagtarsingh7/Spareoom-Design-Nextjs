'use client'
import { useContext, useEffect, useRef, useState } from 'react'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import data from "../../../data/picsLocationData.json"
import LoadingView from "../../../components/animationComponents/loadingView/LoadingView";
import ViewDetectAnimation from "../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import PorfolioPage from '../../../components/animationComponents/portfolioPage/PorfolioPage';
import Image from 'next/image';
import Link from 'next/link';
import MyContext from '@component/context/MyContext';

function Projects() {
  const parallax = useRef<IParallax>(null!)
  const [animation, setAnimation] = useState(false);
  const [show, setShow] = useState(true);

  const pics = ["/images/background/pictures-01.png", "/images/background/pictures-02.png", "/images/background/pictures-03.png", "/images/background/pictures-04.png", "/images/background/pictures-05.png", "/images/background/pictures-06.png", "/images/background/pictures-07.png", "/images/background/pictures-08.png", "images/background/pictures-09.png"
  ]

  setTimeout(() => {
    setShow(false)
  }, 7000);


  useEffect(() => {
    setAnimation(true);
  }, [])


  return (
    animation ? (<div className='flex h-screen -z-50'>
      <div className=' h-1/6 text-white z-50 w-full'>
        <header className=''>
          <div className="container mx-auto absolute top-0 z-20">
            <div className='flex flex-col z-10 '>
              <div className='flex justify-between p-3 '>
                <Link href="/" className="my-auto mr-auto">
                  <Image width={500} height={500} src="images/logo/night.svg" className="block md:h-14 mr-3 h-8" alt="Spareöom Logo" />
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      <Parallax className="dark:bg-black bg-white " ref={parallax} pages={pics.length} horizontal>
        <ParallaxLayer offset={0} speed={0.1} className=" z-50"
          style={{
            minHeight: "4rem",
            height: "20vh"
          }}>
          {show && <><div className=" flex flex-col justify-center  h-screen items-center mt-2 md:px-5 dark:text-white text-black text-center md:text-xl text-xs  rounded-lg " >
            <div className="">
              <ViewDetectAnimation direction="Y" styles={""} speed={0} level={0} to={0} repeat={false} >
                <p className="underline font-dancing mt-2">Disclaimer</p>
              </ViewDetectAnimation></div>
            <div className=" ">
              <ViewDetectAnimation direction="Y" speed={1000} styles={""} level={0} to={0} repeat={false}>
                <p className=" md:px-5  text-xs md:mt-2 mt-2 bg-slate-100 bg-opacity-20 dark:bg-slate-900 dark:bg-opacity-20 ">The images displayed on this website are the property of SpareOom Ltd. They are used for illustrative purposes only.
                  All images are subject to copyright and should not be reproduced without proper authorization</p>
              </ViewDetectAnimation>
            </div>
            <div className=" ">
              <ViewDetectAnimation direction="Y" speed={1000} styles={""} level={0} to={0} repeat={false}>
                <p className=" md:px-5 text-xl  md:mt-2 mt-2 bg-slate-100 bg-opacity-20 dark:bg-slate-900 dark:bg-opacity-20 ">
                  Slide to view images</p>
              </ViewDetectAnimation>
            </div>
            <div className='mt-20 h-32 '>
              <Image width={500} height={500} src="images/assests/hand.svg" className=" transition delay-500 animate-bounce h-20 mr-3" alt="Hand instruction Logo" />
            </div>
          </div>
          </>
          }
        </ParallaxLayer>

        <ParallaxLayer
          className="-z-50 flex justify-center items-center pb-20"
          speed={0.5}
          sticky={{ start: 0.5, end: pics.length - 1.5 }}>      
            <Image width={500} height={500} src="images/logo/logo2.svg" className="dark:hidden block md:h-14 mr-3 h-8" alt="Spareöom Logo" />
            <Image width={500} height={500} src="images/logo/night.svg" className="dark:block hidden md:h-14 mr-3 h-8" alt="Spareöom Logo" />

        </ParallaxLayer>

        {pics.map((item, index) => (
          <PorfolioPage key={index} reff={parallax} location={data[index]} offset={index} image={item} />)
        )}
      </Parallax></div>) : (<LoadingView></LoadingView>)
  )
}
export default Projects
