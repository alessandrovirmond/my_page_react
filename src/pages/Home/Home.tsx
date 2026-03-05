import * as S from './Home.styles';
import { Header } from './components/Header/Header';
import React from 'react';
import { Summary } from './components/Summary/Summary';
import { Hobbies } from './components/Hobbies/Hobbies';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Portfolio } from '../Portfolio/Portfolio';

export const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Summary />
      <Skills />
      <Hobbies />
      <Experience />
      <Portfolio />
      <Footer />
    </S.Container>
  );
}

export default Home;