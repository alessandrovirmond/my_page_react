import styled from 'styled-components';

export const QuickBio = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 20px;
  color: var(--text-main);

  li {
    margin-bottom: 10px;
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  strong {
    color: var(--accent-color);
  }
`;

export const AboutText = styled.p`
  color: var(--text-muted);
  text-align: justify;
  line-height: 1.6;
`;

export const TechIconsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  .tech-label {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-right: 5px;
  }

  img {
    transition: transform 0.3s ease;
    cursor: pointer;
    filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.3));

    &:hover {
      transform: translateY(-4px) scale(1.1);
    }
  }
`;