'use client'
import Banner from "../components/structuralComponents/banner/Banner";
import QuoteForm from "../components/dataComponents/quoteForm/QuoteForm";
import Trophy from "../components/animationComponents/trophy/Trophy";
import Footer from "../components/structuralComponents/footer/Footer";
import ViewDetectAnimation from "../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import { useContext, useEffect, useState } from "react";
import Loading from "./loading";
import MyContext from "../context/MyContext";
import Header from "@component/components/structuralComponents/header/Header";
import { useSpring, animated, useChain, useSpringRef, useInView } from '@react-spring/web';
import MyDiv from "@component/components/structuralComponents/mydiv/MyDiv";
import SmallCoreValues from "@component/components/dataComponents/smallCoreValues/SmallCoreValues";
import Link from "next/link";

function HomeClientComponent() {

    const [loader, setLoader] = useState(false)
    const [speed2Time, setSpeed2Time] = useState(1500)
    const [level2Speed, setLevel2Speed] = useState(1500)
    const { subHead } = useContext(MyContext)

    useEffect(() => {
        if (subHead != 10) {
            setTimeout(() => {
                setLoader(true)
            }, 0)
        }
        else {
            setLevel2Speed(20)
            setSpeed2Time(100)
            setLoader(true)
        }
    }, [])

    const propAnimation1 = useSpringRef()
    const propAnimation3 = useSpringRef()
    const propAnimation4 = useSpringRef()

    const animateSpring1 = useSpring({
        ref: propAnimation1,
        to: { opacity: 1, transform: `translateY(-10%)` },
        from: { opacity: 0, transform: `translateY(100%)` },
        config: { duration: level2Speed },
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
    useChain([propAnimation1, propAnimation3, propAnimation4])

    return (
        loader ?
            <div className="">
                <Banner
                    headerOn={<Header></Header>}
                    customCssPicOuter={'flex justify-start absolute top-0 -z-10 h-screen w-full dark:bg-black'}
                    customCssPicInner={'md:w-1/2 w-4/6 dark:opacity-70'}
                    backgroundImageName={"background/pictures-02.png"}
                >
                    <div className="flex h-full items-center">
                        <div className="mt-10 flex flex-col w-full" >
                            <div className="flex w-full justify-between " >
                                <animated.div style={animateSpring3} className=" font-barlow flex flex-grow lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-start">
                                    Your Destination
                                </animated.div>
                                {/* <animated.div className=" flex justify-end w-2/6  md:text-base text-xs items-center ">
                                    At Spareöom, we curate a diverse range of high-quality interior design products to elevate your home and bring your vision to fruition.

                                </animated.div> */}
                            </div>
                            <div className="flex w-full justify-between mt-2  " >
                                <animated.div className="flex w-2/6 md:text-base text-xs text-start  py-3 ">
                                    <p>
                                        Where your dream of a beautifully designed living space comes to life.
                                    </p>
                                </animated.div>
                                <animated.div style={animateSpring4} className="font-barlow flex flex-grow justify-end text-end  lg:text-6xl md:text-4xl sm:text-2xl text-xl ">
                                    for Interior Design Excellence
                                </animated.div>
                            </div>
                        </div>
                    </div>
                </Banner>

                <MyDiv
                    customCssPicOuter={'flex justify-end absolute top-0 w-full md:px-5 h-screen -z-10'}
                    customCssPicInner={'md:w-2/6 md:h-4/6 h-0 w-0 rounded-md  '}
                    backgroundImageName={"background/pictures-01.png"}
                    picOpp={true} customPicCss={'dark:opacity-90 opacity-90 '} >
                    <div className="flex h-full flex-col font-barlow ">
                        <div className="flex h-4/4 w-full justify-start py-10 ">
                            <div className="flex flex-col w-3/6 ">
                                <ViewDetectAnimation styles="md:text-base text-xs  " direction={"X"} speed={500} level={10} to={0} repeat={true}>
                                    Crafting Dreams, Enhancing Lives
                                </ViewDetectAnimation>
                                <ViewDetectAnimation styles=" lg:text-6xl md:text-4xl text-2xl   " direction={"Y"} speed={1000} level={10} to={0} repeat={true}>
                                    About us
                                </ViewDetectAnimation>
                                <ViewDetectAnimation styles="flex flex-wrap md:text-base text-xs w-full py-5" direction={"Y"} speed={1500} level={10} to={0} repeat={true}>
                                    We are more than an e-commerce platform; we&apos;re a team of design enthusiasts, creators, and visionaries dedicated to helping you curate a space that resonates with your unique style and personality.
                                </ViewDetectAnimation>
                                <Link className="flex items-end pb-4 md:text-2xl text-xl flex-grow font-playfair" href={"/about"}>
                                    learn more
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-grow justify-center  ">
                            <Trophy />
                        </div>
                    </div>
                </MyDiv>

                <MyDiv
                    customCssPicOuter={'flex justify-center items-center  absolute top-0 h-screen w-full md:px-5 -z-10'}
                    customCssPicInner={'md:w-3/6 md:h-full  rounded-md dark:bg-transparent bg-black '}
                    backgroundImageName={"background/pictures-07.png"}
                    picOpp={true} customPicCss={'dark:opacity-70 opacity-90'} >
                    <div className="flex min-h-screen flex-col justify-end ">
                        <div className="h-1/4">
                            <SmallCoreValues />
                        </div>
                        <Link className="flex   justify-center hover:text-red-900  md:text-3xl text-2xl  font-playfair pt-10 pb-14" href={"/about"}>
                            Explore more
                        </Link>
                    </div>
                </MyDiv>

             
                <MyDiv customCssPicOuter={'flex justify-end items-center absolute top-0 h-screen w-full py-10 md:pt-5 -z-10'}
                picOpp={true}
                customCssPicInner={'w-1/3 h-4/6 rounded-md dark:opacity-90 opacity-95'}
                backgroundImageName={"background/pictures-04.png"} customPicCss={undefined} >
                    <div className="flex min-h-screen w-full py-14 z-50 border-blue-600">
                        <div className="flex flex-col h-full w-4/6 ">
                            <div className="md:text-2xl text-md font-barlow ">
                                Contact us
                            </div>
                            <div className="md:text-4xl text-xl font-barlow ">
                                to Discuss your project
                            </div>
                            <div className="flex items-end pb-4 text-2xl flex-grow">
                                <QuoteForm />
                            </div>
                        </div>
                    </div>
                </MyDiv>
                <Footer />
            </div>
            : (<><Loading /></>));
}
export default HomeClientComponent;
