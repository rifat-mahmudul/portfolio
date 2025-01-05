import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';
import ProjectCard from "./ProjectCard";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => {
            setProjects(data);
        })
    }, [])

    return (
        <section id='projects' className="pb-16 mt-5">
            
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto">

                <h1 className="text-center text-5xl font-bold">My Recent <span className="text-[#5c29b4]">Work</span></h1>
                <p className="text-center mt-2 text-lg text-gray-300 mb-8">Something I have build</p>

                <div>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Mousewheel]}
                        className="mySwiper lg:h-[420px] h-[1400px] sm:h-[750px]"
                    >
                        {
                            projects.map(project => (
                                <SwiperSlide 
                                key={project.title}
                                >
                                    
                                    <ProjectCard
                                    project={project}
                                    >

                                    </ProjectCard>

                                </SwiperSlide>
                            ))
                        }
                        
                    </Swiper>
                </div>

            </div>

        </section>
    )
}

export default Projects
