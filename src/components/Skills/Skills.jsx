import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import "./Skills.css";

const Skills = () => {
  const [userSkillsData, setUserSkillsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

  //   console.log(userSkillsData);
  useEffect(() => {
    setIsLoading(true);
    const fetchDataFunc = async () => {
      const res = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const data = await res?.json();
      setUserSkillsData(data?.user?.skills);
      // console.log(data)
    };
    fetchDataFunc();
    setIsLoading(false);
  }, []);

  return (
    <div id="skills" className="">
      <Title
        title_1="skills"
        title_2_part_1="Where I am"
        title_2_part_2="Talented"
      />
      <div className="flex flex-wrap gap-8">
        {userSkillsData &&
          userSkillsData.map((skill, index) => (
            <div key={skill._id}>
              <div 
              onMouseEnter={()=>setIsHovering(true)}
              onMouseLeave={()=>setIsHovering(false)}
               className="skill rounded-lg">{skill.name} <img width="40" height="40" src={skill.image.url} alt={skill.name}/>
              {/* percentage  */}
              <div className={`flex items-center justify-center w-10 h-10 text-xs font-semibold bg-[#100720] border-2 border-blue-500 rounded-full absolute -right-[15px] -top-[63%] ${isHovering?"opacity-100":"opacity-0"} transition duration-300`}>{skill.percentage}%</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
