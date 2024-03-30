/* eslint-disable react/prop-types */
const Title = ({title_1,title_2_part_1,title_2_part_2}) => {
  return (
    <div className="mt-3 mb-4">
      <h3 className="text-white font-bold">{title_1}</h3>
      <h2 className="text-white font-semibold text-3xl ">
        {title_2_part_1} <span className="text-blue-500">{title_2_part_2}</span>
      </h2>
    </div>
  );
};

export default Title;
