import Base from "@layouts/Baseof";
import Circle from "@layouts/components/Circle";
import Cta from "@layouts/components/Cta";
import Image from "next/image";
import ImageFallback from "@layouts/components/ImageFallback";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useEffect, useRef } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerData from "@config/index.json";
import featuresData from "@config/features.json";
import ShortIntro from "@layouts/components/ShortInro";
import SpecialFeature from "@layouts/components/SpecialFeatures";
import Testimonials from "@layouts/components/Testimonials";
import Link from "next/link";
import aboutData from "@config/about.json"
import HomeBanner from "@layouts/components/HomeBanner";

const Home = () => {
  const { features } = featuresData;
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);
  const { banners, brands } = bannerData;
  useEffect(() => {
    const ctx = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerBg = document.querySelector(".banner-bg");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".banner-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banner-img",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          ">-.5"
        );

      //parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });


    });

    return () => ctx.revert();
  }, []);

  return (
    <Base>
      <HomeBanner/>      
      <div className="section container pt-3">
        <div className="row items-center justify-center">
          <div className="about-image relative p-[60px] animate md:col-6 lg:col-5">
            <ImageFallback
              className="animate relative w-full rounded-2xl"
              src={aboutData.mission.image}
              width={525}
              height={587}
              alt=""
            />
          </div>
          <div className="animate md:col-6 lg:col-4">
            <p>{aboutData.mission.subtitle}</p>
            {markdownify(aboutData.mission.title, "h2", "section-title bar-left mt-4")}
            {markdownify(aboutData.mission.content, "p", "mt-10")}
          </div>
        </div>
      </div>
      {/* Features */}
      <section className="section">
        <div className="container text-center">
          <div className="animate">
            <p className="uppercase">{features.sub_title}</p>
            {markdownify(features.title, "h2", "mt-4 section-title")}
            {markdownify(features.description, "p", "mt-10")}
          </div>
          <div className="animate from-right relative mt-10">
            <Swiper
              slidesPerView={1}
              pagination={{
                type: "bullets",
                el: paginationRef.current,
                clickable: true,
                dynamicBullets: true,
              }}
              // autoplay={{ delay: 3000 }}
              onBeforeInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {features.list.map((item, index) => (
                <SwiperSlide key={"feature-" + index}>
                  <div className="feature-card m-4 rounded-md border border-transparent px-7 py-7 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                    <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                      {/* <FeatherIcon icon={item.icon} /> */}
                      <Image
                        priority={true}
                        width={200}
                        height={200}
                        src={item.icon}
                        sizes="100vw"
                        alt="Description of image 1"
                      />
                    </div>
                    <h3 className="h4 mb-5 mt-6">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative mt-9 flex justify-center">
              <div className="pagination " ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Into */}
      {/* <ShortIntro /> */}

      {/* Special Features */}
      <SpecialFeature />

      {/* Testimonial */}
      {/* <Testimonials /> */}

      {/* Cta */}
      <Cta />
    </Base>
  );
};

export default Home;
