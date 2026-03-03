import React, { useEffect, useRef } from 'react';
import * as S from './Hobbies.styles';
import * as Shared from '../../../../styles/Shared.styles';

export const Hobbies: React.FC = () => {
  const carrosselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carrossel = carrosselRef.current;
    if (!carrossel) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      const step = carrossel.clientWidth; 
      const maxScroll = carrossel.scrollWidth - step; 
      
      scrollAmount += step;

      if (scrollAmount > maxScroll) {
          scrollAmount = 0;
      }

      carrossel.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: "smooth"
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Shared.Section id="hobbies">
      <Shared.SectionTitle>Além do Código</Shared.SectionTitle>
      
      <S.ContentWrapper>
        <S.TextSide>
          <p>
            Acredito que um bom profissional é feito de boas vivências. Quando não estou "codando", é aqui que você me encontra:
          </p>
          <S.HobbiesList>
            <li><span>⭐</span> Botafoguense apaixonado</li>
            <li><span>⚽</span> Peladeiro</li>
            <li><span>🏋️‍♂️</span> Em busca do shape na musculação</li>
            <li><span>🎮</span> Fifeiro de plantão</li>
            <li><span>🎤</span> Freestyleiro</li>
            <li><span>🏖️</span> Amante de uma boa praia</li>
            <li><span>🧠</span> Apaixonado por aprender</li>
          </S.HobbiesList>
        </S.TextSide>

        <S.CarouselContainer>
          <S.PhotoGallery ref={carrosselRef}>
            <img src="/assets/foto-7.jpeg" alt="Hobbies 1" />
            <img src="/assets/foto-3.jpeg" alt="Hobbies 2" />
            <img src="/assets/foto-5.jpeg" alt="Hobbies 3" />
            <img src="/assets/foto-2.jpeg" alt="Hobbies 4" />
            <img src="/assets/foto-6.jpeg" alt="Hobbies 5" />
          </S.PhotoGallery>
        </S.CarouselContainer>
      </S.ContentWrapper>
    </Shared.Section>
  );
};