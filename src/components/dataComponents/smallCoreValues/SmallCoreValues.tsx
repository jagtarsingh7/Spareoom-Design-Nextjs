
import ViewDetectAnimation from "../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import values from "../../../data/smallCoreValues.json"
function SmallCoreValues() {

  return (
    <div className="flex h-1/2 flex-col items-center justify-end  mt-5 px-5  ">
      <div className="max-w-5xl flex flex-col items-start rounded-xl bg-slate-100 dark:bg-black  bg-opacity-50 dark:bg-opacity-20 ">
        <ViewDetectAnimation direction={"Y"} level={-20} speed={500} styles={"border-b-2 border-black md:text-4xl text-2xl  "} to={0} repeat={true}>
          <h1> Our Services </h1>
        </ViewDetectAnimation>
        <ViewDetectAnimation direction={"Y"}  styles={"md:mt-10 mt-5"} speed={500} level={20} to={0} repeat={true}>
          <p className="md:text-base text-xs text-center leading-relaxed px-5 ">
          We go beyond offering exceptional products; we offer a suite of services designed to elevate your interior design experience. Our goal is to assist you at every step of your design journey, ensuring that you achieve the vision you have for your dream space.
          </p>
        </ViewDetectAnimation>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-9 md:p-10 ">
        {values.map((service, index) => (
          <div key={index} className="bg-slate-100 dark:bg-black  bg-opacity-50 dark:bg-opacity-20 rounded-xl" >
            <ViewDetectAnimation direction={"Y"} styles="hidden md:flex h-full " speed={0} level={0} to={0} repeat={true}>
              <div  className="p-8  shadow-lg hover:shadow-xl rounded-xl h">
                <h3 className="text-xl  mb-2 ">{service.title}</h3>
                <ViewDetectAnimation direction={"Y"} styles="hidden md:flex text-sm" speed={500} level={50} to={0} repeat={false}>
                <p className="">{service.description}</p>
                </ViewDetectAnimation>
              </div>
            </ViewDetectAnimation>
            <ViewDetectAnimation direction={"Y"} styles="md:hidden block " speed={500} level={50} to={0} repeat={false} >
                <div className="space-y-2">
                  <details className="group [&_summary::-webkit-details-marker]:hidden" >
                    <summary
                      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4">
                      <h2 className=" ">
                        {service.title}
                      </h2>
                      <svg
                        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor" >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"/>
                      </svg>
                    </summary>
                    <ViewDetectAnimation direction={"Y"} styles="" speed={500} level={50} to={0} repeat={false} >
                      <p className="mt-2 md:text-base text-xs px-4 leading-relaxed ">
                        {service.description}
                      </p>
                    </ViewDetectAnimation>
                  </details>
                </div>
            </ViewDetectAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallCoreValues;

