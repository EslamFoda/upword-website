import "./Library.css";
import first from "../../imgs/first.png";
import sec from "../../imgs/seven.png";
import third from "../../imgs/third.png";
import four from "../../imgs/four.png";
import five from "../../imgs/five.png";
import six from "../../imgs/six.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Library = () => {
  return (
    <div className="library-section">
      <h2>Upword library {">>"}</h2>
      <p>Read, learn, enjoy.</p>
      <div className="lbirary-container">
        <Swiper
          slidesPerView={4}
          navigation={true}
          loop={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="mySwiper custom-lib-swiper"
        >
          <SwiperSlide>
            <img src={first} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sec} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={third} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={four} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={five} alt="" />
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default Library;
