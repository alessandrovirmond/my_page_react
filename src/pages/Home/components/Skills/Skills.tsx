import React from 'react';
import * as S from './Skills.styles';
import * as Shared from '../../../../styles/Shared.styles';

export const Skills: React.FC = () => {
  return (
    <Shared.Section id="skills">
      <Shared.SectionTitle>Competências Técnicas</Shared.SectionTitle>
      
      <S.Grid>
        <div>
          <S.CategoryTitle>Mobile & Cross-Platform</S.CategoryTitle>
          <S.TagList>
            <S.Tag>Flutter</S.Tag>
            <S.Tag>Dart</S.Tag>
            <S.Tag>Riverpod</S.Tag>
            <S.Tag>BLoC</S.Tag>
            <S.Tag>Clean Architecture</S.Tag>
            <S.Tag>Method Channels</S.Tag>
            <S.Tag>Offline-First</S.Tag>
          </S.TagList>
        </div>

        <div>
          <S.CategoryTitle>Front-End Web</S.CategoryTitle>
          <S.TagList>
            <S.Tag>React.js</S.Tag>
            <S.Tag>TypeScript</S.Tag>
            <S.Tag>Next.js</S.Tag>
            <S.Tag>Redux Toolkit</S.Tag>
            <S.Tag>Context API</S.Tag>
            <S.Tag>Tailwind CSS</S.Tag>
          </S.TagList>
        </div>

        <div>
          <S.CategoryTitle>Back-End & Integração</S.CategoryTitle>
          <S.TagList>
            <S.Tag>Node.js</S.Tag>
            <S.Tag>RESTful APIs</S.Tag>
            <S.Tag>WebSockets</S.Tag>
            <S.Tag>MQTT</S.Tag>
            <S.Tag>SQL</S.Tag>
            <S.Tag>SSO / JWT</S.Tag>
          </S.TagList>
        </div>

        <div>
          <S.CategoryTitle>DevOps & Qualidade</S.CategoryTitle>
          <S.TagList>
            <S.Tag>Git Flow</S.Tag>
            <S.Tag>TDD</S.Tag>
            <S.Tag>CI/CD</S.Tag>
            <S.Tag>Docker</S.Tag>
            <S.Tag>Figma</S.Tag>
          </S.TagList>
        </div>
      </S.Grid>
    </Shared.Section>
  );
};