import styled from 'styled-components';

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); /* Aumentei um pouco a largura mínima */
  gap: 30px;
  margin-top: 40px;
`;

export const ProjectCard = styled.div`
  background: var(--surface-color, #1e293b);
  border: 1px solid var(--border-color, #334155);
  border-radius: 16px; /* Bordas mais redondinhas e modernas */
  overflow: hidden; /* Faz a imagem respeitar a borda arredondada */
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: var(--accent-color, #38bdf8);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  /* Faz a imagem dar um zoom suave quando passa o mouse no card */
  &:hover .project-img {
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color, #334155);
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante que a imagem preencha o espaço sem distorcer */
  transition: transform 0.5s ease;
`;

export const CardBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProjectHeader = styled.div`
  margin-bottom: 12px;

  h3 {
    font-size: 1.3rem;
    color: #f8fafc;
    margin: 0;
  }
`;

export const ProjectDescription = styled.p`
  color: var(--text-muted, #94a3b8);
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 20px;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
`;

export const TechTag = styled.span`
  font-size: 0.75rem;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.5px;
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

export const ActionButton = styled.a<{ $primary?: boolean }>`
  flex: 1; /* Faz os botões dividirem o espaço igualmente */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  /* Se for primário (Vercel/Deploy), ganha cor de destaque. Se não (GitHub), fica cinza escuro */
  background: ${({ $primary }) => $primary ? 'var(--accent-color, #38bdf8)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${({ $primary }) => $primary ? '#0f172a' : '#f8fafc'};
  border: 1px solid ${({ $primary }) => $primary ? 'var(--accent-color, #38bdf8)' : 'rgba(255, 255, 255, 0.1)'};

  &:hover {
    background: ${({ $primary }) => $primary ? '#0ea5e9' : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-2px);
  }
`;