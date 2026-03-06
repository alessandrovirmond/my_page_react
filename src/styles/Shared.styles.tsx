import styled from 'styled-components';
import React from 'react';
import SplitText from '../../src/components/ui/SplitText/SpliText';


export const Section = styled.section`
  margin-bottom: 40px;
  background: var(--surface-color);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const SectionTitleContainer = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  border-left: 4px solid var(--accent-color);
  padding-left: 10px;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;
export const AnimatedTitle: React.FC<{ text: string }> = ({ text }) => {
  const handleAnimationComplete = () => {
  };

  return (
    <SectionTitleContainer>
      <SplitText
        text={text}
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </SectionTitleContainer>
  );
};
