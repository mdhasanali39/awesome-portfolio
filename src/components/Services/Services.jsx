import { useEffect, useState } from "react";
import "./Services.css";
import Title from "../Shared/Title";

const Services = () => {
  const [userServicesData, setUserServicesData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const [isSeeAllBtnClicked,setIsSeeAllBtnClicked] = useState(false)

  console.log(userServicesData)
  useEffect(() => {
    setIsLoading(true)
    const fetchDataFunc = async () => {
      const res = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const data = await res?.json();
      setUserServicesData(data?.user?.services);
      // console.log(data)
    };
    fetchDataFunc();
    setIsLoading(false)
  },[]);

  return (
    <div id="services" className="min-h-screen ">

    {/* heading  */}
    <Title title_1="Services" title_2_part_1="What I" title_2_part_2="Do"/>
    
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {userServicesData &&
        userServicesData.slice(0,isSeeAllBtnClicked ? userServicesData.length:6).map((service) => (
          <div className="card" key={service._id}>
            <div>
              <img
                className="img"
                src={service?.image?.url}
                alt={service?.name}
              />
            </div>
            <div className="card-content">
              <p className="card-title">{service.name}</p>
              <p className="card-description">
                {service.desc}
              </p>
              <p className="card-charge font-bold absolute bottom-5 left-0 bg-blue-600 px-4 py-1 text-white rounded-r-lg">
                {service.charge}
              </p>
              <div className="emptyDiv w-20 h-20 absolute bottom-0 right-0 rounded-tl-lg"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-end">
      <button onClick={()=>setIsSeeAllBtnClicked(!isSeeAllBtnClicked)} className="see-all-btn mt-4 text-blue-500 underline">{isSeeAllBtnClicked ? "See Less":"See All"}</button>
      </div>
    </div>
  );
};

export default Services;
