// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules";
import { register } from "swiper/element/bundle";

register();

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//import "swiper/css/effect-fade";

type ImgProps = {
  img: string;
  id: number;
};

function App() {
  const data: ImgProps[] = [
    {
      img: "https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg?w=1380&t=st=1692243719~exp=1692244319~hmac=29338e9e1bfd2f7bf54a5e003e5a5dace4b6ef847d37775014d60e016cf97e9d",
      id: 1,
    },
    {
      img: "https://img.freepik.com/fotos-premium/linda-garota-com-skate-midia-mista_641298-18377.jpg",
      id: 2,
    },
    {
      img: "https://img.freepik.com/fotos-premium/conceito-de-negocios-e-inovacao-midia-mista_641298-16585.jpg",
      id: 3,
    },
    {
      img: "https://img.freepik.com/fotos-premium/dona-de-casa-com-sacolas-de-compras-andando-na-paisagem-verde-midia-mista_641298-3142.jpg",
      id: 4,
    },
  ];

  return (
    <div className="container">
      <h1>Slider</h1>
      <Swiper
        pagination={{ clickable: true }}
        // slidesPerView={2}
        navigation
        // modules={[EffectFade]}
        // effect="fade"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.img} alt="slides" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
