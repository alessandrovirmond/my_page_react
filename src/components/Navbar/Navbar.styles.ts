import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 9999; /* Aumentado para garantir que fique sobre o site inteiro */
  display: flex;
  justify-content: center;
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 100%;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  z-index: 10001; /* Fica acima de tudo, inclusive do menu mobile */
  
  span {
    color: var(--accent-color);
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li<{ $active: boolean; $activeColor: string }>`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ $active, $activeColor }) => ($active ? $activeColor : 'var(--text-main)')};
  transition: color 0.3s ease;
  position: relative;
  padding-bottom: 5px; /* Cria um espaço para o traço não colar no texto */

  &:hover {
    color: ${({ $activeColor }) => $activeColor};
  }

  /* O Traço Sublinhado */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ $activeColor }) => $activeColor};
    transition: width 0.3s ease;
  }
`;

/* ===== MOBILE ===== */

export const MenuIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 10001;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(15, 23, 42, 0.98);
    gap: 40px;
    z-index: 10000; /* Abaixo da Logo e do Ícone, mas acima do site */
    
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: all 0.3s ease-in-out;
  }
`;

export const MobileNavItem = styled(NavItem)`
  font-size: 1.5rem; /* Fonte maior para facilitar o toque no celular */
`;