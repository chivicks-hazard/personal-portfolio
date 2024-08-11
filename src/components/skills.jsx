import React from "react"
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa6"
import { RiTailwindCssFill } from "react-icons/ri"
import Icon from "./icon"

const Skills = () => {
    const skills = [
        {
            skill: "HTML",
            class: "html"
        },
        {
            skill: "CSS",
            class: 'css'
        },
        {
            skill: "Javascript",
            class: 'javascript'
        },
        {
            skill: "Bootstrap",
            class: 'bootstrap'
        },
        {
            skill: "Tailwind CSS",
            class: 'tailwindcss'
        },
        {
            skill: "React",
            class: 'react'
        }
    ]

    return (
        <section id="skillset">
            <div className="mt-5 px-3 pt-3 mx-sm-3">
                <h2 class="text-center mb-5 mt-5">My Skillset</h2>
                <div class="language mt-1 grid">
                    {
                        skills.map((skill, index) => {
                            return (
                                <div class={`lang border border-2 rounded py-3 px-3 ${skill.class} px-md-1`}>
                                    <span className={`${skill.class} g-col-${index} icon d-block text-center mt-3`}>
                                        <Icon icon={`${skill.class}`} />
                                    </span>
                                    <p className="mt-3 text-center">{skill.skill}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>  
    )
}

export default Skills