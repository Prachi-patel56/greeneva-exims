import { markdownify } from "@lib/utils/textConverter";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Circle from "@components/Circle";
import Cta from "@components/Cta";
import ImageFallback from "@components/ImageFallback";
import aboutData from "@config/about.json"
import Base from "@layouts/Baseof";

const About = () => {
    return (
        <Base>
            <section className="section pt-0">
                {/* About */}
                <div className="section container">
                    <div className="row items-center justify-center">
                        <div className="animate md:col-6 md:order-2 lg:col-5">
                            <div className="about-image relative p-[60px]">
                                <ImageFallback
                                    className="animate relative w-full rounded-2xl"
                                    src={aboutData.about_us.image}
                                    width={425}
                                    height={487}
                                    alt=""
                                />
                                <Circle
                                    className="left-4 top-6 z-[-1]"
                                    width={65}
                                    height={65}
                                />
                                <Circle
                                    className="right-12 top-1/2 -z-[1]"
                                    width={24}
                                    height={24}
                                />
                                <Circle
                                    className="bottom-6 right-6 z-[-1]"
                                    width={65}
                                    height={65}
                                />
                                <Circle
                                    className="left-12 top-1/2 z-[-1]"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        <div className="animate md:col-6 md:order-1 lg:col-4">
                            <p>{aboutData.about_us.subtitle}</p>
                            {markdownify(aboutData.about_us.title, "h2", "section-title bar-left mt-4")}
                            {markdownify(aboutData.about_us.content, "p", "mt-10")}
                            {markdownify(aboutData.about_us.content2, "p", "mt-10")}
                        </div>
                    </div>
                </div>

                {/* Works */}
                <div className="section container">
                    <div className="animate text-center">
                        <p>{aboutData.works.subtitle}</p>
                        {markdownify(aboutData.works.title, "h2", "section-title mt-4")}
                        {markdownify(aboutData.works.content, "p", "mt-10")}
                    </div>
                    <div className="row mt-10 justify-center">
                        {aboutData.works.list.map((work, index) => (
                            <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                                <div className="animate text-center md:px-6 xl:px-12">
                                    <h4 style={{ color: '#1e9f44' }}>
                                        {work.title}
                                    </h4>
                                    {markdownify(work.content, "p", "mt-2")}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission */}
                <div className="section container">
                    <div className="row items-center justify-center">
                        <div className="animate md:col-6 lg:col-5">
                            <div className="about-image relative p-[60px]">
                                <ImageFallback
                                    className="animate relative w-full rounded-2xl"
                                    src={aboutData.vission.image}
                                    width={425}
                                    height={487}
                                    alt=""
                                />
                                <Circle
                                    className="left-4 top-6 z-[-1]"
                                    width={65}
                                    height={65}
                                />
                                <Circle
                                    className="right-12 top-1/2 -z-[1]"
                                    width={24}
                                    height={24}
                                />
                                <Circle
                                    className="bottom-6 right-6 z-[-1]"
                                    width={65}
                                    height={65}
                                />
                                <Circle
                                    className="left-12 top-1/2 z-[-1]"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        <div className="animate md:col-6 lg:col-4">
                            <p>{aboutData.mission.subtitle}</p>
                            {markdownify(aboutData.mission.title, "h2", "section-title bar-left mt-4")}
                            {markdownify(aboutData.mission.content, "p", "mt-10")}
                        </div>
                    </div>
                </div>

                {/* Clients */}
                <div className="section container">
                    <div className="animate text-center">
                        <p>{aboutData.clients.subtitle}</p>
                        {markdownify(aboutData.clients.title, "h2", "section-title mt-4")}
                    </div>
                    <div className="animate from-right col-12 mt-16">
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
                            {aboutData.clients.brands.map((brand, index) => (
                                <SwiperSlide
                                    className=" h-20 cursor-pointer px-6 py-4"
                                    key={"brand-" + index}
                                >
                                    <div className="relative h-full">
                                        <ImageFallback
                                            className="object-contain"
                                            src={brand}
                                            sizes="100vw"
                                            alt=""
                                            width={100}
                                            height={100}
                                            priority={true}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </section>
            <Cta />
        </Base>
    );
};

export default About;
