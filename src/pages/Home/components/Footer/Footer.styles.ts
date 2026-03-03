import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  margin-top: 50px;
  padding-bottom: 40px; /* Um respiro no final da página */
  color: var(--text-muted);
  font-size: 0.9rem;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const FooterLogo = styled.img`
  max-height: 30px;
  width: auto;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;