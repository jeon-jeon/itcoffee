import { useSwiper } from "swiper/react";

const NextButton = () => {
  // useSwiper는 swiper를 다루는 리모컨
  const swiper = useSwiper();
  const handleNext = () => {
    swiper.slideNext();
  };
  return <button onClick={handleNext}>다음</button>;
};

export default NextButton;
