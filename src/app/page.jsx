"use client";
import Image from "next/image";
import hashIcon from "../../public/hash-front-color.svg";
import reactIcon from "../../public/react.png";
import technology from "../../public/technology.png";
import { Sparrow, DeveloperImage, Screen1, Screen2, Screen3, Phoenix, Linkdin, Github } from "./images";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0f292f] px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="pt-12 pb-2 flex justify-between items-center">
          <div className="flex justify-items-start items-center gap-9">
            <Link href="https://www.linkedin.com/in/varshapawar12/" rel="noopener noreferrer" target="_blank" className="text-white">
              <Image src={Linkdin} alt="linkdin" className="h-9 w-9 bg-gradient-to-r from-pink-500 bg-black-300 to-pink-300 rounded-md hover:shadow-[#61b7b2] shadow-md" />
            </Link>
            <Link href="https://github.com/varsha1209" rel="noopener noreferrer" target="_blank" className="text-white">
              <Image src={Github} alt="github" className="h-9 w-9 bg-gradient-to-r from-pink-500 bg-black-300 to-pink-300 rounded-md hover:shadow-[#61b7b2] shadow-md" />
            </Link>
          </div>
          <ul className="flex items-center">
            <li>
              <Link
                href="https://drive.google.com/drive/u/0/folders/1pp2mOT5zMildP3BCOK01EZSx9nnqEqMB"
                rel="noopener noreferrer" target="_blank"
                className="bg-gradient-to-r from-pink-500 bg-black-300 to-pink-300 text-white px-4 py-2 rounded-md ml-8 hover:shadow-[#61b7b2] shadow-md"
              >
                Resume
              </Link>
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
              <h2 className="text-4xl py-2 font-bold text-pink-500">
                Varsha Dahare
              </h2>
              <h3 className="text-2xl py-2 text-white font-bold">
                Frontend Developer
              </h3>
              <p className="text-md py-5 leading-8 text-white md:text-md max-w-xl mx-auto">
                I am  experienced and passionate frontend developer with over 2.6 years of expertise in creating beautiful, responsive, and user-friendly websites and applications. My proficiency includes <span className="text-pink-500"> HTML ,
                  CSS , JavaScript </span> and popular frontend frameworks such as <span className="text-pink-500"> React , NextJS, and React-Native.</span>
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
            <span className="text-pink-500"> React , NextJS , React-Native </span> and CSS
            frameworks like
            <span className="text-pink-500"> Sass , Tailwind </span> .
          </p>
        </div>
        <div className="lg:flex gap-10 justify-center">
          <div className="text-center shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md p-10 rounded-xl my-10 flex flex-col items-center m-auto">
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
          <div className="text-center shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md p-10 rounded-xl my-10 flex flex-col items-center m-auto">
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
          <div className="text-center shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md p-10 rounded-xl my-10 flex flex-col items-center m-auto">
            <Image
              src={technology}
              width={100}
              height={100}
              alt="tech stack"
            />
            <h3 className="font-bold text-white">Tools</h3>
            <p className="py-2 text-sm text-white">
              Tools i am using for development...
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
      <section className="min-h-screen">
        <h3 className="text-3xl py2 text-white">Projects</h3>
        <p className="text-white py-2">
          Throughout my journey, I have crafted a diverse range of captivating applications.
        </p>
        <div className="flex justify-center mt-6 items-center flex-col">
          <label className="text-2xl font-bold text-pink-500" htmlFor="zunu social">
            Sparrow
          </label>
          <div className="flex flex-row w-full justify-around flex-wrap mb-auto mt-2 h-max items-center">
            <div className="w-auto mb-4">
              <div className="bg-gradient-to-b from-pink-500 w-full h-full overflow-hidden shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md">
                <Image
                  src={Sparrow}
                  className="object-cover shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md"
                  alt="sparrow social media"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
            <div className="w-auto">
              <p className="text-white px-2">
                A social media application with encryption and modern decentralized approach.<br></br>
                Its motive is to keep data of user secure in conjunction with ease to use.<br></br>

                - Technologies : React.js, TypeScript, Electron.js, Zustand, and React Query<br></br>
                - Worked on various features and it UI.<br></br>
                - Implemented Pagination (infinite scroll ) in various UI components.<br></br>
                - Implemented routing system in application using react-router.<br></br>
                - Working with WebSocket to implement a notification system.<br></br>
                - Using Fetching libraries ( React-Query ) for efficient and optimized API calls.<br></br>
                - Used toaster library to notify users.<br></br>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 items-center flex-col">
          <label
            className="text-2xl font-bold text-pink-500"
            htmlFor="phoenix"
          >
            Phoenix
          </label>
          <div className="flex flex-row w-full justify-around flex-wrap mb-auto mt-2 h-max items-center">
            <div className="w-auto mb-4">
              <div className=" bg-gradient-to-b from-pink-500 w-full h-full overflow-hidden shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md">
                <Image
                  src={Phoenix}
                  className="object-cover shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md"
                  alt="Phoenix"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
            <div className="w-auto">
              <p className="px-2 text-white">
                Its a dashboard to show user email stats in UI.<br></br>

                - Technologies : Next.js, Chart.js, and Typescript<br></br>
                - Various UI components like Graph, Tables, Speed-o-meter etc. was designed by me.<br></br>
                - Made a UI to edit the configurations regarding dashboard.<br></br>
                - Populated data in graphs and tables using APIs and WebSocket<br></br>
                - Used library like Chart.js<br></br>
              </p>
            </div>

          </div>
        </div>
        <div className=" flex justify-center mt-6 items-center flex-col">
          <label
            className="text-2xl font-bold text-pink-500"
            htmlFor="Zunu Message"
          >
            Zunu Message
          </label>
          <div className="flex flex-row w-full justify-around flex-wrap mb-auto mt-2 h-max items-center">
            <div className="w-auto mb-4">
              <div className="bg-gradient-to-b flex gap-2 from-pink-500 w-full h-full overflow-hidden shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md">
                {/* <Image
                    src={Screen1}
                    className="object-cover shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md"
                    alt="zunu message"
                    style={{ height: "100%", width: "100%" }}
                  /> */}
                <Image
                  src={Screen2}
                  className="object-cover shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md"
                  alt="zunu message"
                  style={{ height: "100%", width: "100%" }}
                />
                {/* <Image
                    src={Screen3}
                    className="object-cover shadow-[#61b7b2] hover:shadow-[#cb2d6f] shadow-md"
                    alt="zunu message"
                    style={{ height: "100%", width: "100%" }}
                  /> */}
              </div>
            </div>
            <div className="w-auto">
              <p className="text-white px-2 pb-4">
                Working on a Highly Scalable SMS and IP Messaging based mobile app in react native.<br></br>
                - Used Native Modules, React Navigation and Zustand.<br></br>
                - Used react-native-pdf library for showing pdf.<br></br>
                - Added Image zoom feature.<br></br>
                - Used react-native-video library for showing video.<br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
