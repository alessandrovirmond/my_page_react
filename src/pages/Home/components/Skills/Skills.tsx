import React from 'react';
import * as S from './Skills.styles';
import * as Shared from '../../../../styles/Shared.styles';
import { skillsData } from '../../../../data/skillsData';

export const Skills: React.FC = () => {
  return (
    <Shared.Section id="skills">
      <Shared.AnimatedTitle text='Competências Técnicas' />
      
      <S.Grid>
        {skillsData.map((section, index) => (
          <div key={index}>
            <S.CategoryTitle>{section.category}</S.CategoryTitle>
            <S.TagList>
              {section.tags.map((tag, tagIndex) => (
                <S.Tag key={tagIndex}>{tag}</S.Tag>
              ))}
            </S.TagList>
          </div>
        ))}
      </S.Grid>
    </Shared.Section>
  );
};