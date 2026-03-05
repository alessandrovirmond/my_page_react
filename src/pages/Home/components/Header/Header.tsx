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
              speed={200}
              maxIterations={15}
            />
          </h1>

        </div>

        <div className="subtitle">
          <DecryptedText
            text="Desenvolvedor de software"
            animateOn="view"
            revealDirection="start"
            sequential={true}
            speed={200}
            maxIterations={15}
          />
        </div>


        <S.ContactInfo>
          <a href="https://maps.google.com/?q=Nova+Friburgo,+RJ" target="_blank" rel="noreferrer">
            <i className="fas fa-map-marker-alt"></i> Nova Friburgo, RJ
          </a>
          <span>•</span>
          <a href="https://wa.me/5521976807551" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i> (21) 97680-7551
          </a>
          <span>•</span>
          <a href="mailto:avirmond2000@gmail.com">
            <i className="fas fa-envelope"></i> avirmond2000@gmail.com
          </a>
        </S.ContactInfo>

        <S.ContactInfo style={{ marginTop: '10px' }}>
          <a href="https://linkedin.com/in/alessandrovirmond" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <span>•</span>
          <a href="https://github.com/alessandrovirmond" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <span>•</span>
          <a href="https://instagram.com/alessandrovirmond" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </S.ContactInfo>
      </S.HeaderInfo>
    </S.HeaderContainer>
  );
};