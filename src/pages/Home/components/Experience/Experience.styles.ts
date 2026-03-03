import styled from 'styled-components';

export const Item = styled.div`
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 5px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;

  span {
    color: var(--text-muted);
    font-weight: normal;
  }
`;

export const Date = styled.div`
  font-size: 0.9rem;
  color: var(--accent-color);
`;

export const List = styled.ul`
  list-style-position: inside;
  color: var(--text-muted);

  li {
    margin-bottom: 8px;
    line-height: 1.6;
    text-align: justify;
  }
`;