'use client'
import { useEffect, useRef, useState } from 'react'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import data from "../../../data/picsLocationData.json"
import LoadingView from "../../../components/animationComponents/loadingView/LoadingView";
import ViewDetectAnimation from "../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import PorfolioPage from '../../../components/animationComponents/portfolioPage/PorfolioPage';
import Image from 'next/image';

function Projects() {
  const parallax = useRef<IParallax>(null!)
  const [animation, setAnimation] = useState(false);
  const [show, setShow] = useState(true);

  const pics = ["/images/background/pictures-01.png", "/images/background/pictures-02.png", "/images/background/pictures-03.png", "/images/background/pictures-04.png", "/images/background/pictures-05.png", "/images/background/pictures-06.png", "/images/background/pictures-07.png", "/images/background/pictures-08.png", "images/background/pictures-09.png"
  ]

  setTimeout(() => {
    setShow(false)
  }, 5000);


  useEffect(() => {
    setAnimation(true);
  }, [])

  return (
    animation ? (
      <Parallax className="dark:bg-black bg-white" ref={parallax} pages={pics.length} horizontal>
        <ParallaxLayer offset={0} speed={0.1} className=" z-50"
          style={{
            minHeight: "4rem",
            height: "20vh"
          }}>
          {show && <><div className=" flex flex-col justify-between items-center mt-2 md:px-5 text-white text-center md:text-xl text-xs  bg-opacity-50 md:bg-transparent bg-white rounded-lg " >
            <div className="my-auto">
              <ViewDetectAnimation direction="Y" styles={""} speed={0} level={0} to={0} repeat={false} >
                <p className="underline font-dancing mt-2">Disclaimer</p>
              </ViewDetectAnimation></div>
            <div className="my-auto md:mx-10">
              <ViewDetectAnimation direction="Y" speed={1000} styles={""} level={0} to={0} repeat={false}>
                <p className="font-barlow md:px-5  md:mt-2 mt-2 ">The images displayed on this website are the property of SpareOom Ltd. They are used for illustrative purposes only.
                  All images are subject to copyright and should not be reproduced without proper authorization</p>
              </ViewDetectAnimation>
            </div>
            <div className='mt-20 h-32   '>

              <img src="images/assests/hand.svg" className=" transition delay-500 animate-bounce h-20 mr-3" alt="Spareöom Logo" />
            </div>
          </div>
          </>
          }
        </ParallaxLayer>


        <ParallaxLayer
          className="-z-50 flex justify-center items-center pb-20"
          speed={0.5}
          sticky={{ start: 0.5, end: pics.length - 1.5 }}>
          <Image width={500} height={500} src={"/images/logo/logo2.svg"} alt="project" className=" dark:hidden block h-1/4 w-1/4  shadow-xl " />
          <Image width={500} height={500} src={"/images/logo/night.svg"} alt="project" className=" dark:block hidden h-1/4 w-1/4  shadow-xl " />

        </ParallaxLayer>

        {pics.map((item, index) => (
          <PorfolioPage key={index} reff={parallax} location={data[index]} offset={index} image={item} />)
        )}
      </Parallax>) : (<LoadingView></LoadingView>)
  )
}
export default Projects
