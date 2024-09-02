import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = (props) => {
  const { data } = props;

  const items = data.map((item, i) => {
    return (
      <SwiperSlide key={i}>
        <div className="slider__item">
          <div className="slider__item-text">{item.text}</div>
          <div className="slider__item-img">
            <img src={item.image} alt="photo" />
          </div>
          <div className="slider__item-name">{item.name}</div>
          <div className="slider__item-position">
            {item.position}
            <span>{item.organisation}</span>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="slider">
      <Swiper
        className="swiper"
        slidesPerView={1}
        autoHeight={true}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        // pagination={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 20
        //   },
        //   480: {
        //     slidesPerView: 1,
        //     spaceBetween: 30
        //   },
        // }}
      >
        {items}
      </Swiper>
      <button className="swiper-button-prev">
        <VscChevronLeft className="swiper-button-icon" />
      </button>
      <button className="swiper-button-next">
        <VscChevronRight className="swiper-button-icon" />
      </button>
    </div>
  );
};

export default Slider;
