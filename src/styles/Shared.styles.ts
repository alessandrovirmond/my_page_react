import styled from 'styled-components';

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

export const SectionTitle = styled.h2`
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