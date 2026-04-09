import React from 'react';
import * as S from './Hobbies.styles';
import * as Shared from '../../../../styles/Shared.styles';
import { ImageCarousel } from '../../../../layout/ImageCarousel/ImageCarousel';

export const Hobbies: React.FC = () => {
  const myHobbiesImages = [
    "/assets/foto-7.jpeg",
    "/assets/foto-3.jpeg",
    "/assets/foto-5.jpeg",
    "/assets/foto-2.jpeg"
  ];

  return (
    <Shared.Section id="hobbies">
      <Shared.AnimatedTitle text='Além do Código'/>
      
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

        <S.CarouselSide> 
          <ImageCarousel images={myHobbiesImages} altPrefix="Hobbies" />
        </S.CarouselSide>
      </S.ContentWrapper>
    </Shared.Section>
  );
};