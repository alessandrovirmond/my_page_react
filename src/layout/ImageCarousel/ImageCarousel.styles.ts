import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const PhotoGallery = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  
  /* Esconde a barra de rolagem mas mantém a funcionalidade */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  img {
    flex: 0 0 auto;
    width: 100%; /* Adapte conforme seu layout (ex: 80% ou 300px) */
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
    scroll-snap-align: center;
    cursor: pointer; /* Indica que é clicável */
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

/* ESTILOS DO MODAL */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Garante que fique por cima de tudo */
  padding: 2rem;
`;

export const ExpandedImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 10000;
  
  &:hover {
    color: #ccc;
  }
`;