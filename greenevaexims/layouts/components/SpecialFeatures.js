import React from 'react';
import 'swiper/swiper-bundle.min.css';
import specialData from "@config/special.json";
import { markdownify } from '@lib/utils/textConverter';
import ImageFallback from "@layouts/components/ImageFallback";

const SpecialFeature = () => {
  const { speciality } = specialData;
  return (
    <section className="section">
    <div className="container">
      <div className="row items-center justify-center">
        <div className="animate lg:col-6 lg:order-2">
          <ImageFallback
            className="mx-auto"
            src={speciality.primary.image}
            width={575}
            height={511}
            alt="primary speciality"
          />
        </div>
        <div className="animate lg:col-5 lg:order-1">
          <p>{speciality.primary.subtitle}</p>
          {markdownify(
            speciality.primary.title,
            "h2",
            "mt-4 section-title bar-left"
          )}
          {markdownify(speciality.primary.description, "p", "mt-10")}
        </div>
      </div>
    </div>
  </section>
  );
};

export default SpecialFeature;
