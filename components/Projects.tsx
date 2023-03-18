import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Digital Dukaandar",
    description:
      "A Responsive Frontend Hackathon project that aims to modify and decentralize their day to day product Discounts,Payments,sales,Profits and employee status for all vendors and shopkeepers.",
    image: "/digital.png",
    github: "https://github.com/divyansh10108/Digital-Dukaandaar",
    link: "https://digital-dukaandaar.vercel.app/",
  },
  {
    name: "Baisakhi AI",
    description: "Used Scikit-learn to train a machine learning model of dataset of soil parameters and corresponding crop recommendations and displayed it on a web server using the django framework.",
    image: "/baisakhi.png",
    github: "https://github.com/divyansh10108/Baisakhi.AI",
    link: "https://baisakhiai.arnagupta.repl.co/",
  },
  {
    name: "Tank Stars",
    description:
      "Tank Stars replica made using the Java Game Development Framework LibGDX.Involving concepts like OOPs, Serialization, File I/O, Multithreading, Design Patterns and Asset Management.",
    image: "/tank Stars.png",
    github: "https://github.com/divyansh10108/Tank-Stars/tree/main/Tank_Stars_LibGdx-Production",
    link: "https://github.com/divyansh10108/Tank-Stars/tree/main/Tank_Stars_LibGdx-Production",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection