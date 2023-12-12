'use client'
import { useContext, useEffect, useRef, useState } from "react";
import ViewDetectAnimation from "../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import MyContext from "../../../context/MyContext";
import Banner from "../../../components/structuralComponents/banner/Banner";
import Footer from "../../../components/structuralComponents/footer/Footer";
import Image from "next/image";
import Header from "@component/components/structuralComponents/header/Header";
import { animated, useChain, useSpring, useSpringRef } from "@react-spring/web";
import MyDiv from "@component/components/structuralComponents/mydiv/MyDiv";
import Link from "next/link";

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
                customCssPicInner={'w-full dark:opacity-70 opacity-90'}
                customCssPicOuter={'flex justify-end absolute top-0 -z-10 h-screen w-full dark:bg-black'}
                backgroundImageName={"background/pictures-02.png"}
            >
                <div className="flex h-full items-center ">
                    <div className="mt-10 flex flex-col w-full  " >
                        <div className="flex w-full justify-between " >
                            <animated.div style={animateSpring2} className=" font-dancing flex flex-grow lg:text-7xl md:text-4xl text-lg text-start">
                                Creating Sustainable Spaces
                            </animated.div>
                            <animated.div style={animateSpring4} className=" flex justify-end w-2/6  md:text-base text-xs items-center ">
                                {/* At SpareRoom, we go beyond offering exceptional products; we offer a suite of services designed to elevate your interior design experience.
                                Our goal is to assist you at every step of your design journey, ensuring that you achieve the vision you have for your dream space. */}
                            </animated.div>
                        </div>
                        <div className="flex w-full " >
                            <animated.div style={animateSpring3} className=" font-playfair flex w-3/6  text-start lg:text-xl md:text-lg text-base ">
                            Redefining Interior Design for a Greener Tomorrow
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
            <MyDiv customCssPicOuter={'flex justify-start items-center absolute top-0 h-screen w-full '}
                picOpp={true} customCssPicInner={'w-1/3 h-4/6 rounded-sm'} backgroundImageName={"background/pictures-02.png"} >
                <div className="flex justify-end h-screen w-full">
                    <div className="flex flex-col h-full w-4/6 items-end justify-center text-end">
                        <div className="flex justify-center md:text-5xl text-3xl font-playfair ">
                        Our Approach to Sustainability
                        </div>
                        <div className="flex flex-col  divide-y-2 divide-gray-100 py-5 ">
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className=" sm:text-lg text-sm font-roboto title-font mb-2 pr-2"> We meticulously select materials that prioritize sustainability without compromising on quality. From reclaimed wood to recycled fabrics and low-impact paints, our designs embrace materials that minimize carbon footprint and promote a healthier living environment. </h2>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </MyDiv>
            <MyDiv customCssPicOuter={'flex justify-end items-center absolute top-0 h-screen w-full '}
                picOpp={true} customCssPicInner={'w-1/3 h-4/6 rounded-sm'} backgroundImageName={"background/pictures-02.png"} >
                <div className="flex justify-start h-screen w-full">
                    <div className="flex flex-col h-full w-4/6 items-center justify-center text-start">
                        <div className="flex justify-center md:text-5xl text-3xl font-playfair ">
                        Collaborating for Change
                        </div>
                        <div className="flex flex-col  divide-y-2 divide-gray-100 py-5 ">
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="sm:text-lg text-sm font-roboto title-font mb-2 px-2">Partnering with like-minded businesses and embracing collaborations allows us to amplify our impact. Together, we strive to create a world where sustainability is at the heart of every design decision. </h2>
                                    </ViewDetectAnimation>
                                    
                                </div>
                            </div>
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </MyDiv>
            <MyDiv picOpp={false} customCssPicInner={undefined} customCssPicOuter={undefined} backgroundImageName={""} >
                <section className=" body-font ">
                    <div className="container px-5 py-24 mx-auto">
                        <ViewDetectAnimation styles="flex flex-col text-center w-full mb-20" direction={"Y"} speed={1000} level={-10} to={0} repeat={false}>
                            <h2 className="text-xstracking-widest font-playfair title-font mb-1">Discover the Art of Home Styling</h2>
                            <h1 className="sm:text-3xl text-2xl font-playfair title-font mb-4 ">Your Path to Inspired Living</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-roboto">Welcome to the heart of SpareRoom, where style meets functionality, and every piece tells a unique design story. Our carefully curated product range brings you a diverse selection of furniture, decor, and accessories to transform your living space into a reflection of your personality and taste.</p>
                        </ViewDetectAnimation>
                        <ViewDetectAnimation direction={"Y"} speed={1000} level={10} to={0} repeat={false} styles="flex flex-wrap">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className=" font-playfair title-font mb-2">Furniture</h2>
                                <p className="leading-relaxed text-base mb-4 font-roboto">Discover our collection of finely crafted furniture that combines form and function seamlessly. From elegant sofas that invite relaxation to practical yet stylish dining tables, our furniture offerings cater to various tastes and preferences.</p>
                               
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl  font-playfair title-font mb-2">Textiles & Fabrics</h2>
                                <p className="leading-relaxed text-base mb-4 font-roboto">Add comfort and warmth to your home with our range of textiles and fabrics. From sumptuous cushions to cozy throws and luxurious curtains, our textile collection allows you to personalize your space with softness and style.</p>
                               
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl font-playfair title-font mb-2">Bedroom Essentials</h2>
                                <p className="leading-relaxed text-base mb-4 font-roboto">Create your personal sanctuary with our bedroom essentials. Discover comfortable bedding, thoughtfully designed nightstands, spacious dressers, and more to make your bedroom a haven of relaxation and style.</p>
                               
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl  font-playfair title-font mb-2">Special Collections</h2>
                                <p className="leading-relaxed text-base mb-4 font-roboto">Explore our special collections curated to cater to specific themes, seasons, or design trends. These collections feature a carefully selected assortment of products that harmonize to bring a unique design aesthetic to your space.</p>
                             
                            </div>
                        </ViewDetectAnimation>
                        <Link href={"/products"}>
                             <button className="flex mx-auto mt-16 text-white  py-2 px-8 focus:outline-none hov-600  text-lg border rounded-xl hover:bg-red-950 font-roboto bg-red-800 bg">Products</button>

                        </Link>
                    </div>
                </section>

            </MyDiv>
            <Footer />
        </div>
    );
}
export default Services;
