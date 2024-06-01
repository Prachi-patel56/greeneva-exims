import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import bannerData from "@config/index.json";
import Image from "next/image";

// Function to add animation class when component mounts
// const addAnimationClass = () => {
//   const swiperContainer = document.querySelector(".swiper-container");
//   swiperContainer.classList.add("animate__fadeIn"); // Add animation class
// };

// Component
const HomeBanner = () => {
  const { banners, brands } = bannerData;
  const paginationRef = useRef(null);

  useEffect(() => {
    // addAnimationClass(); // Add animation class when component mounts
  }, []);

  return (
    <section className="section banner pb-0 pt-6">
      <div className="container-xl">
        <div className="relative">
          <div className="row rounded-2xl">
            <div className="col-12">
              <Swiper
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                // onBeforeInit={(swiper) => {
                //   swiper.params.pagination.el = paginationRef.current;
                // }}
                modules={[Pagination,Autoplay]}
              >
                {banners.map((item, index) => (
                  <SwiperSlide key={"feature-" + index}>
                    <div className="feature-card rounded-md border border-transparent shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                      <div className="feature-card-icon inline-flex items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                        {/* <FeatherIcon icon={item.icon} /> */}
                        <Image
                          priority={true}
                          width={2000}
                          height={2000}
                          src={item}
                          sizes="100vw"
                          alt="Description of image 1"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;