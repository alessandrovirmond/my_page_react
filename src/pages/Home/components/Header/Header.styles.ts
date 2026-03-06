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
  margin-top: 25px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #f8fafc;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    
    /* TRUQUE DE MESTRE: Menos padding na esquerda para o círculo do ícone colar na borda */
    padding: 6px 20px 6px 6px; 
    
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    transition: all 0.3s ease;

    /* ===== O FUNDO SÓLIDO DO ÍCONE ===== */
    i {
      background-color: var(--accent-color, #38bdf8); /* Fundo sólido com a sua cor de destaque */
      color: #0f172a; /* Cor do desenho do ícone (escuro para dar contraste) */
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%; /* Transforma num círculo perfeito */
      font-size: 1.1rem;
      transition: transform 0.3s ease;
    }

    &:hover {
      background: rgba(56, 189, 248, 0.1);
      border-color: var(--accent-color, #38bdf8);
      transform: translateY(-3px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);

      /* Dá um charminho extra: o ícone cresce e gira um pouquinho no hover! */
      i {
        transform: scale(1.1) rotate(5deg); 
      }
    }
  }
`;