import Image from "next/image";
import React from "react";
import MeImg from "../public/assets/abdi1.jpg";

const About = () => {
  return (
    <div id="About" className="w-full md:h-screen p-2 flex items-center ">
      <div className="max-w-[1240px] m-auto ">
        <h1 className="text-4xl text-center tracking-wider items-center justify-center p-5 m-auto ">
          Who I Am
        </h1>
        <div class="flex justify-center items-center">
          <div class="w-16 h-1 bg-[#3a3e59]"></div>
        </div>
        <div className="m-auto md:grid grid-cols-3 gap-8 pt-5">
          <div className="col-span-2">
            {/* <p className=' uppercase text-xl tracking-wider text-[#5651e5]'>About</p> */}
            <div className="pt-3">
              <p className="p-3 text-2xl text-[#3a3e59]">
                I am{" "}
                <span className="font-bold text-[#3a3e59] ">
                  {" "}
                  Abdillah Ally
                </span>
                , my primary goal was to learn computer programming, but I was
                not satisfied with how we learned to program, so I decided to
                take time and learn it on my own.{" "}
              </p>
              <p className="p-3 text-2xl text-[#3a3e59]">
                I made a lot of mistakes along the way, but thanks to the
                community of programmers, I learned from them, and now, I think{" "}
                {`it's`} my time to give something in return,
                {`I'm `} on a mission to help you, motivate you, and give some
                tips that can help you to advance in programming journey. As I
                know how hard it is to teach yourself programming reach out to
                me if you need help {`I'll `} be glad to help. Get in touch with
                me on any of these platforms below...
              </p>
              <p className="p-3 text-2xl text-[#3a3e59]">
                I am Focused and quicklearning Software Engineer with 1 year and
                half experience in programming, for various projects. Eager to
                be challenged in order to grow and improve my communication and
                IT skills gained through previous experience in the IT sector.
              </p>
            </div>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:rotate-3 ease-out duration-300">
            <Image
              className="rounded-xl"
              src={MeImg}
              alt="/"
              width="320"
              height="419"
            />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default About;
