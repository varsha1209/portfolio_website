"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import hashIcon from "../../public/hash-front-color.svg";
import reactIcon from "../../public/react.png";
import technology from "../../public/technology.png";
import {   Sparrow, DeveloperImage } from "./images";

export default function Home() {
  return (
    <main className="bg-[#0f292f] px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 flex justify-between items-center">
          <h1 className="text-xl font-burtons"></h1>
          <ul className="flex items-center">
            <li>
              <a
                href="https://media.licdn.com/dms/document/media/C562DAQEs9PcgFsiOiQ/profile-treasury-document-pdf-analyzed/0/1679150036812?e=1692835200&v=beta&t=nu_c1cEaFRHiTXIFXHi0kLlKlDoo23OWSLaJf5t1Sng"
                className="bg-gradient-to-r from-pink-500 bg-black-300 to-pink-300 text-white px-4 py-2 rounded-md ml-8 hover:shadow-[#61b7b2] shadow-md"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center">
          <div className="flex flex-row w-full justify-around flex-wrap mb-auto mt-16 h-max items-center">
            <div className="w-auto mb-4">
              <div className="rounded-full bg-gradient-to-b from-pink-500 w-80 h-80 overflow-hidden shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md">
                <Image src={DeveloperImage} alt="profile" />
              </div>
            </div>
            <div className="text-center w-auto">
              <h2 className="text-5xl py-2 text-pink-600 font-bold">
                Varsha Dahare
              </h2>
              <h3 className="text-2xl py-2 text-white font-bold">
                Frontend Developer
              </h3>
              <p className="text-md py-5 leading-8 text-white md:text-md max-w-xl mx-auto">
                I am  experienced and passionate frontend developer with over 2+ years of expertise in creating beautiful, responsive, and user-friendly websites and applications. My proficiency includes <span className="text-pink-500"> HTML ,
                  CSS , JavaScript </span> and popular frontend frameworks such as <span className="text-pink-500"> React , NextJS.</span>
                <br />
                <br /> Skilled in developing and implementing complex UI
                designs with attention to detail and performance optimization.
                Looking for new challenges to continue growing as a <span className="text-pink-500">Frontend Developer </span>
                and contribute to exciting projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="sm: mt-16">
          <h3 className="text-3xl py-1 text-white">What I do ?</h3>
          <p className="text-md py-2 leading-8 text-white">
            I am a dedicated developer known for crafting <span className="text-pink-500">clean and maintainable code</span> tailored for high-scale applications, always attuned to their specific requirements. Throughout my journey, I have had the privilege of creating a diverse range of applications that I take great pride in.
          </p>
          <p className="text-md py-2 leading-8 text-white">
            I work with latest JavaScript frameworks such as
            <span className="text-pink-500"> React , NextJS </span> and CSS
            frameworks like
            <span className="text-pink-500"> Sass , Tailwind </span> .
          </p>
        </div>
        <div className="lg:flex gap-10 justify-center">
          <div className="text-center shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md p-10 rounded-xl my-10 flex flex-col items-center w-96 m-auto">
            <Image
              src={reactIcon}
              width={100}
              height={100}
              alt="tech stack"
            />
            <h3 className="font-bold text-white">Frameworks & Library</h3>
            <p className="py-2 text-sm text-white">What my apps work ...</p>
            {/* <h4 className="py-4 text-pink-600">My Tech Stack</h4> */}
            <p className="text-white py-1">JavaScript</p>
            <p className="text-white py-1">React</p>
            <p className="text-white py-1">NextJS</p>
            <p className="text-white py-1">Redux & Redux toolkit</p>
            <p className="text-white py-1">React Native</p>
            <p className="text-white py-1">Electron.js</p>

            <p></p>
          </div>
          <div className="text-center shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md p-10 rounded-xl my-10 flex flex-col items-center w-96 m-auto">
            <Image src={hashIcon} width={100} height={100} alt="tech stack" />
            <h3 className="font-bold text-white">Styles</h3>
            <p className="py-2 text-sm text-white">How i style my applications ...</p>
            {/* <h4 className="py-4 text-pink-600">My Tech Stack</h4> */}
            <p className="text-white py-1">CSS</p>
            <p className="text-white py-1">Sass</p>
            <p className="text-white py-1">Tailwind</p>
            <p className="text-white py-1">Material UI</p>
            <p></p>
          </div>
          <div className="text-center shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md p-10 rounded-xl my-10 flex flex-col items-center w-96 m-auto">
            <Image
              src={technology}
              width={100}
              height={100}
              alt="tech stack"
            />
            <h3 className="font-bold text-white">Tools</h3>
            <p className="py-2 text-sm text-white">
              What tools come in handy while developing my apps ...
            </p>
            {/* <h4 className="py-4 text-pink-600">My Tech Stack</h4> */}
            <p className="text-white py-1">VS Code</p>
            <p className="text-white py-1">Postman</p>
            <p className="text-white py-1">Figma</p>
            <p className="text-white py-1">GIT</p>
            <p className="text-white py-1">Webpack</p>
            <p></p>
          </div>
        </div>
      </section>
      {/* project section */}
      <section>
        <div
          className="p-8"
        >
          <h3 className="text-3xl py2 text-white">Projects</h3>
          <p className="text-white py-2">
            Throughout my journey, I have crafted a diverse range of captivating applications.
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-wrap lg:flex-row">
            <div className="basis-1/3 flex-1">
              <label className="font-bold text-white" htmlFor="zunu social">
                Sparrow
              </label>
                <Image
                  src={Sparrow}
                  className="rounded-lg object-cover shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md"
                  alt="sparrow social media"
                  style={{ height: "100%", width: "100%" }}
                />
                <p className="text-white px-2">
                  A social media application with encryption and modern decentralized approach . Its motive is to keep data of user secure in conjunction with ease to use.

                  - Technologies : React.js , TypeScript ,Electron.js , Zustand , React Query
                  - Worked on various features and it UI.
                  - Implemented Pagination (infinite scroll ) in various UI components .
                  - Implemented routing system in application using react-router.
                  - Working with WebSocket to implement a notification system .
                  - Using Fetching libraries ( React-Query ) for efficient and optimized API calls.
                  - Used toaster library to notify users .
                </p>
            </div>
            <div className="basis-1/3 flex-1">
              <label
                className="font-bold text-white"
                htmlFor="Ziroh DB old"
              >
                Phoenix
              </label>
                <Image
                  src={Sparrow}
                  className="rounded-lg object-cover shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md"
                  alt="Ziroh DB Cloud "
                  style={{ height: "100%", width: "100%" }}
                />
                <p className="px-2 text-white">
                  Its a dashboard to show user email stats in UI .

                  - Technologies : Next.js , Chart.js , Typescript
                  - Various UI components like Graph ,Tables ,Speed-o-meter etc. was designed by me .
                  - Made a UI to edit the configurations regarding dashboard .
                  - Populated data in graphs and tables using APIs and WebSocket
                  - Used library like Chart.js
                </p>
            </div>
            <div className="basis-1/3 flex-1">
              <label
                className="font-bold text-white"
                htmlFor="Spotify Clone"
              >
                Zunu Message
              </label>
              <Image
                  src={Sparrow}
                  className="rounded-lg object-cover shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md"
                  alt="spotify"
                  style={{ height: "100%", width: "100%" }}
                />
                <p className="text-white px-2">mobile application</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
