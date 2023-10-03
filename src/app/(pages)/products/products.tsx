'use client'
import { useRef } from "react";
import ViewDetectAnimation from '../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation';
import ScrollButton from '../../../components/structuralComponents/scrollButton/ScrollButton';
import Banner from "../../../components/structuralComponents/banner/Banner";

function DevelopmentCLientComponent() {
    const targetRef = useRef<HTMLDivElement>(null);
    return (
        <> 
        {/* <Banner
            parallaxEffect={false} heading={null} subHeading={null} direction1={""} direction2={""} speed1={0} speed2={0} level1={0} level2={0}
            customCss1={null} customCss2={null} customCssOuter={"flex min-h-screen h-full items-center justify-center"} backgroundImageName={"project1.jpg"} extraLayer={false}>
            <div className="px-6 text-center text-black md:px-12 ">
                <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={false}>
                    <h2 className="mb-12 lg:text-6xl md:text-5xl  text-3xl font-serif leading-tight tracking-tight underline bg-white bg-opacity-20 ">
                        Streamlined Procurement <br /><span>& Timely Delivery</span>
                    </h2>
                </ViewDetectAnimation>
                <ViewDetectAnimation direction={"Y"} styles={""} speed={1000} level={-20} to={0} repeat={true}>
                <ScrollButton target={targetRef} parallaxEffect={false} to={0} customCss={null} ></ScrollButton>
                </ViewDetectAnimation>
                <p className="mt-24 text-white text-center md:text-3xl text-xl underline font-serif ">Prioritizing Safety and Compliance for a Secure Future</p>
            </div>
        </Banner>

            <div ref={targetRef} className=" mt-20 min-h-min">
                <div className="bg-white h-full w-full container mx-auto ">
                    <div className=" mx-auto  ">
                        <ViewDetectAnimation direction={"X"} level={-10} styles={""} speed={0} to={0} repeat={false}>
                            <h2 className="flex border-b-2  font-extrabold md:text-5xl text-2xl  text-yellow-400 font-serif pt-5">
                                Project planning
                            </h2>
                        </ViewDetectAnimation>
                        <p className=" md:text-lg mt-2 text-sm text-gray-700 leading-relaxed mb-10 ">
                            SpareOom Ltd&apos;s procurement and project planning system focuses on achieving cost reduction and cycle time optimization. By implementing efficient procurement practices, the company can obtain resources at competitive prices, while effective project planning helps in proper resource allocation and timely project execution.
                            This systematic approach enables SpareOom Ltd to deliver projects in a cost-effective and timely manner, ensuring client satisfaction and project success.
                        </p>
                    </div>
                </div>
            </div> */}
        </>

    );
}

export default DevelopmentCLientComponent;
