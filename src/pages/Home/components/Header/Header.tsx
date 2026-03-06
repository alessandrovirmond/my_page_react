import React from 'react';
import * as S from './Header.styles';
import DecryptedText from '../../../../components/ui/DescryptedText/DescryptedText.jsx';

export const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <img
        src="/assets/foto-1.png"
        alt="Alessandro Virmond"
        className="profile-photo"
      />

      <S.HeaderInfo>
        <div className="header-title-wrapper">
          <h1 className="text-4xl font-bold text-white md:text-3xl">
            <DecryptedText
              text="Alessandro Virmond"
              animateOn="view"
              revealDirection="start"
              sequential={true}
              speed={150}
              maxIterations={15}
            />
          </h1>
        </div>

        <div className="subtitle">
          <DecryptedText
            text="Desenvolvedor de Software"
            animateOn="view"
            revealDirection="start"
            sequential={true}
            speed={150}
            maxIterations={15}
          />
        </div>

        <S.ContactInfo>

          <a href="https://wa.me/5521976807551" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i> Whatsapp
          </a>
          
          <a href="mailto:avirmond2000@gmail.com">
            <i className="fas fa-envelope"></i> E-mail
          </a>

          <a href="https://linkedin.com/in/alessandrovirmond" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          
          <a href="https://github.com/alessandrovirmond" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          
        </S.ContactInfo>
        
      </S.HeaderInfo>
    </S.HeaderContainer>
  );
};