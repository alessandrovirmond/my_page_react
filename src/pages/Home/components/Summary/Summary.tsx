import React from 'react';
import * as Style from './Summary.styles';
import * as SharedStyle from '../../../../styles/Shared.styles'

export const Summary: React.FC = () => {
  return (
    <SharedStyle.Section id="resumo">
      <SharedStyle.AnimatedTitle text='Resumo Profissional' />

      <Style.QuickBio>
        <li>🎓 <strong>Bacharel em Sistemas de Informação</strong> - CEFET-RJ</li>
        <li>💼 <strong>Desenvolvedor Front-end</strong> na RFID Brasil</li>
        <li>🌍 <strong>Nova Friburgo - RJ</strong></li>
      </Style.QuickBio>

      <Style.AboutText>
        Atuo na criação de soluções multiplataforma (Web, Mobile e Desktop) com <strong>Flutter</strong> e <strong>React</strong>. Foco na construção de aplicações robustas, aplicando princípios de Clean Code e arquitetura escalável para garantir alta manutenibilidade. Profissional colaborativo, com facilidade para atuar em times ágeis e resolver problemas complexos, visando sempre a entrega de valor e a excelência na experiência do usuário.
      </Style.AboutText>

      <Style.TechIconsContainer>
        <span className="tech-label">Principais Tecnologias:</span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" height="40" alt="angular logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" height="40" alt="flutter logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" height="40" alt="dotnet logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" height="40" alt="csharp logo" />
      </Style.TechIconsContainer>

    </SharedStyle.Section>
  );
};