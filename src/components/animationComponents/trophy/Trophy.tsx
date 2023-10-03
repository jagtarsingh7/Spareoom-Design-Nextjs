'use client'
import LogoCarousel from "../logoCarousel/LogoCarousel"
import { useInView, } from '@react-spring/web';
import ViewDetectAnimation from "../viewDetectAnimation/ViewDetectAnimation";
import CountUp from "../countUp/CountUp";

function Trophy() {
    const [trophyRef, trophyAnimated] = useInView()
    return (
        <div className='flex items-start '>
            <section ref={trophyRef} id="trophy" className=" w-full">
                <div className="mx-auto w-full px-4 py-12 sm:px-6 md:py-16 lg:px-8">  
                   <div className="mt-8 sm:mt-12">
                        <dl
                            className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:divide-x sm:divide-gray-200">
                            <div className="flex flex-col px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Completed Projects
                                </dt>
                                <dd className="text-4xl font-extrabold dark:text-white text-black md:text-5xl">      
                                    {trophyAnimated ? (<CountUp  end={20} duration={5} />) : (0)}
                                </dd>
                            </div>
                            <div className="flex flex-col px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Ongoing Projects
                                </dt>
                                <dd className="text-4xl font-extrabold dark:text-white text-black md:text-5xl">
                                    {trophyAnimated ? (<CountUp end={10} duration={5} />) : (0)}
                                </dd>
                            </div>
                            <div className="flex flex-col px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Recognitions Received
                                </dt>
                                <dd className="text-4xl font-extrabold dark:text-white text-black md:text-5xl">
                                    {trophyAnimated ? (<CountUp end={5} duration={5} />) : (0)}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Trophy
