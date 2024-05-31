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

const Home = () => {
  const { features } = featuresData;
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);
  const { banner, brands } = bannerData;
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

      const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
      parallaxTl
        .fromTo(
          bannerBg,
          {
            y: 0,
          },
          {
            y: -position,
          }
        )
        .fromTo(
          bannerContent,
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        )
        .fromTo(
          ".banner-bg .circle",
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Base>
      <section className="section banner pt-0">
        <div className="container-xl">
          <div className="relative">
            <div className="bg-theme banner-bg col-12 absolute left-0 top-0">
              <Circle
                className="circle left-[10%] top-12"
                width={32}
                height={32}
                fill={false}
              />
              <Circle
                className="circle left-[2.5%] top-[29%]"
                width={85}
                height={85}
              />
              <Circle
                className="circle bottom-[48%] left-[22%]"
                width={20}
                height={20}
              />
              <Circle
                className="circle bottom-[37%] left-[15%]"
                width={47}
                height={47}
                fill={false}
              />
              <Circle
                className="circle bottom-[13%] left-[6%]"
                width={62}
                height={62}
                fill={false}
              />
              <Circle
                className="circle right-[12%] top-[15%]"
                width={20}
                height={20}
              />
              <Circle
                className="circle right-[2%] top-[30%]"
                width={73}
                height={73}
                fill={false}
              />
              <Circle
                className="circle right-[19%] top-[48%]"
                width={37}
                height={37}
                fill={false}
              />
              <Circle
                className="circle right-[33%] top-[54%]"
                width={20}
                height={20}
              />
              <Circle
                className="circle bottom-[20%] right-[3%]"
                width={65}
                height={65}
              />
            </div>
            <div className="row overflow-hidden rounded-2xl">
              <div className="col-12">
                <div className="row relative justify-center pb-10">
                  <div className="banner-content col-10 pb-10 pt-20 text-center">
                    {markdownify(
                      banner.title,
                      "h1",
                      "mb-8 banner-title opacity-0"
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-y border-border py-5">
              <div className="animate from-right col-12">
                <Swiper
                  loop={true}
                  slidesPerView={3}
                  breakpoints={{
                    992: {
                      slidesPerView: 5,
                    },
                  }}
                  spaceBetween={20}
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                >
                  {brands.map((brand, index) => (
                    <SwiperSlide
                      className=" h-20 cursor-pointer px-6 py-6 grayscale  transition hover:grayscale-0 lg:px-10"
                      key={"brand-" + index}
                    >
                      <div className="relative h-full">
                        <ImageFallback
                          className="object-contain"
                          src={brand}
                          sizes="100vw"
                          alt=""
                          width={425}
                          height={487}
                          priority={true}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <div className="feature-card m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                    <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                      <FeatherIcon icon={item.icon} />
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
      <ShortIntro />

      {/* Special Features */}
      <SpecialFeature />

      {/* Testimonial */}
      <Testimonials />

      {/* Cta */}
      <Cta />
    </Base>
  );
};

export default Home;
