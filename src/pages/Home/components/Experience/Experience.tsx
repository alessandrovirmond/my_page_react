import React from 'react';
import * as S from './Experience.styles';
import * as Shared from '../../../../styles/Shared.styles';

export const Experience: React.FC = () => {
  return (
    <Shared.Section id="experiencia">
      <Shared.AnimatedTitle text='Experiência Profissional'/>
      
      <S.Item>
        <S.Header>
          <S.Title>Desenvolvedor de Software <span>| RFID Brasil</span></S.Title>
          <S.Date>Novembro 2023 – Atual</S.Date>
        </S.Header>
        <S.List>
          <li>Desenvolvimento end-to-end de soluções multiplataforma (Web, Windows e Android) utilizando Flutter, garantindo alta performance e fidelidade de UI/UX.</li>
          <li>Engenharia de plugins customizados para comunicação direta com hardware (leitores RFID), utilizando Method Channels para integração nativa.</li>
          <li>Implementação de estratégia Offline-First robusta, com sincronização automática de dados (Sync) entre banco local e nuvem para operação em áreas sem conectividade.</li>
          <li>Desenvolvimento de arquitetura para sistemas IoT escaláveis, utilizando protocolos de comunicação em tempo real (MQTT e WebSockets).</li>
          <li>Criação de dashboards gerenciais interativos e módulos de relatórios para suporte à decisão estratégica.</li>
        </S.List>
      </S.Item>

      <S.Item>
        <S.Header>
          <S.Title>Estágio em Desenvolvimento de Software <span>| RFID Brasil</span></S.Title>
          <S.Date>Maio 2023 – Outubro 2023</S.Date>
        </S.Header>
        <S.List>
          <li>Atuação na modernização e refatoração de código legado, aplicando princípios de SOLID e Clean Code para reduzir a dívida técnica e facilitar manutenções futuras.</li>
          <li>Desenvolvimento de componentes de interface (UI) responsivos e reutilizáveis, garantindo consistência visual e boa usabilidade (UX) em diferentes dispositivos.</li>
          <li>Diagnóstico e resolução ágil de bugs em ambiente de produção e homologação.</li>
          <li>Elaboração de documentação técnica e realização de treinamentos para capacitação de usuários finais no uso do sistema.</li>
        </S.List>
      </S.Item>
      
    </Shared.Section>
  );
};