'use client'
import { useContext, useEffect, useRef, useState } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollButton from "../../../components/structuralComponents/scrollButton/ScrollButton";
import services from "../../../data/services.json"
import ViewDetectAnimation from "../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import MyContext from "../../../context/MyContext";
import Banner from "../../../components/structuralComponents/banner/Banner";
import Footer from "../../../components/structuralComponents/footer/Footer";
import Image from "next/image";
import Header from "@component/components/structuralComponents/header/Header";
import { animated, useChain, useSpring, useSpringRef } from "@react-spring/web";
import MyDiv from "@component/components/structuralComponents/mydiv/MyDiv";

function Services() {
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
                customCssPicInner={'w-1/2 dark:opacity-70 opacity-90'}
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
                                {/* At SpareRoom, we go beyond offering exceptional products; we offer a suite of services designed to elevate your interior design experience.
                                Our goal is to assist you at every step of your design journey, ensuring that you achieve the vision you have for your dream space. */}
                            </animated.div>
                        </div>
                        <div className="flex w-full " >
                            <animated.div style={animateSpring3} className=" flex w-3/6  text-start lg:text-3xl md:text-xl text-base ">
                                Tailored Solutions for Your Design Journey
                            </animated.div>
                        </div>
                    </div>

                </div>
            </Banner>

            {/* <MyDiv customCssPicOuter={'flex justify-start items-center absolute top-0 h-screen w-full p-10'}
                    picOpp={true} customCssPicInner={'w-1/3 h-4/6 rounded-sm'} backgroundImageName={"background/pictures-02.png"} >
                    <div className="flex justify-end text-center h-full w-full border border-red-500 p-10">
                        <div className="flex flex-col h-full items-center  w-4/6 border-8">
                            <div className="text-2xl">
                                Its time
                            </div>
                            <div className="md:text-5xl sm:text-lg text-sm font-dancing   ">
                                To Discuss your project
                            </div>
                            <div className="-my-8 divide-y-2 divide-gray-100">

                                <div className="py-4 flex flex-wrap md:flex-nowrap">

                                    <div className="md:flex-grow">
                                        <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                            <h2 className="text-xl font-medium text-gray-900 title-font mb-2">11</h2>
                                        </ViewDetectAnimation>
                                        <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                            <p className="leading-relaxed">item.description2</p>
                                        </ViewDetectAnimation>
                                    </div>
                                </div>
                                <div className="py-4 flex flex-wrap md:flex-nowrap">

                                    <div className="md:flex-grow">
                                        <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                            <h2 className="text-xl font-medium text-gray-900 title-font mb-2">11</h2>
                                        </ViewDetectAnimation>
                                        <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                            <p className="leading-relaxed">item.description2</p>
                                        </ViewDetectAnimation>
                                    </div>
                                </div>
                                <div className="py-4 flex flex-wrap md:flex-nowrap">
                                    <div className="md:flex-grow">
                                        <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                            <h2 className="text-xl font-medium text-gray-900 title-font mb-2">11</h2>
                                        </ViewDetectAnimation>
                                        <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                            <p className="leading-relaxed ">item.description2</p>
                                        </ViewDetectAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MyDiv> */}
            <MyDiv customCssPicOuter={'flex justify-start items-center absolute top-0 h-screen w-full p-10'}
                picOpp={true} customCssPicInner={'w-1/3 h-4/6 rounded-sm'} backgroundImageName={"background/pictures-02.png"} >
                <div className="flex justify-end h-screen w-full">
                    <div className="flex flex-col h-full w-4/6 items-center justify-center ">
                        <div className="flex justify-center md:text-5xl sm:text-lg text-sm font-dancing ">
                            Design Consultation
                        </div>
                        <div className="flex flex-col  divide-y-2 divide-gray-100 py-5 ">
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="text-xl font-medium title-font mb-2">Begin your design journey with a personalized consultation.</h2>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <p className="leading-relaxed">Begin your design journey with a personalized consultation. Our expert designers are here to understand your style, preferences, and aspirations for your space</p>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="text-xl font-medium title-font mb-2">Begin your design journey with a personalized consultation.</h2>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <p className="leading-relaxed">Begin your design journey with a personalized consultation.</p>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyDiv>
            <MyDiv customCssPicOuter={'flex justify-end items-center absolute top-0 h-screen w-full p-10'}
                picOpp={true} customCssPicInner={'w-1/3 h-4/6 rounded-sm'} backgroundImageName={"background/pictures-02.png"} >
                <div className="flex justify-start h-screen w-full">
                    <div className="flex flex-col h-full w-4/6 items-center justify-center ">
                        <div className="flex justify-center md:text-5xl sm:text-lg text-sm font-dancing ">
                            Design Consultation
                        </div>
                        <div className="flex flex-col  divide-y-2 divide-gray-100 py-5 ">
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="text-xl font-medium title-font mb-2">Begin your design journey with a personalized consultation.</h2>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <p className="leading-relaxed">Begin your design journey with a personalized consultation. Our expert designers are here to understand your style, preferences, and aspirations for your space</p>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="text-xl font-medium title-font mb-2">Begin your design journey with a personalized consultation.</h2>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <p className="leading-relaxed">Begin your design journey with a personalized consultation.</p>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyDiv>
            <MyDiv customCssPicOuter={'flex items-start absolute top-0 h-screen w-full p-10'}
                picOpp={true} customCssPicInner={'w-full h-2/6 rounded-sm'} backgroundImageName={"background/pictures-02.png"} >
                <div className="flex justify-center h-screen w-full">
                    <div className="flex flex-col h-full w-4/6 items-low justify-end text-center ">
                        <div className="flex justify-center md:text-5xl sm:text-lg text-sm font-dancing ">
                            Design Consultation
                        </div>
                        <div className="flex flex-col  divide-y-2 divide-gray-100 py-5 ">
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="text-xl font-medium title-font mb-2">Begin your design journey with a personalized consultation.</h2>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <p className="leading-relaxed">Begin your design journey with a personalized consultation. Our expert designers are here to understand your style, preferences, and aspirations for your space</p>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="text-xl font-medium title-font mb-2">Begin your design journey with a personalized consultation.</h2>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <p className="leading-relaxed">Begin your design journey with a personalized consultation.</p>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyDiv>
            <div className="dark:bg-black w-full p-20 ">
                    <div className="container mx-auto ">
                        <Footer />
                    </div>
                </div>
        </div>
    );
}
export default Services;
