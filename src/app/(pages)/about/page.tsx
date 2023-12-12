'use client'
import Trophy from "@component/components/animationComponents/trophy/Trophy"
import ViewDetectAnimation from "@component/components/animationComponents/viewDetectAnimation/ViewDetectAnimation"
import Banner from "@component/components/structuralComponents/banner/Banner"
import Footer from "@component/components/structuralComponents/footer/Footer"
import Header from "@component/components/structuralComponents/header/Header"
import MyDiv from "@component/components/structuralComponents/mydiv/MyDiv"
import MyContext from "@component/context/MyContext"
import { useSpringRef, useSpring, useChain, animated } from "@react-spring/web"
import Link from "next/link"
import { useContext, useState } from "react"
import policies from "../../../data/policies.json"

export default function About() {
    const { subHead } = useContext(MyContext)
    // useEffect(()=>{parallax.current.scrollTo(subHead)},[subHead])
    const [loader, setLoader] = useState(false)
    const policiesValues = Object.values(policies)

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
                customCssPicInner={'w-2/4 dark:opacity-70 dark:opacity-80'}
                customCssPicOuter={'flex justify-end absolute top-0 -z-10 h-screen w-full dark:bg-black'}
                backgroundImageName={"background/pictures-03.png"}
            >
                <div className="flex h-full items-center">
                    <div className="mt-10 flex flex-col w-full  " >
                        <div className="flex w-full justify-between " >
                            <animated.div style={animateSpring2} className=" font-playfair flex flex-grow lg:text-8xl md:text-6xl text-5xl text-start">
                                About Us
                            </animated.div>
                            {/* <animated.div style={animateSpring4} className=" flex justify-end w-2/6  md:text-base text-xs items-center ">
                                At SpareRoom, we go beyond offering exceptional products; we offer a suite of services designed to elevate your interior design experience.
                                Our goal is to assist you at every step of your design journey, ensuring that you achieve the vision you have for your dream space.
                            </animated.div> */}
                        </div>
                        <div className="flex w-full " >
                            <animated.div style={animateSpring3} className=" font-roboto flex w-3/6  text-start lg:text-2xl md:text-lg text-base ">
                                Where Dreams Meet Design
                            </animated.div>
                        </div>
                    </div>

                </div>
            </Banner>

            <MyDiv customCssPicOuter={'flex justify-start absolute top-0 w-full md:p-10 h-screen items-center -z-10'}
                picOpp={true} 
                customCssPicInner={'w-2/4 h-6/6 rounded-md dark:opacity-80  '}
                backgroundImageName={"background/pictures-02.png"}
                >

                <div className="flex h-full flex-col justify-between font-playfair z-10 ">
                    <div className="flex flex-grow w-full justify-end items-center m-5">
                        <div className="flex flex-col w-3/6 ">
                            <div className="md:text-base text-xs  ">
                            </div>
                            <ViewDetectAnimation styles=" lg:text-6xl md:text-4xl text-2xl" direction={"X"} speed={500} level={-10} to={0} repeat={true}>
                                Our Story
                            </ViewDetectAnimation>
                            <div className="flex flex-wrap md:text-base text-xs w-full py-5">
                                SpareRoom was founded by a group of design enthusiasts who recognized the transformative power of a well-curated living space. Beginning as a small venture in a local garage, our journey has been one of growth, learning, and an unyielding dedication to our customers.
                            </div>
                            <div className="flex items-start pb-4 md:text-base text-xs flex-grow" >
                                Over the years, we&apos;ve grown into a trusted platform offering a diverse range of handpicked furniture, decor, and accessories. Our focus has always been to provide high-quality, stylish solutions that suit various tastes and preferences.
                            </div>
                        </div>
                    </div>
                </div>
            </MyDiv>
            {/* <MyDiv picOpp={false} customCssPicInner={undefined} customCssPicOuter={undefined} backgroundImageName={""} >

                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                                </div>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <a className="text-red-500">example@email.com</a>
                                    <p className="leading-normal my-5">49 Smith St.
                                        Saint Cloud, MN 56301
                                    </p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MyDiv> */}

            {/* <MyDiv picOpp={false} customCssPicInner={undefined} customCssPicOuter={undefined} backgroundImageName={""} >
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                                <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
                                <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                                <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </div>
                </section>

            </MyDiv> */}

            <MyDiv customCssPicOuter={'flex justify-start items-center absolute top-0 h-screen w-full p-10 -z-10'}
                picOpp={false} customCssPicInner={'w-1/3 h-4/6 rounded-sm'} backgroundImageName={"background/pictures-05.png"} >
                <div className="flex  min-h-screen justify-center text-center w-full p-10 items-center z-10 ">
                    <div className="flex flex-col  h-full items-center  w-4/6 ">
                        <div className="text-2xl">
                        </div>
                        <div className="md:text-5xl text-xl  font-playfair   ">
                            Our Values
                        </div>
                        <div className=" mt-4 divide-y-2 divide-gray-100">
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="md:text-3xl text-2xl  title-font mb-2">Quality First</h2>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={true}>
                                        <p className="leading-relaxed md:text-lg text-sm">We believe that quality is non-negotiable. Every product on SpareRoom undergoes rigorous scrutiny to ensure it meets our high standards of craftsmanship and durability.</p>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                            <div className="py-4 flex flex-wrap md:flex-nowrap">

                                <div className="md:flex-grow">
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="md:text-3xl text-2xl   title-font mb-2">Customer-Centricity</h2>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={true}>
                                        <p className="leading-relaxed md:text-lg text-sm">Our customers are at the heart of everything we do. We value your feedback, suggestions, and ideas, and continuously strive to tailor our offerings to meet your needs and aspirations.</p>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="md:text-3xl text-2xl title-font mb-2">Design Democracy</h2>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={true}>
                                        <p className="leading-relaxed md:text-lg text-sm ">We envision a world where exceptional design is accessible to all. Through our platform, we aim to democratize interior design, making it inclusive and enjoyable for everyone.</p>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                            <div className="py-4 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={false}>
                                        <h2 className="md:text-3xl text-2xl  title-font mb-2"> Sustainability Matters</h2>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation direction={"Y"} speed={500} styles={""} level={0} to={0} repeat={true}>
                                        <p className="leading-relaxed md:text-lg text-sm"> We are committed to sustainable business practices, from responsible sourcing to eco-friendly packaging. We believe in leaving a positive impact on the environment and the communities we serve.</p>
                                    </ViewDetectAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyDiv>
            <MyDiv customCssPicOuter={'flex justify-start absolute top-0 h-screen w-full md:px-10 py-20 -z-10'}
                    picOpp={true}
                    customCssPicInner={' w-1/3 h-5/6 rounded-md dark:opacity-80 opacity-95'}
                    backgroundImageName={"background/pictures-02.png"} >
                    <div className="flex w-full justify-end z-10 ">
                        <div className=" w-2/3 h-full flex  ">
                            <section className=" body-font overflow-hidden">
                                <div className="container px-5 py-16 mx-auto">
                                    <div className="-my-8 divide-y-2 divide-gray-100">
                                        {policiesValues.map((item, index) => (
                                            <div key={index} className="py-4 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                    <ViewDetectAnimation direction={"Y"} level={10} speed={500} styles={""} to={0} repeat={false}>
                                                        <span className=" font-playfair title-font md:text-3xl text-x">{item.title}</span>
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


            <MyDiv customCssPicOuter={'flex items-start absolute top-0 h-screen w-full p-10 -z-10'}
                picOpp={true} customCssPicInner={'w-full md:h-3/6 h-2/6 rounded-sm'} backgroundImageName={"background/pictures-02.png"} >
                <div className="flex justify-center h-screen w-full z-10">
                    <div className="flex flex-col h-full w-5/6 items-low justify-end mt-5 text-center ">
                        <div className="flex justify-center md:text-5xl sm:text-2xl text-lg font-playfair ">
                            Our Mission
                        </div>
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-4  my-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed font-dancing md:text-2xl text-base">Our mission at SpareRoom is to inspire and guide you in creating spaces that reflect your personality and lifestyle. We aim to provide a seamless and delightful shopping experience, offering not just products, but a journey of design exploration..</p>
                            <span className="inline-block h-1 w-10 rounded mt-8 mb-6"></span>
                            <h2 className="font-medium title-font tracking-wider text-sm">Tima Ashley</h2>
                            <p className="font-playfair text-2xl">Senior Product Designer</p>
                        </div>

                    </div>
                </div>
            </MyDiv>
            <Footer />
        </div>
    )
}