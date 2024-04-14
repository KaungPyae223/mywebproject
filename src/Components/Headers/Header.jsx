import HeaderComponent from "./HeaderComponent";
import { useGetNowPlayingQuery } from "../../Services/EndPoints/MovieEndPoints";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {
  EffectFade,
  Navigation,
  Thumbs,
  Autoplay,
} from "swiper/modules";

const Header = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { isLoading, isError, isSuccess, data } = useGetNowPlayingQuery();
  console.log(data?.results);
  return (
    <div>
      <Swiper
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
        spaceBetween={10}
        effect={"fade"}
        
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade,Autoplay, Navigation, Thumbs]}
        className="-z-10"
      >
        {data?.results.map((el, i) => {
          return (
            <SwiperSlide className="h-auto" key={i}>
              <HeaderComponent data = {el}/>
            </SwiperSlide>
          );
        })}
        
        
      </Swiper>
      
    </div>
  );
};

export default Header;
