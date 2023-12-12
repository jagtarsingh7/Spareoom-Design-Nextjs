'use client'
import ViewDetectAnimation from "@component/components/animationComponents/viewDetectAnimation/ViewDetectAnimation"
import QuoteForm from "@component/components/dataComponents/quoteForm/QuoteForm"
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


    useChain([propAnimation2, propAnimation4, propAnimation3])

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
                <div className="flex justify-center items-center w-full min-h-fit ">
                    <div className="flex w-1/6 text-3xl ">
                        <button>
                            {"<"}
                        </button>

                    </div>
                    <ViewDetectAnimation styles="flex flex-grow" direction={"Y"} speed={1000} level={10} to={0} repeat={true}>
                        <section className="body-font overflow-hidden ">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Discover Your Style Today</h2>
                                        <h1 className=" text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
                                        <div className="flex mb-4">
                                            <a className="flex-grow text-red-500 border-b-2 font-roboto b py-2 md:text-4xl text-xl  px-1">Description</a>
                                            {/* <a className="flex-grow border-b-2 border-gray-300order-red-500 py-2 text-lg px-1">Reviews</a>
                                    <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
                                        </div>
                                        <p className="leading-relaxed mb-4">Browse our product categories and begin your design journey with SpareRoom. We invite you to explore, envision, and embrace a world of design possibilities.</p>
                                        <div className="flex">
                                            <span className="title-font font-medium text-2xl ">$58.00</span>
                                            
                                        </div>
                                    </div>
                                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                                </div>
                            </div>
                        </section>
                    </ViewDetectAnimation>

                    <div className="flex w-1/6 text-3xl ">
                        <button>
                            {">"}
                        </button>

                    </div>
                </div>

            </MyDiv>

            <MyDiv customCssPicOuter={'flex justify-end items-center absolute top-0 h-screen w-full py-10 md:pt-5 -z-10'}
                    picOpp={true}
                    customCssPicInner={'w-1/3 h-4/6 rounded-md dark:opacity-80 opacity-95'}
                    backgroundImageName={"background/pictures-04.png"} >
                    <div className="flex min-h-screen w-full p-10 z-50 border-blue-600">
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
    )
}