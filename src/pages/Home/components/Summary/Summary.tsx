import React from 'react';
import * as Style from './Summary.styles';
import * as SharedStyle from '../../../../styles/Shared.styles'

export const Summary: React.FC = () => {
  return (
    <SharedStyle.Section id="resumo">
      <SharedStyle.AnimatedTitle text='Resumo Profissional'/>
      
      <Style.QuickBio>
        <li>🎓 <strong>Bacharel em Sistemas de Informação</strong> - CEFET-RJ</li>
        <li>💼 <strong>Desenvolvedor Flutter</strong> na RFID Brasil</li>
        <li>🌍 <strong>Nova Friburgo - RJ</strong></li>
      </Style.QuickBio>

      <Style.AboutText>
        Atuo na criação de soluções multiplataforma (Web, Mobile e Desktop) com <strong>Flutter</strong> e <strong>React</strong>. Foco na construção de aplicações robustas, aplicando princípios de Clean Code e arquitetura escalável para garantir alta manutenibilidade. Profissional colaborativo, com facilidade para atuar em times ágeis e resolver problemas complexos, visando sempre a entrega de valor e a excelência na experiência do usuário.
      </Style.AboutText>

      <Style.TechIconsContainer>
        <span className="tech-label">Principais Tecnologias:</span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width="30" height="30" alt="Flutter" title="Flutter" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="30" alt="React" title="React" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" width="30" height="30" alt="Angular" title="Angular" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="30" height="30" alt="Vue.js" title="Vue.js" />
      </Style.TechIconsContainer>
      
    </SharedStyle.Section>
  );
};