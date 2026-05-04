import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  /* Força exatamente 2 colunas do mesmo tamanho */
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  /* Responsividade: No celular, fica 1 bloco por linha para não quebrar o layout */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #e2e8f0;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  background: var(--bg-color);
  color: var(--text-main);
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  border: 1px solid var(--border-color);
  transition: 0.3s;

  &:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
`;