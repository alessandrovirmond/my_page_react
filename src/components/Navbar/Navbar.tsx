import React, { useState } from 'react';
import * as S from './Navbar.styles';
import { useActiveSection } from '../../hooks/useActiveSection';

interface NavbarProps {
  isHome?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isHome = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = ['resumo', 'skills', 'hobbies', 'experiencia', 'portifolio'];
  const activeSection = useActiveSection(sectionIds);

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getSectionColor = (id: string) => {
    switch (id) {
      case 'skills': return '#10b981';
      case 'hobbies': return '#f59e0b';
      case 'experiencia': return '#8b5cf6';
      case 'portifolio': return '#f43f5e';
      default: return 'var(--accent-color)';
    }
  };

  return (
    <S.NavContainer>
      <S.NavContent>
        <S.Logo onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          A<span>V.</span>
        </S.Logo>

        {isHome && (
          <S.MenuIcon onClick={() => setIsOpen(!isOpen)}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </S.MenuIcon>
        )}

        <S.NavLinks>
          {isHome ? (
            sectionIds.map((id) => (
              <S.NavItem 
                key={id}
                $active={activeSection === id} 
                $activeColor={getSectionColor(id)}
                onClick={() => handleScroll(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </S.NavItem>
            ))
          ) : (
            <S.NavItem key="back" $active={false} $activeColor="var(--accent-color)">
              Voltar para a Home
            </S.NavItem>
          )}
        </S.NavLinks>
      </S.NavContent>

      {isHome && (
        <S.MobileMenu $isOpen={isOpen}>
          {sectionIds.map((id) => (
            <S.MobileNavItem 
              key={`mobile-${id}`}
              $active={activeSection === id} 
              $activeColor={getSectionColor(id)}
              onClick={() => handleScroll(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </S.MobileNavItem>
          ))}
        </S.MobileMenu>
      )}
    </S.NavContainer>
  );
};