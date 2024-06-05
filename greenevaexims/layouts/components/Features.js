import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import FeatherIcon from 'feather-icons-react';
import SwiperCore, { Pagination } from 'swiper/core';
import featureData from "@config/features.json";
import { markdownify } from '@lib/utils/textConverter';

SwiperCore.use([Pagination]);

const FeaturesSection = () => {
  const paginationRef = React.useRef(null);
  const {features } = featureData;

  return (
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
              <div className="feature-card m-4 rounded-md border border-transparent py-16 px-7 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#1e9f44] hover:shadow-none">
                <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                  <FeatherIcon icon={item.icon} />
                </div>
                <h3 className="h4 mt-6 mb-5">{item.title}</h3>
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

  );
};

export default FeaturesSection;
