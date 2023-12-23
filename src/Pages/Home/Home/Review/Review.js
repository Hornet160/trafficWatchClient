import React from "react";
import mahir from "../../../../assets/images/Customers/Mahir.jpg";
import raiyan from "../../../../assets/images/Customers/Raiyan.jpg";
import anik from "../../../../assets/images/Customers/Anik.jpg";

const Review = () => {
  return (
    <section className="py-20 container">
      <div className="flex flex-col items-center mb-28">
        <h1 className="p-4 uppercase text-2xl  leading-none text-center">
          our testimonial
        </h1>
        <h1 className=" uppercase text-2xl  text-orange-400 leading-none text-center">
          *
        </h1>
        <h1 className="text-4xl uppercase  font-semibold leading-none text-center">
          what's our customer say
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-5">
        <div className="flex flex-col dark:bg-violet-400 rounded">
          <div className="flex flex-col items-center justify-center dark:text-gray-900">
            <img
              src={mahir}
              alt=""
              className="w-28 h-28 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl pt-3 font-semibold leading-tight">
              Mosharaf Hossen Mahir
            </p>
          </div>
          <div className="px-3 py-5 mb-3">
            <p className="relative text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus quibusdam, eligendi exercitationem molestias possimus
              facere.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-6 h-6"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
        </div>
        <div className="flex flex-col dark:bg-violet-400 rounded">
          <div className="flex flex-col items-center justify-center dark:text-gray-900">
            <img
              src={raiyan}
              alt=""
              className="w-28 h-28 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl pt-3 font-semibold leading-tight">
              Raiyan Monsur
            </p>
          </div>
          <div className="px-3 py-5 mb-3">
            <p className="relative text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus quibusdam, eligendi exercitationem molestias possimus
              facere.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-6 h-6"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
        </div>
        <div className="flex flex-col dark:bg-violet-400 rounded">
          <div className="flex flex-col items-center justify-center dark:text-gray-900">
            <img
              src={anik}
              alt=""
              className="w-28 h-28 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl pt-3 font-semibold leading-tight">
              Anik
            </p>
          </div>
          <div className="px-3 py-5 mb-3">
            <p className="relative text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus quibusdam, eligendi exercitationem molestias possimus
              facere.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-6 h-6"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
