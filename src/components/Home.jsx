import home from "../images/6.jpg";
import React from "react";
import youtube from "../images/youtube.svg";
import facebook from "../images/facebook.svg";
import github from "../images/github.svg";
import instagram from "../images/instagram.svg";

function Home() {
  return (
    <div className="container flex flex-col items-center mx-auto w-fit p-10">
      <div className="">
        <img
          className="w-[120px] h-[120px] rounded-full"
          src={home}
          alt="home"
        />
      </div>
      <h1 className="my-5 text-[32px] font-bold text-namensy">
        Apiset Chanchamroon
      </h1>
      <p className="text-gray-pastel ">
        Developer, Endeavor, Writer, Life-long learner
      </p>
      <ul className="flex gap-3 mt-5">
        <li className="hover:scale-125 ease-out duration-100">
          <a href="https://www.youtube.com/channel/UCDYa2_nhwDniLJ1IqsvSZDw">
            <img src={youtube} alt="youtube" />
          </a>
        </li>
        <li className="hover:scale-125 ease-out duration-100">
          <a href="https://www.facebook.com/apsccr/">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li className="hover:scale-125 ease-out duration-100">
          <a href="https://github.com/namensy">
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="hover:scale-125 ease-out duration-100">
          <a href="https://www.instagram.com/apsccr/">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
      <div className="mt-[120px]">
        <img src="https://mattfarley.ca/img/hero-devices.svg" alt="Computer" className="w-[860px]" />
      </div>
    </div>
  );
}

export default Home;
