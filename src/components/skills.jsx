import React from "react"
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa6"
import { RiTailwindCssFill } from "react-icons/ri"

const Skills = () => {
    const skills = [
        {
            skill: "HTML",
            icon: <FaHtml5 />,
            class: "html"
        },
        {
            skill: "CSS",
            icon: <FaCss3 />,
            class: 'css'
        },
        {
            skill: "Javascript",
            icon: <FaJs />,
            class: 'javascript'
        },
        {
            skill: "Bootstrap",
            icon: <FaBootstrap />,
            class: 'bootstrap'
        },
        {
            skill: "Tailwind CSS",
            icon: <RiTailwindCssFill />,
            class: 'tailwindcss'
        },
        {
            skill: "React",
            icon: <FaReact />,
            class: 'react'
        }
    ]

    return (
        <section id="skillset" class="mt-5 p-3 mx-sm-5">
            <h2 class="text-center mb-5 mt-5">My Skillset</h2>
            <div class="language mt-1 grid">
                {
                    skills.map((skill, index) => {
                        return (
                            <div class={`lang border border-2 rounded py-3 px-3 ${skill.class} px-md-1`}>
                                {React.cloneElement(skill.icon, { className: `${skill.class} g-col-${index} icon d-block mx-auto mt-3` })}
                                <p className="mt-3 text-center">{skill.skill}</p>
                            </div>
                        )
                    })
                }            
            </div>
            
        </section>  
    )
}

export default Skills