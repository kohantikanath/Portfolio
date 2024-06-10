import Project1 from "../../Images/project1.png";
import Project2 from "../../Images/project2.png";
import Project3 from "../../Images/project3.png";
import Project4 from "../../Images/project4.png";
import Project5 from "../../Images/project5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./Projects.css";
import "swiper/css";
import "swiper/css/autoplay";

function Projects() {
  return (
    <div className="projects" id="projects">
      <p>
        Projects
      </p>
      <div className="project-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          grabCursor={true}
          className="slider"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <a href="https://github.com/kohantikanath/Mario-Game">
              <img src={Project1} alt="Mario Game Project" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/kohantikanath/WebScrapper">
              <img src={Project2} alt="Web scrapper Project" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/kohantikanath/ImageEditor/tree/main/imageEditor">
              <img src={Project3} alt="Image Editor Project" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/kohantikanath/Quiz_App">
              <img src={Project4} alt="Quizz App Project" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={Project5} alt="Vehical management system Project" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
