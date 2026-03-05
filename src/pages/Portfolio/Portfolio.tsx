import React from 'react';
import * as S from './Portfolio.style';
import * as Shared from '../../../src/styles/Shared.styles';

interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  imageUrl: string; // <-- NOVA PROPRIEDADE
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 'alefood',
    title: 'AleFood',
    description: 'Site React de Restaurantes e seus pratos, integrado com API em Node rodando em docker.',
    techs: ['React', 'TypeScript', 'Node.js', 'Docker'],
    imageUrl: '/assets/projects/alefood.png', // <-- COLOQUE SEU PRINT AQUI
    githubUrl: 'https://github.com/alessandrovirmond/AleFood',
    liveUrl: 'https://ale-food.vercel.app/',
  },
  {
    id: 'tcc',
    title: 'Acessibility Audit (TCC)',
    description: 'Observatório de Acessibilidade dos Portais Municipais do RJ. Plataforma analítica com dashboard e relatórios.',
    techs: ['Acessibilidade', 'WCAG', 'Dashboard'],
    imageUrl: '/assets/projects/tcc.png',
    githubUrl: 'https://github.com/alessandrovirmond/Acessibility_audit',
  },
  {
    id: 'emprestimos',
    title: 'Sistema de Empréstimos',
    description: 'Projeto Full Stack em TS e PHP para gestão de empréstimos, cálculo de parcelas e relatórios estatísticos.',
    techs: ['TypeScript', 'PHP', 'Vite', 'Playwright'],
    imageUrl: '/assets/projects/emprestimos.png',
    githubUrl: 'https://github.com/alessandrovirmond/Projeto-Integrador-Emprestimos',
  },
  {
    id: 'aleroni',
    title: 'Aleroni Router',
    description: 'Site React para cardápio de restaurante, demonstrando domínio de navegação e rotas.',
    techs: ['React', 'React Router'],
    imageUrl: '/assets/projects/aleroni.png',
    githubUrl: 'https://github.com/alessandrovirmond/Aleroni-router',
    liveUrl: 'https://aleroni-router.vercel.app/',
  },
  {
    id: 'iot-lampadas',
    title: 'Orange Pi Automação',
    description: 'App e sistema embarcado para controle remoto de lâmpadas via MQTT para automação residencial.',
    techs: ['IoT', 'MQTT', 'Orange Pi'],
    imageUrl: '/assets/projects/iot.png',
    githubUrl: 'https://github.com/alessandrovirmond/App_controle_remoto_de_lampadas',
  }
  // Você pode adicionar os outros aqui seguindo o mesmo padrão!
];

export const Portfolio: React.FC = () => {
  return (
    <Shared.Section id="portifolio">
      <Shared.SectionTitle>Projetos em Destaque</Shared.SectionTitle>
      
      <S.ProjectsGrid>
        {projectsData.map((project) => (
          <S.ProjectCard key={project.id}>
            
            {/* Nova área da Imagem */}
            <S.ImageContainer>
              <S.ProjectImage 
                src={project.imageUrl} 
                alt={`Print do projeto ${project.title}`} 
                className="project-img"
                // Fallback caso a imagem não exista ainda
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x400/1e293b/38bdf8?text=Imagem+Em+Breve';
                }}
              />
            </S.ImageContainer>

            <S.CardBody>
              <S.ProjectHeader>
                <h3>{project.title}</h3>
              </S.ProjectHeader>

              <S.ProjectDescription>
                {project.description}
              </S.ProjectDescription>

              <S.TechList>
                {project.techs.map((tech) => (
                  <S.TechTag key={`${project.id}-${tech}`}>
                    {tech}
                  </S.TechTag>
                ))}
              </S.TechList>

              {/* Novos Botões Footer */}
              <S.CardFooter>
                {project.githubUrl && (
                  <S.ActionButton href={project.githubUrl} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i> Código
                  </S.ActionButton>
                )}
                
                {project.liveUrl && (
                  <S.ActionButton href={project.liveUrl} target="_blank" rel="noreferrer" $primary>
                    <i className="fas fa-external-link-alt"></i> Deploy
                  </S.ActionButton>
                )}
              </S.CardFooter>
            </S.CardBody>

          </S.ProjectCard>
        ))}
      </S.ProjectsGrid>
    </Shared.Section>
  );
};