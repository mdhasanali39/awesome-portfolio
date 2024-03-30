import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import AnimatedCursor from "react-animated-cursor";

const MainLayout = () => {
  return (
    <div className="font-jost">
      <AnimatedCursor
      innerSize={6}
      outerSize={16}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
