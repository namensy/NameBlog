import React from "react";
import me from "../images/1.jpg";

function About() {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col justify-center items-center p-5">
        <img src={me} alt="Aek" className="w-[500px] rounded-md" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[24px] font-bold  mt-5">
          Hi, I’m Aek. Nice to meet you.
        </h2>
      </div>
      <div className="px-72 flex flex-col justify-center items-center">
        <h2 className=" font-bold text-[24px] my-10">Experiences</h2>
        <ul className="list-disc list-inside">
          <h3 className=" font-bold my-2">WESTRIDE ONLINE BOOTCAMP</h3>
          <li>
            Join a project-centered Front-end Development Bootcamp, accelerating
            skill development through mentor-supported exercises and projects
            aligned with the curriculum
          </li>
          <li>
            Attain proficiency in HTML, CSS, JavaScript, and React throughout
            this extensive bootcamp program
          </li>
          <h3 className=" font-bold mt-5">S.K. BUSINESS CONSULTANT CO., LTD - (Intern)</h3>
          <li>
            Created a comprehensive mini-project during the internship, focusing
            on the development of a registration web page integrated with API
            functionalities for notification upon registration completion
          </li>
          <li>
            Developed a registration web page utilizing PHP, HTML, JavaScript,
            and Bootstrap 5, enabling automated notifications upon completion.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
