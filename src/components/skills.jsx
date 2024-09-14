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
            skill: "JavaScript",
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
        },
        {
            skill: "TypeScript",
            class: 'typescript'
        },
        {
            skill: "Chart JS",
            class:  'chartjs'

        }
    ]

    return (
        <section id="skillset">
            <div className="mt-5 mb-5 px-3 pt-3 mx-sm-3">
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