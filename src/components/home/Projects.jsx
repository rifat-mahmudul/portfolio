import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';
import Project from "./Project";

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
        <section className="pb-16">
            
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto">

                <h1 className="text-center text-5xl font-bold">My Recent <span>Work</span></h1>
                <p className="text-center mt-2 text-lg text-pink-500 mb-8">Something I have build</p>

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
                        className="mySwiper h-[420px] p-10"
                    >
                        {
                            projects.map(project => (
                                <SwiperSlide 
                                key={project.title}
                                >
                                    
                                    <Project
                                    project={project}
                                    >

                                    </Project>

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
