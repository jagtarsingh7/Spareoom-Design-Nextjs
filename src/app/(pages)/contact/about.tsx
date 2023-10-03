'use client'
import { useContext, useRef, useState } from "react";
import company from "../../../data/companyInfo.json";
import ViewDetectAnimation from '../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation';
import ScrollButton from '../../../components/structuralComponents/scrollButton/ScrollButton';
import Banner from "../../../components/structuralComponents/banner/Banner";
import Image from "next/image";
import Header from "@component/components/structuralComponents/header/Header";
import MyContext from "@component/context/MyContext";
import { useSpringRef, useSpring, useChain, animated } from "@react-spring/web";

function AboutCLientComponent() {

    
    const { subHead } = useContext(MyContext)
    // useEffect(()=>{parallax.current.scrollTo(subHead)},[subHead])
    const [loader, setLoader] = useState(false)

    const propAnimation1 = useSpringRef()
    const propAnimation2 = useSpringRef()
    const propAnimation3 = useSpringRef()
    const propAnimation4 = useSpringRef()

    const animateSpring1 = useSpring({
        ref: propAnimation1,
        to: { opacity: 1, transform: `translateY(-10%)` },
        from: { opacity: 0, transform: `translateY(100%)` },
        config: { duration: 1000 },
    })
    const animateSpring2 = useSpring({
        ref: propAnimation2,
        to: { opacity: 1, transform: `translateY(-10%)` },
        from: { opacity: 0, transform: `translateY(50%)` },
        config: { duration: 1000 },
    })

    const animateSpring3 = useSpring({
        ref: propAnimation3,
        to: { opacity: 1, transform: `translateY(0%)` },
        from: { opacity: 0, transform: `translateY(-20%)` },
        config: { duration: 1000 },
    })
    const animateSpring4 = useSpring({
        ref: propAnimation4,
        to: { opacity: 1, transform: `translateY(-10%)` },
        from: { opacity: 0, transform: `translateY(50%)` },
        config: { duration: 1000 },
    });


    useChain([propAnimation1, propAnimation2, propAnimation3, propAnimation4])
    return (
        <div>
              <Banner
                headerOn={<Header></Header>}
                customCssPicInner={'w-1/2 dark:opacity-90 opacity-95'}
                customCssPicOuter={'flex justify-end absolute top-0 -z-10 h-screen w-full dark:bg-black'}
                backgroundImageName={"background/pictures-02.png"}
            >
                <div className="flex h-full items-center">
                    <div className="mt-10 flex flex-col w-full  " >
                        <div className="flex w-full justify-between " >
                            <animated.div style={animateSpring2} className=" font-barlow flex flex-grow lg:text-8xl md:text-6xl text-4xl text-start">
                               Comming Soon
                            </animated.div>
                            <animated.div style={animateSpring4} className=" flex justify-end w-2/6  md:text-base text-xs items-center ">
                              
                                Page is under development
                            </animated.div>
                        </div>
                        <div className="flex w-full " >
                            <animated.div style={animateSpring3} className=" flex w-3/6  text-start lg:text-3xl md:text-xl text-base ">
                               
                            </animated.div>
                        </div>
                    </div>

                </div>
            </Banner>
        </div>

    );
}

export default AboutCLientComponent;
