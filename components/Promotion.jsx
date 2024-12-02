"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import PromotionCard from "./PromotionCard";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Promotion = () => {
  return (
    <section
      style={{
        width: "100vw",
        height: "600px",
        padding: "80px 100px",
        backgroundColor: "#f3f8ff",
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={4}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide>
          <PromotionCard
            imgSrc="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_RrZ0xeSg_c02f95ddb76543fb1895c7394ba6180baf7c618a.jpg"
            period="2024-11-14~2024-11-30"
            content="요거트월드 케이터링 무료 지원 신청!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionCard
            imgSrc="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_AGaMl8V6_a6526a19eb071e3f896b37381788c5da6cca6ce8.jpg"
            period="2024-12-02 ~ 2024-12-02"
            content="[12월 요월데이] '베리벨벳월드' 50%할인 받자!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionCard
            imgSrc="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_DxWLeyJ1_9decfa8f4520d7c7aef4662e9e0c125657345258.jpg"
            period="2024-11-18 ~ 2024-11-22"
            content="신메뉴 이름 맞추고 선물 받자!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionCard
            imgSrc="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_RrZ0xeSg_c02f95ddb76543fb1895c7394ba6180baf7c618a.jpg"
            period="2024-11-14~2024-11-30"
            content="요거트월드 케이터링 무료 지원 신청!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionCard
            imgSrc="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_AGaMl8V6_a6526a19eb071e3f896b37381788c5da6cca6ce8.jpg"
            period="2024-12-02 ~ 2024-12-02"
            content="[12월 요월데이] '베리벨벳월드' 50%할인 받자!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionCard
            imgSrc="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_DxWLeyJ1_9decfa8f4520d7c7aef4662e9e0c125657345258.jpg"
            period="2024-11-18 ~ 2024-11-22"
            content="신메뉴 이름 맞추고 선물 받자!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionCard
            imgSrc="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_RrZ0xeSg_c02f95ddb76543fb1895c7394ba6180baf7c618a.jpg"
            period="2024-11-14~2024-11-30"
            content="요거트월드 케이터링 무료 지원 신청!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionCard
            imgSrc="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_AGaMl8V6_a6526a19eb071e3f896b37381788c5da6cca6ce8.jpg"
            period="2024-12-02 ~ 2024-12-02"
            content="[12월 요월데이] '베리벨벳월드' 50%할인 받자!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionCard
            imgSrc="https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_DxWLeyJ1_9decfa8f4520d7c7aef4662e9e0c125657345258.jpg"
            period="2024-11-18 ~ 2024-11-22"
            content="신메뉴 이름 맞추고 선물 받자!"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Promotion;
