import React from "react";
import { TbBrandJavascript, TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const BackSkills = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 ">
        <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              {/* <Image src={nativeImg} width='50px' height='50px' alt='/' /> */}
              <SiNextdotjs size={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3> Nextjs</h3>
            </div>
          </div>
        </div>
        <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              {/* <Image src={NodeJsImg} width='50px' height='50px' alt='/' /> */}
              <FaNodeJs size={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3> Node.js</h3>
            </div>
          </div>
        </div>
        <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              {/* <Image src={expressImg} width='50px' height='50px' alt='/' /> */}
              <SiExpress size={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3> Express js </h3>
            </div>
          </div>
        </div>
        <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              {/* <Image src={mongoImg} width='50px' height='50px' alt='/' /> */}
              <SiMongodb size={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3> MongoDb</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackSkills;
