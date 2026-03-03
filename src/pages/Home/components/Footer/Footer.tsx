import React from 'react';
import * as S from './Footer.styles';

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterLogo src="/assets/logo.png" alt="Logo AV" />
        <p>© {new Date().getFullYear()} Alessandro Virmond. Desenvolvido com código limpo.</p>
      </S.FooterContent>
    </S.FooterContainer>
  );
};