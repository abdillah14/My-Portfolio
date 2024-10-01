import React from "react";

const Education = () => {
  return (
    <div id="Education" className="w-full h-screen max-w-[1240px] m-auto ">
      <h1 className="text-4xl text-center tracking-wider items-center justify-center p-5 m-auto ">
        Resume
      </h1>
      <div class="flex justify-center items-center">
        <div class="w-16 h-1 bg-[#3a3e59]"></div>
      </div>
      <div className="md:grid grid-cols-2 gap-12 p-10">
        <div>
          <p className="p-3 text-2xl">Education </p>
          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">
                Bachelor of Science - Software Engineering -BSC.IT SE,
                Information Technology
              </time>
              <p class="text-base font-normal text-gray-500 pt-5">
                2020 - 2023
              </p>
              <span className="font-semibold">
                International University of Equator
              </span>
              {/* <p class="text-base font-normal text-gray-500">
                I have studied my high school in Bio-Chemistry section eew have
                studied many subject like Mathematics | Physics | Chemistry |
                Biology
              </p> */}
            </li>
            <li class="ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">
                State Diploma
              </time>

              <p class="text-base font-normal text-gray-500 pt-5">
                2011 - 2018
              </p>
              <span className="font-semibold">
                Lycee Du centre Culrurel Burundi
              </span>
              <p class="text-base  font-normal text-gray-500">
                I have studied my high school in Bio-Chemistry section eew have
                studied many subject like Mathematics | Physics | Chemistry |
                Biology
              </p>
            </li>
          </ol>
        </div>

        <div>
          <p className="p-3 text-2xl">Professional Experience </p>
          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">
                FullStack Web programmer
              </time>
              <p class="text-base font-normal text-gray-500 pt-5">
                Since October 2023
              </p>
              <span className="font-semibold">Mediabox burundi</span>
              <p class="text-base font-normal text-gray-500">
                working in various projects Using React js as frontend and node
                js with his framework express js as Backend
              </p>
            </li>
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">
                FullStack developer
              </time>
              <p class="text-base font-normal text-gray-500 pt-5">
                August 2022 - September 2023
              </p>
              <span className="font-semibold">Byams Empire Sprl Burundi</span>
              <p class="text-base font-normal text-gray-500">
                working in various projects Using pure Html and Javascript as
                frontend and PHP with his framework Laravel as Backend
              </p>
            </li>
            <li class="ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">
                Front-End
              </time>
              <p class="text-base font-normal text-gray-500 pt-5">
                July 2021 - January 2022
              </p>
              <span className="font-semibold">
                Trust Juris Chambers Burundi
              </span>
              <p class="text-base font-normal text-gray-500">
                working in various projects Using React js as
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;
