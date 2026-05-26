import { useState, useEffect } from 'react';
import './Slide.css'; 

const slideData = [
  {
    id: 1,
    titulo: "O Espetacular Homem-Aranha",
    desc: "Após ser picado por uma aranha geneticamente modificada, Peter Parker adquire novos poderes aracnídeos e parte para salvar a cidade das maquinações de um misterioso inimigo reptiliano.",
    imagemUrl: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaG_ZXJU5fg9ReGyy9I_AUUyfyLyL-7Al4UFLVu0S0o0Ire7GYUOSXfS_qqTkTDsL1kXYD-lm1SXd3e8qw8zC-k3pnIWXX5xgN5a.jpg?r=e8b"
  },
  {
    id: 2,
    titulo: "Carros",
    desc: "O carro de corrida Relâmpago McQueen vive na correria... até que ele pega um desvio e fica preso em Radiator Springs, uma cidadezinha esquecida na Rota 66. Lá ele conhece um monte de personagens hilariantes que o ajudam a descobrir que há mais na vida do que fama.",
    imagemUrl: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/af675c20-3a80-41ac-abcb-b669c3c44f63/compose?aspectRatio=1.78&format=webp&width=1200"
  },
  {
    id: 3,
    titulo: "Dexter",
    desc: "De dia, o gentil Dexter é um analista de sangue para a polícia de Miami. Mas à noite, ele é um assassino em série que só atinge outros assassinos.",
    imagemUrl: "https://rollingstone.com.br/wp-content/uploads/2025/07/que-horas-estreia-dexter-ressurreicao-serie-com-michael-c-hall.jpg"
  }
];

export default function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  return (
    <div className="SlideCon">
      <button className="slider-button prev" onClick={prevSlide}>❮</button>
      <button className="slider-button next" onClick={nextSlide}>❯</button>

      {slideData.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={slide.imagemUrl} alt={slide.titulo} className="slideImagem" />
          <div className="slideSo"></div>

          <div className="slideConteudo">
            <h1>{slide.titulo}</h1>
            <p>{slide.desc}</p>
          </div>
        </div>
      ))}

      <div className="BolaCon">
        {slideData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}