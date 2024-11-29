"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Home() {
  return (
    <>
      <section
        style={{
          width: "100vw",
          height: "800px",
          padding: "80px 100px",
          backgroundColor: "#f3f8ff",
        }}
      >
        <Swiper
          style={{ width: "100%", height: "100%", borderRadius: "30px" }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://www.yogurtworld.co.kr/data/file/main_main/2_copy_8_f2272113e2cbb9fbc8bbb482c14eebbc_EIBOz5cx_43b784d9e7b6094b565a2ac2815cdab78646ec3b.jpg')",
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://img.79plus.co.kr/megahp/manager/upload/main/20241023205330_1729684410533_s2tph6DJQA.jpg?ver=202207071306')",
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://img.79plus.co.kr/megahp/manager/upload/main/20241121012948_1732120188246_oNCnaQCp1Z.jpg?ver=202207071306')",
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://img.79plus.co.kr/megahp/manager/upload/main/20241106235818_1730905098723_7ym4pjVHYz.jpg?ver=202207071306')",
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section></section>
    </>
  );
}
