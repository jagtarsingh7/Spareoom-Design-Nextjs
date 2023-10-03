import ViewDetectAnimation from '../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation';
import Link from 'next/link'
import features from "../../../data/feature.json"

const FeatureCards = () => {

 
  return (
    <div className="mt-14 container  md:bg-transparent bg-white ">
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 md:p-0 p-5 mx-auto">
        {features.map((item, index) => (
          <Link key={index}  href="/development">
            <div className=" overflow-hidden rounded-lg shadow transition md:hover:shadow-lg text-center  ">
              <img
                alt={item.title}
                src={`/images/${item.icon}`}
                className=" hidden md:block  max-h-64 h-full w-full transition duration-500 hover:scale-105"
              />
              <div className="bg-white p-4 sm:p-6 rounded-xl">
                <ViewDetectAnimation direction={"Y"} level={-50} styles={""} speed={0} to={0} repeat={false}>
                  <h3 className="mt-0.5 md:text-lg text-md  text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-900">
                    {item.description}
                  </p>
                </ViewDetectAnimation>
              </div>
            </div>
        </Link>
        ))}
      </div>
    </div> 
  );
};

export default FeatureCards;

