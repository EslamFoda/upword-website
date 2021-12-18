// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import testi1 from "../../imgs/testi1.png";
import testi2 from "../../imgs/testi2.png";
import testi3 from "../../imgs/testi3.png";
import testi4 from "../../imgs/testi4.png";
// Import Swiper styles
import "swiper/swiper-bundle.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "./Swipe.css";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
const Swipe = () => {
  return (
    <div className="testimonials-section">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        autoHeight={true}
        spaceBetween={20}
        navigation={true}
        className="mySwiper custom-swiper-container"
      >
        <SwiperSlide>
          <div className="swipe-grid">
            <div className="swipe-left">
              <svg
                style={{ display: "block" }}
                width="80"
                height="61"
                viewBox="0 0 81 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80.6781 26.0525C80.6781 33.2512 78.0149 40.2152 72.6886 46.9444C67.5189 53.6737 61.4093 58.525 54.3597 61.4983C53.5765 61.8113 53.0282 61.7331 52.7148 61.2636C52.5582 60.9506 52.7932 60.5594 53.4198 60.0899C59.0595 57.586 63.3675 53.9084 66.344 49.0571C69.3205 44.3623 70.8087 38.8068 70.8087 32.3905C70.8087 30.7007 70.5257 28.9073 70.3387 27.2262C69.0855 28.6347 67.5973 29.7301 65.874 30.5126C64.1508 31.1386 62.2709 31.4516 60.2344 31.4516C56.0046 31.4516 52.4015 30.0431 49.425 27.2262C46.6052 24.4093 45.1953 20.8882 45.1953 16.6629C45.1953 12.1246 46.6836 8.2905 49.66 5.16063C52.7932 2.03076 56.7879 0.46582 61.6443 0.46582C67.4406 0.46582 72.062 2.81323 75.5084 7.50804C78.9549 12.0464 80.6781 18.2278 80.6781 26.0525Z"
                  fill="#202020"
                />
                <path
                  d="M35.7015 26.0525C35.7015 33.2512 33.0384 40.2152 27.712 46.9444C22.5424 53.6737 16.4327 58.525 9.38318 61.4983C8.5999 61.8113 8.0516 61.7331 7.73828 61.2636C7.58163 60.9506 7.81661 60.5594 8.44324 60.0899C14.0829 57.586 18.391 53.9084 21.3674 49.0571C24.3439 44.3623 25.8322 38.8068 25.8322 32.3905C25.8322 30.7007 25.5492 28.9073 25.3622 27.2262C24.1089 28.6347 22.6207 29.7301 20.8975 30.5126C19.1742 31.1386 17.2944 31.4516 15.2578 31.4516C11.0281 31.4516 7.42497 30.0431 4.44849 27.2262C1.62866 24.4093 0.21875 20.8882 0.21875 16.6629C0.21875 12.1246 1.70699 8.2905 4.68347 5.16063C7.81661 2.03076 11.8114 0.46582 16.6677 0.46582C22.464 0.46582 27.0854 2.81323 30.5319 7.50804C33.9783 12.0464 35.7015 18.2278 35.7015 26.0525Z"
                  fill="#202020"
                />
              </svg>
            </div>
            <div className="swipe-right">
              <p>
                Love the preview feature, that gives me an oversight and preps
                my brain. The text magic is great and love that I can save and
                organize my reading."
              </p>
              <div className="swipe-bottom">
                <img src={testi1} alt="" />
                <div>
                  <h5>Kyle</h5>
                  <span>Texas University, Social science student</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipe-grid">
            <div className="swipe-left">
              <svg
                style={{ display: "block" }}
                width="80"
                height="61"
                viewBox="0 0 81 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80.6781 26.0525C80.6781 33.2512 78.0149 40.2152 72.6886 46.9444C67.5189 53.6737 61.4093 58.525 54.3597 61.4983C53.5765 61.8113 53.0282 61.7331 52.7148 61.2636C52.5582 60.9506 52.7932 60.5594 53.4198 60.0899C59.0595 57.586 63.3675 53.9084 66.344 49.0571C69.3205 44.3623 70.8087 38.8068 70.8087 32.3905C70.8087 30.7007 70.5257 28.9073 70.3387 27.2262C69.0855 28.6347 67.5973 29.7301 65.874 30.5126C64.1508 31.1386 62.2709 31.4516 60.2344 31.4516C56.0046 31.4516 52.4015 30.0431 49.425 27.2262C46.6052 24.4093 45.1953 20.8882 45.1953 16.6629C45.1953 12.1246 46.6836 8.2905 49.66 5.16063C52.7932 2.03076 56.7879 0.46582 61.6443 0.46582C67.4406 0.46582 72.062 2.81323 75.5084 7.50804C78.9549 12.0464 80.6781 18.2278 80.6781 26.0525Z"
                  fill="#202020"
                />
                <path
                  d="M35.7015 26.0525C35.7015 33.2512 33.0384 40.2152 27.712 46.9444C22.5424 53.6737 16.4327 58.525 9.38318 61.4983C8.5999 61.8113 8.0516 61.7331 7.73828 61.2636C7.58163 60.9506 7.81661 60.5594 8.44324 60.0899C14.0829 57.586 18.391 53.9084 21.3674 49.0571C24.3439 44.3623 25.8322 38.8068 25.8322 32.3905C25.8322 30.7007 25.5492 28.9073 25.3622 27.2262C24.1089 28.6347 22.6207 29.7301 20.8975 30.5126C19.1742 31.1386 17.2944 31.4516 15.2578 31.4516C11.0281 31.4516 7.42497 30.0431 4.44849 27.2262C1.62866 24.4093 0.21875 20.8882 0.21875 16.6629C0.21875 12.1246 1.70699 8.2905 4.68347 5.16063C7.81661 2.03076 11.8114 0.46582 16.6677 0.46582C22.464 0.46582 27.0854 2.81323 30.5319 7.50804C33.9783 12.0464 35.7015 18.2278 35.7015 26.0525Z"
                  fill="#202020"
                />
              </svg>
            </div>
            <div className="swipe-right">
              <p>
                I enjoy the platform as something new and interactive that is
                fresh and fun. I enjoy the separation of preview and reading /
                skim modes. I think having the two modes is perfect to separate
                the two style of learning. Build in dictionary and highlighter
                were awesome features I really found useful! The navigation and
                layout of the platform was easy to move around in."
              </p>
              <div className="swipe-bottom">
                <img src={testi2} alt="" />
                <div>
                  <h5>Kim</h5>
                  <span>Northeastern University, Psychology student</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swipe-grid">
            <div className="swipe-left">
              <svg
                style={{ display: "block" }}
                width="80"
                height="61"
                viewBox="0 0 81 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80.6781 26.0525C80.6781 33.2512 78.0149 40.2152 72.6886 46.9444C67.5189 53.6737 61.4093 58.525 54.3597 61.4983C53.5765 61.8113 53.0282 61.7331 52.7148 61.2636C52.5582 60.9506 52.7932 60.5594 53.4198 60.0899C59.0595 57.586 63.3675 53.9084 66.344 49.0571C69.3205 44.3623 70.8087 38.8068 70.8087 32.3905C70.8087 30.7007 70.5257 28.9073 70.3387 27.2262C69.0855 28.6347 67.5973 29.7301 65.874 30.5126C64.1508 31.1386 62.2709 31.4516 60.2344 31.4516C56.0046 31.4516 52.4015 30.0431 49.425 27.2262C46.6052 24.4093 45.1953 20.8882 45.1953 16.6629C45.1953 12.1246 46.6836 8.2905 49.66 5.16063C52.7932 2.03076 56.7879 0.46582 61.6443 0.46582C67.4406 0.46582 72.062 2.81323 75.5084 7.50804C78.9549 12.0464 80.6781 18.2278 80.6781 26.0525Z"
                  fill="#202020"
                />
                <path
                  d="M35.7015 26.0525C35.7015 33.2512 33.0384 40.2152 27.712 46.9444C22.5424 53.6737 16.4327 58.525 9.38318 61.4983C8.5999 61.8113 8.0516 61.7331 7.73828 61.2636C7.58163 60.9506 7.81661 60.5594 8.44324 60.0899C14.0829 57.586 18.391 53.9084 21.3674 49.0571C24.3439 44.3623 25.8322 38.8068 25.8322 32.3905C25.8322 30.7007 25.5492 28.9073 25.3622 27.2262C24.1089 28.6347 22.6207 29.7301 20.8975 30.5126C19.1742 31.1386 17.2944 31.4516 15.2578 31.4516C11.0281 31.4516 7.42497 30.0431 4.44849 27.2262C1.62866 24.4093 0.21875 20.8882 0.21875 16.6629C0.21875 12.1246 1.70699 8.2905 4.68347 5.16063C7.81661 2.03076 11.8114 0.46582 16.6677 0.46582C22.464 0.46582 27.0854 2.81323 30.5319 7.50804C33.9783 12.0464 35.7015 18.2278 35.7015 26.0525Z"
                  fill="#202020"
                />
              </svg>
            </div>
            <div className="swipe-right">
              <p>
                A class that I had a lot of reading assignments in was Global
                Development. Since each of these reading assignments were
                several pages, it was easy to get confused while I was reading.
                By using Upword's interface, I’ll be able to annotate and have a
                better understanding of my reading assignments in future
                classes."
              </p>
              <div className="swipe-bottom">
                <img src={testi3} alt="" />
                <div>
                  <h5>Joshua</h5>
                  <span>Indiana University, Humanities student</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipe-grid">
            <div className="swipe-left">
              <svg
                style={{ display: "block" }}
                width="80"
                height="61"
                viewBox="0 0 81 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80.6781 26.0525C80.6781 33.2512 78.0149 40.2152 72.6886 46.9444C67.5189 53.6737 61.4093 58.525 54.3597 61.4983C53.5765 61.8113 53.0282 61.7331 52.7148 61.2636C52.5582 60.9506 52.7932 60.5594 53.4198 60.0899C59.0595 57.586 63.3675 53.9084 66.344 49.0571C69.3205 44.3623 70.8087 38.8068 70.8087 32.3905C70.8087 30.7007 70.5257 28.9073 70.3387 27.2262C69.0855 28.6347 67.5973 29.7301 65.874 30.5126C64.1508 31.1386 62.2709 31.4516 60.2344 31.4516C56.0046 31.4516 52.4015 30.0431 49.425 27.2262C46.6052 24.4093 45.1953 20.8882 45.1953 16.6629C45.1953 12.1246 46.6836 8.2905 49.66 5.16063C52.7932 2.03076 56.7879 0.46582 61.6443 0.46582C67.4406 0.46582 72.062 2.81323 75.5084 7.50804C78.9549 12.0464 80.6781 18.2278 80.6781 26.0525Z"
                  fill="#202020"
                />
                <path
                  d="M35.7015 26.0525C35.7015 33.2512 33.0384 40.2152 27.712 46.9444C22.5424 53.6737 16.4327 58.525 9.38318 61.4983C8.5999 61.8113 8.0516 61.7331 7.73828 61.2636C7.58163 60.9506 7.81661 60.5594 8.44324 60.0899C14.0829 57.586 18.391 53.9084 21.3674 49.0571C24.3439 44.3623 25.8322 38.8068 25.8322 32.3905C25.8322 30.7007 25.5492 28.9073 25.3622 27.2262C24.1089 28.6347 22.6207 29.7301 20.8975 30.5126C19.1742 31.1386 17.2944 31.4516 15.2578 31.4516C11.0281 31.4516 7.42497 30.0431 4.44849 27.2262C1.62866 24.4093 0.21875 20.8882 0.21875 16.6629C0.21875 12.1246 1.70699 8.2905 4.68347 5.16063C7.81661 2.03076 11.8114 0.46582 16.6677 0.46582C22.464 0.46582 27.0854 2.81323 30.5319 7.50804C33.9783 12.0464 35.7015 18.2278 35.7015 26.0525Z"
                  fill="#202020"
                />
              </svg>
            </div>
            <div className="swipe-right">
              <p>
                Much of the learning in my courses came through learning
                articles. Each article was extremely helpful, but long and
                difficult to understand. There were times where my ability to
                comprehend the material was hindered by the complexity of the
                text. Upword has been helpful to break down the article into a
                more manageable form that I could effectively learn from."
              </p>
              <div className="swipe-bottom">
                <img src={testi4} alt="" />
                <div>
                  <h5>Tim</h5>
                  <span>NYU, Business school student</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipe;
