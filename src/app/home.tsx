'use client'
import Banner from "../components/structuralComponents/banner/Banner";
import QuoteForm from "../components/dataComponents/quoteForm/QuoteForm";
import Trophy from "../components/animationComponents/trophy/Trophy";
import Footer from "../components/structuralComponents/footer/Footer";
import ViewDetectAnimation from "../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Loading from "./loading";
import MyContext from "../context/MyContext";
import Header from "@component/components/structuralComponents/header/Header";
import { useSpring, animated, useChain, useSpringRef, useInView } from '@react-spring/web';
import MyDiv from "@component/components/structuralComponents/mydiv/MyDiv";
import SmallCoreValues from "@component/components/dataComponents/smallCoreValues/SmallCoreValues";
import policies from "../data/policies.json"
import Link from "next/link";

function HomeClientComponent() {
    const policiesValues = Object.values(policies)

    const [loader, setLoader] = useState(false)
    const [speed2Time, setSpeed2Time] = useState(1500)
    const [level2Speed, setLevel2Speed] = useState(50)
    const { subHead } = useContext(MyContext)

    useEffect(() => {
        if (subHead != 10) {
            setTimeout(() => {
                setLoader(true)
            }, 2000)
        }
        else {
            setLevel2Speed(20)
            setSpeed2Time(700)
            setLoader(true)
        }
    }, [])

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
        loader ?
            <div className="">
                <Banner
                    headerOn={<Header></Header>}
                    customCssPicInner={'w-1/2 dark:opacity-70 '}
                    customCssPicOuter={'flex justify-start absolute top-0 -z-10 h-screen w-full dark:bg-black'}
                    backgroundImageName={"background/pictures-02.png"}
                >
                    <div className="flex h-full items-center">
                        <div className="mt-10 flex flex-col w-full   " >

                            <div className="flex w-full justify-between " >
                                <animated.div style={animateSpring3} className=" font-barlow flex flex-grow lg:text-8xl md:text-6xl text-4xl text-start">
                                    Your Destination
                                </animated.div>
                                {/* <animated.div className=" flex justify-end w-2/6  md:text-base text-xs items-center ">
                                    At Spareöom, we curate a diverse range of high-quality interior design products to elevate your home and bring your vision to fruition.

                                </animated.div> */}
                            </div>
                            <div className="flex w-full justify-between mt-2  " >

                                <animated.div className=" flex w-2/6 md:text-base text-xs text-start  py-3 ">
                                    <p>
                                        Where your dream of a beautifully designed living space comes to life.
                                    </p>
                                </animated.div>
                                <animated.div style={animateSpring4} className="font-barlow flex flex-grow justify-end text-end  lg:text-6xl md:text-4xl text-2xl  ">
                                    for Interior Design Excellence
                                </animated.div>
                            </div>
                        </div>

                    </div>
                </Banner>




                <MyDiv customCssPicOuter={'flex justify-end absolute top-0 w-full md:p-10 h-screen'}
                    picOpp={true} customCssPicInner={'w-1/4 h-4/6 rounded-md dark:opacity-80 opacity-95 '} backgroundImageName={"background/pictures-01.png"} >
                    <div className="flex min-h-fit flex-col font-barlow z-10 ">

                        <div className="flex h-2/4 w-full justify-start py-10 ">
                            <div className="flex flex-col w-3/6 ">
                                <div className="md:text-base text-xs  ">
                                    Crafting Dreams, Enhancing Lives
                                </div>
                                <div className=" lg:text-6xl md:text-4xl text-2xl   ">
                                    About us
                                </div>
                                <div className="flex flex-wrap md:text-base text-xs w-full py-5">
                                    We are more than an e-commerce platform; we&apos;re a team of design enthusiasts, creators, and visionaries dedicated to helping you curate a space that resonates with your unique style and personality.
                                </div>
                                <Link className="flex items-end pb-4 md:text-4xl text-2xl flex-grow font-italianno" href={"/about"}>
                                    learn more
                                </Link>

                            </div>
                        </div>
                        <div className="flex flex-grow justify-center  ">
                            <Trophy />
                        </div>

                    </div>
                </MyDiv>

                <MyDiv customCssPicOuter={'flex justify-center absolute top-0 h-screen w-full p-10'}
                    picOpp={true} customCssPicInner={'w-full md:h-3/6 h-1/4 rounded-md dark:opacity-80 opacity-95 '} backgroundImageName={"background/pictures-07.png"} >
                    <div className="flex min-h-screen flex-col justify-end z-10 ">
                        <div className="h-1/4">
                            <SmallCoreValues />
                        </div>
                        <Link className="flex justify-center hover:text-red-900  md:text-3xl text-2xl  font-dancing pt-10 pb-14" href={"/services"}>
                            Explore more
                        </Link>
                    </div>
                </MyDiv>

                <MyDiv customCssPicOuter={'flex justify-start absolute top-0 h-screen w-full md:px-10 py-20'}
                    picOpp={true} customCssPicInner={' md:w-1/3 w-2/4 h-5/6 rounded-md dark:opacity-80 opacity-95'} backgroundImageName={"background/pictures-02.png"} >
                    <div className="flex w-full justify-end m-14 ">
                        <div className=" w-2/3 h-full flex  ">
                            <section className=" body-font overflow-hidden">
                                <div className="container px-5 py-16 mx-auto">
                                    <div className="-my-8 divide-y-2 divide-gray-100">
                                        {policiesValues.map((item, index) => (
                                            <div key={index} className="py-4 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                    <ViewDetectAnimation direction={"Y"} level={10} speed={500} styles={""} to={0} repeat={false}>
                                                        <span className=" font-italianno title-font md:text-3xl text-x">{item.title}</span>
                                                    </ViewDetectAnimation>
                                                </div>
                                                <div className="md:flex-grow">
                                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={"hidden md:block"} level={0} to={0} repeat={false}>
                                                        <h2 className="md:text-lg text-md  font-barlow  title-font mb-2">{item.description1}</h2>
                                                    </ViewDetectAnimation>
                                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={" "} level={0} to={0} repeat={false}>
                                                        <p className=" leading-relaxed font-barlow ">{item.description2}</p>
                                                    </ViewDetectAnimation>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </MyDiv>

                <MyDiv customCssPicOuter={'flex justify-end items-center absolute top-0 h-screen w-full py-10 md:pt-5'}
                    picOpp={true} customCssPicInner={'w-1/3 h-4/6 rounded-md dark:opacity-80 opacity-95'} backgroundImageName={"background/pictures-04.png"} >
                    <div className="flex min-h-screen w-full  p-10 z-10">
                        <div className="flex flex-col h-full w-4/6 ">
                            <div className="md:text-2xl text-md font-barlow ">
                                Its time
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
