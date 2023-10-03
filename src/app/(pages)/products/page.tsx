'use client'
import ViewDetectAnimation from "@component/components/animationComponents/viewDetectAnimation/ViewDetectAnimation"
import Banner from "@component/components/structuralComponents/banner/Banner"
import Footer from "@component/components/structuralComponents/footer/Footer"
import Header from "@component/components/structuralComponents/header/Header"
import MyDiv from "@component/components/structuralComponents/mydiv/MyDiv"
import MyContext from "@component/context/MyContext"
import { useSpringRef, useSpring, useChain, animated } from "@react-spring/web"
import { useContext, useState } from "react"


export default function Products() {
    const { subHead } = useContext(MyContext)
    // useEffect(()=>{parallax.current.scrollTo(subHead)},[subHead])
    const [loader, setLoader] = useState(false)

    const propAnimation1 = useSpringRef()
    const propAnimation2 = useSpringRef()
    const propAnimation3 = useSpringRef()
    const propAnimation4 = useSpringRef()

    const animateSpring1 = useSpring({
        ref: propAnimation1,
        to: { opacity: 1, transform: `translateX(0%)` },
        from: { opacity: 0, transform: `translateX(100%)` },
        config: { duration: 1000 },
    })
    const animateSpring2 = useSpring({
        ref: propAnimation2,
        to: { opacity: 1, transform: `translateX(0%)` },
        from: { opacity: 0, transform: `translateX(-10%)` },
        config: { duration: 1500 },
    })

    const animateSpring3 = useSpring({
        ref: propAnimation3,
        to: { opacity: 1, transform: `translateY(0%)` },
        from: { opacity: 0, transform: `translateY(-20%)` },
        config: { duration: 1000 },
    })
    const animateSpring4 = useSpring({
        ref: propAnimation4,
        to: { opacity: 1, transform: `translateX(0%)` },
        from: { opacity: 0, transform: `translateX(10%)` },
        config: { duration: 1200 },
    });


    useChain([ propAnimation2, propAnimation4, propAnimation3])

    return (
        <div>
            <Banner
                headerOn={<Header></Header>}
                customCssPicInner={'w-full dark:opacity-50 opacity-90'}
                customCssPicOuter={'flex justify-end absolute top-0 -z-10 h-screen w-full dark:bg-black'}
                backgroundImageName={"background/pictures-09.png"}
            >
                <div className="flex h-full w-full justify-center items-center mt-24 ">
                    <div className="h-4/5 w-4/5 dark:bg-stone-700 rounded-xl bg-stone-200  shadow-2xl p-10 " >
                        <div className="flex flex-col h-full ">

                            <div className="flex w-full h-4/6" >
                                <animated.div style={animateSpring2} className=" font-barlow flex  flex-grow lg:text-7xl md:text-8xl text-5xl text-start items-center">
                                   <p className="border-b dark:border-white border-black">Explore Our Product Range</p> 
                                </animated.div>
                                <animated.div style={animateSpring4} className=" flex justify-end w-4/12  md:text-xl text-base items-end text-end font-dancing  dark:border-white border-black ">
                                   <span>
                                   <p>
                                    At SpareRoom, we go beyond offering exceptional products; 
                                    </p>
                                    <p className="hidden md:block">
                                    we offer a suite of services designed to elevate your interior design experience.
                                    </p>
                                   </span>
                                 
                                </animated.div>
                            </div>
                            <div className="flex flex-grow w-full items-start justify-start   " >
                                <animated.div style={animateSpring3} className=" flex w-3/6 text-start  lg:text-3xl md:text-xl text-base font-serif  ">
                                    Tailored Solutions for Your Design Journey
                                </animated.div>
                            </div>
                        </div>

                    </div>

                </div>
            </Banner>
            <MyDiv picOpp={false} customCssPicInner={undefined} customCssPicOuter={undefined} backgroundImageName={""} >
                <div className="flex w-full h-screen ">
                    <div className="flex w-1/6 text-3xl justify-center items-center">
                        <button>
                        {"<"}
                        </button>
                           
                    </div>
                    <div className="flex flex-grow">
                    <section className="body-font overflow-hidden ">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">Discover Your Style Today</h2>
                                    <h1 className=" text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
                                    <div className="flex mb-4">
                                        <a className="flex-grow text-red-500 border-b-2 font-italianno b py-2 md:text-4xl text-xl  px-1">Description</a>
                                        {/* <a className="flex-grow border-b-2 border-gray-300order-red-500 py-2 text-lg px-1">Reviews</a>
                                    <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
                                    </div>
                                    <p className="leading-relaxed mb-4">Browse our product categories and begin your design journey with SpareRoom. We invite you to explore, envision, and embrace a world of design possibilities.</p>
                                    <div className="flex border-t border-gray-200 py-2">
                                        <span className="">Color</span>
                                        <span className="ml-auto text-gray-900">Blue</span>
                                    </div>
                                    <div className="flex border-t border-gray-200 py-2">
                                        <span className="">Size</span>
                                        <span className="ml-auto ">Medium</span>
                                    </div>
                                    <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                        <span className="">Quantity</span>
                                        <span className="ml-auto ">4</span>
                                    </div>
                                    <div className="flex">
                                        <span className="title-font font-medium text-2xl ">$58.00</span>
                                        <button className="flex ml-auto text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
                                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                            </div>
                        </div>
                    </section>
                    </div>
                   
                    <div className="flex w-1/6 text-3xl justify-center items-center">
                        <button>
                        {">"}
                        </button>
                                      
                    </div>
                </div>

            </MyDiv>

            <MyDiv picOpp={false} customCssPicInner={undefined} customCssPicOuter={undefined} backgroundImageName={""} >
                <section className=" body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xstracking-widest font-medium title-font mb-1">Discover the Art of Home Styling</h2>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">Your Path to Inspired Living</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to the heart of SpareRoom, where style meets functionality, and every piece tells a unique design story. Our carefully curated product range brings you a diverse selection of furniture, decor, and accessories to transform your living space into a reflection of your personality and taste.</p>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className=" font-medium title-font mb-2">Furniture</h2>
                                <p className="leading-relaxed text-base mb-4">Discover our collection of finely crafted furniture that combines form and function seamlessly. From elegant sofas that invite relaxation to practical yet stylish dining tables, our furniture offerings cater to various tastes and preferences.</p>
                                <a className="inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl  font-medium title-font mb-2">Textiles & Fabrics</h2>
                                <p className="leading-relaxed text-base mb-4">Add comfort and warmth to your home with our range of textiles and fabrics. From sumptuous cushions to cozy throws and luxurious curtains, our textile collection allows you to personalize your space with softness and style.</p>
                                <a className=" inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl font-medium title-font mb-2">Bedroom Essentials</h2>
                                <p className="leading-relaxed text-base mb-4">Create your personal sanctuary with our bedroom essentials. Discover comfortable bedding, thoughtfully designed nightstands, spacious dressers, and more to make your bedroom a haven of relaxation and style.</p>
                                <a className=" inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl  font-medium title-font mb-2">Special Collections</h2>
                                <p className="leading-relaxed text-base mb-4">Explore our special collections curated to cater to specific themes, seasons, or design trends. These collections feature a carefully selected assortment of products that harmonize to bring a unique design aesthetic to your space.</p>
                                <a className=" inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <button className="flex mx-auto mt-16 text-white  py-2 px-8 focus:outline-none hov-600  text-lg border rounded-xl hover:bg-red-950 font-dancing bg-red-800 bg">Products</button>
                    </div>
                </section>

            </MyDiv>

          
            <div className="dark:bg-black w-full p-20 ">
                <div className="container mx-auto ">
                    <Footer />
                </div>
            </div>
        </div>
    )
}