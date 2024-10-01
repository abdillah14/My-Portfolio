import Image from "next/image";
import React from "react";
// import jsImg from '../public/assets/js.jpg'
//import NodeJsImg from  '../public/assets/nodejs.png'
//import reactImg from '../public/assets/react.png'
//import expressImg from '../public/assets/express.png'
//import nativeImg from '../public/assets/react-native.png'
//import mongoImg from '../public/assets/mongodb.jpg'
//import fireImg from '../public/assets/firebase.jpg'
//import windImg from '../public/assets/tailwind.jpg'
import { TbBrandJavascript, TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import BackSkills from "./BackSkills";
import FrontSkills from "./FrontSkills";
import MobileSkills from "./MobileSkills";

const Skill = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div id="Skill" className="w-full md:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2
          style={{ textAlign: "center" }}
          className=" text-2xl tracking-wider items-center justify-center p-5"
        >
          What I Can Do
        </h2>
        <p className=" text-2xl p-3 m-auto tracking-wider">
          {" "}
          Those are Technologies that i use for development of various
          applications such as web and Mobile.
        </p>
        <div className="flex flex-wrap ">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap p-2 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-[#3a3e59]"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Front-End
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-[#3a3e59]"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Back-End
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-[#3a3e59]"
                      : "text-blueGray-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Mobile
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    {/* <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p> */}

                    <FrontSkills />
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    {/* <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p> */}
                    <BackSkills />
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link2"
                  >
                    {/* <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p> */}
                    <MobileSkills />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
