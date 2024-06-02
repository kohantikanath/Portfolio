import Project1 from "../../Images/project1.png";
import Project2 from "../../Images/project2.png";
import MusicApp from "../../Images/musicapp.png";
import HOC from "../../Images/hoc.png";
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
            <a href="">
              <img src={Project1} alt="Sidebar Project" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={Project2} alt="Ecommerce Project" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={MusicApp} alt="Music App Project" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={HOC} alt="HOC Project" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
