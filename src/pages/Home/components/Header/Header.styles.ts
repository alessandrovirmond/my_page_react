import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--border-color);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  .profile-photo {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--accent-color);
  }
`;

export const HeaderInfo = styled.div`
  flex: 1;

  .header-title-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  h1 {
    font-size: 2.5rem;
    color: #ffffff;
  }

  .subtitle {
    color: var(--accent-color);
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  color: var(--text-muted);

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;
    gap: 6px;
    color: inherit;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
      color: var(--accent-color);
    }
  }
`;