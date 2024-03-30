import { useEffect, useState } from "react";
import { IoLocationSharp,IoCallSharp,IoMailSharp } from "react-icons/io5";
import "./Hero.css";

const Hero = () => {
  const [userAboutData, setUserAboutData] = useState({});
  const [isKnowMoreShowing,setIsKnowMoreShowing] = useState(false)


  useEffect(() => {
    const fetchDataFunc = async () => {
      const res = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const data = await res?.json();
      setUserAboutData(data?.user?.about);
      // console.log(data)
    };
    fetchDataFunc();
  });

  // console.log(userAboutData)

  return (
    <div id="hero" className="min-h-screen flex justify-between items-center ">
      {/* text content  */}
      <div className="text-white">
        <p>Hi....</p>
        <p className="text-lg">
          My Name Is{" "}
          <span className="text-3xl text-blue-500 uppercase font-bold">
            {userAboutData?.name}
          </span>
        </p>
        <p className="text-lg my-4">
          I am a{" "}
          <span className="text-3xl font-semibold text-blue-500">
            {userAboutData?.title}
          </span>
        </p>
        <p className="text-lg my-4">
          {userAboutData?.subTitle}
        </p>
        <p className="text-lg w-4/5">{userAboutData?.description}</p>
        <div>
          <button className="get-resume-btn mt-8">Get Resume</button>
          <button
          onClick={()=>setIsKnowMoreShowing(!isKnowMoreShowing)}
           className="know-more-btn mt-8 ml-3">{isKnowMoreShowing ? "Know Less":"Know More"}</button>
        </div>
      </div>
      {/* image */}
      <div className="text-white pr-20 relative">
        <div className={`overflow-hidden min-h-[80vh] w-[140%] flex flex-col justify-center items-center absolute   -left-[112%] -top-[70%] border border-blue-700 rounded-full space-y-3 p-12 pt-14 mt-1 ${isKnowMoreShowing ? "translate-y-0": "-translate-y-[1000px]"} transition duration-1000`}>
          <p className="text-lg self-end flex gap-2 items-center moreAbout"><IoLocationSharp className="text-blue-500" /> {userAboutData?.address}</p>
          <p className="text-lg self-center flex gap-2 items-center moreAbout"><IoCallSharp className="text-blue-500" /> {userAboutData?.phoneNumber}</p>
          <p className="text-lg self-start flex gap-2 items-center moreAbout"><IoMailSharp className="text-blue-500" /> {userAboutData?.contactEmail}</p>
          <p className="experience font-semibold text-xl ">Year of Experience <span className="text-3xl text-blue-900 font-bold">{userAboutData?.exp_year} + </span></p>
          <p className="completed-projects font-semibold text-xl self-start">Total Completed Projects <span className="text-3xl text-blue-900 font-bold">{userAboutData?.some_total}</span></p>
        </div>
        <div 
        onMouseEnter={()=>setIsKnowMoreShowing(true)}
        onMouseLeave={()=>setIsKnowMoreShowing(false)}
         className="w-[300px] h-[350px] rounded-lg customStyle">
        
          <img
            className="rounded-lg"
            src={userAboutData?.["avatar"]?.url}
            alt={userAboutData?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
