import members from "../../../data/members.json"
import company from "../../../data/companyInfo.json";
import ViewDetectAnimation from '../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation';
import QuoteForm from '../../../components/dataComponents/quoteForm/QuoteForm';
import Footer from '../../../components/structuralComponents/footer/Footer';
import AboutCLientComponent from "./about";

function About() {
  const membersValues = Object.values(members)
  return (
    <div className="">
      <AboutCLientComponent />
      {/* <div
        className="container mx-auto mt-10">
        <section className="bg-white ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg ">
              <ViewDetectAnimation direction={"Y"} speed={1000} level={-10} styles={""} to={0} repeat={false}>
                <h2 className="mb-4 md:text-4xl text-2xl tracking-tight font-bold text-gray-900">policiesValues[0].title</h2>
              </ViewDetectAnimation>
              <ViewDetectAnimation direction={"Y"} speed={500} level={50} styles={""} to={0} repeat={true}>
                <p className="mb-4 font-light">policiesValues[0].description1</p>
              </ViewDetectAnimation>
              <ViewDetectAnimation direction={"Y"} speed={1000} level={50} styles={""} to={0} repeat={true}>
                <p className="mb-4 font-light">policiesValues[0].description2</p>
              </ViewDetectAnimation>
            </div>
          </div>
        </section>
      </div> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
            <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={-50} to={0} repeat={false}>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{company.description10}</p>
            </ViewDetectAnimation>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <div className="flex flex-col items-center text-center">
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={20} to={0} repeat={false}>
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{membersValues[0].name}</h2>
                  <p className="leading-relaxed text-base">{membersValues[0].designation}</p>
                  <p className="leading-relaxed text-base">{membersValues[0].phone}</p>
                </ViewDetectAnimation>
                <span className=" mt-2 inline-flex">
                  <a href="https://www.facebook.com/" className="text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.twitter.com/" className="ml-2 text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/" className="ml-2 text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <div className="flex flex-col items-center text-center">
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={false}>
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{membersValues[2].name}</h2>
                  <p className="leading-relaxed text-base">{membersValues[2].designation}</p>
                  <p className="leading-relaxed text-base">{membersValues[2].phone}</p>
                </ViewDetectAnimation>
                <span className=" mt-2 inline-flex">
                  <a href="https://www.facebook.com/" className="text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.twitter.com/" className="ml-2 text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/" className="ml-2 text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <div className="flex flex-col items-center text-center">
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={false}>
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{membersValues[1].name}</h2>
                  <p className="leading-relaxed text-base">{membersValues[1].designation}</p>
                  <p className="leading-relaxed text-base">{membersValues[1].phone}</p>
                </ViewDetectAnimation>
                <span className=" mt-2 inline-flex">
                  <a href="https://www.facebook.com/" className="text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.twitter.com/" className="ml-2 text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/" className="ml-2 text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <QuoteForm></QuoteForm>
      </div>

      <div className="flex -z-50 flex-col-reverse my-auto ">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default About;
