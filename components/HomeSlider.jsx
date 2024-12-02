"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <section
      style={{
        width: "100vw",
        height: "800px",
        padding: "80px 100px",
        backgroundColor: "#f3f8ff",
      }}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ width: "100%", height: "100%", borderRadius: "30px" }}
        onSlideChange={() => {
          console.log("바뀜");
        }}
      >
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url('https://www.yogurtworld.co.kr/data/file/main_main/2_copy_8_f2272113e2cbb9fbc8bbb482c14eebbc_EIBOz5cx_43b784d9e7b6094b565a2ac2815cdab78646ec3b.jpg')",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url('https://img.79plus.co.kr/megahp/manager/upload/main/20241023205330_1729684410533_s2tph6DJQA.jpg?ver=202207071306')",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url('https://img.79plus.co.kr/megahp/manager/upload/main/20241121012948_1732120188246_oNCnaQCp1Z.jpg?ver=202207071306')",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url('https://img.79plus.co.kr/megahp/manager/upload/main/20241106235818_1730905098723_7ym4pjVHYz.jpg?ver=202207071306')",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeSlider;
