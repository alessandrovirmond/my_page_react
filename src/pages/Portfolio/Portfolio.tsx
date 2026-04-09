import React from 'react';
import * as S from './Portfolio.style';
import * as Shared from '../../../src/styles/Shared.styles';
import { ImageCarousel } from './../../layout/ImageCarousel/ImageCarousel';
import { projectsData } from '../../data/projectsData.ts';

export const Portfolio: React.FC = () => {
  return (
    <Shared.Section id="portifolio">
      <Shared.AnimatedTitle text='Projetos em Destaque'/>
      
      <S.ProjectsGrid>
        {projectsData.map((project) => (
          <S.ProjectCard key={project.id}>
            
            
            <S.ImageContainer>
              <ImageCarousel images={project.images} altPrefix={`Print ${project.title}`} />
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