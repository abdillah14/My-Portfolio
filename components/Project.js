import { useEffect, useRef } from "react";
import Link from "next/link";
import React from "react";
import { AiOutlineEye, AiOutlineUpload } from "react-icons/ai";

const Project = () => {
  return (
    <div className="max-w-[1240px] m-auto ">
      <h2
        style={{ textAlign: "center" }}
        className="px-4 py-4 text-4xl tracking-wider items-center justify-center"
      >
        All My projects Done{" "}
      </h2>
      <div class="flex justify-center items-center">
        <div class="w-16 h-1 bg-[#3a3e59]"></div>
      </div>
      <p
        style={{ textAlign: "center" }}
        className=" text-xl  sm:pr-20  flex items-center p-10 justify-center"
      >
        A passionate individual who always thrives to work on end to end
        products which develop sustainable and scalable social and technical
        systems to create impact.
      </p>
      <div className="flex  items-center justify-center ">
        <Link href="https://github.com/abdillah14">
          <button className="flex items-center justify-center p-3  w-[100%] hover:scale-95 ease-in duration-300 mt-4">
            {" "}
            <p className="">See my project</p>{" "}
            <AiOutlineEye className="pl-2" size={30} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
