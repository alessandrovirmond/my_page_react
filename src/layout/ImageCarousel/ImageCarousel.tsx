import React, { useEffect, useRef, useState } from 'react';
import * as S from './ImageCarousel.styles'; // Vamos criar este arquivo de estilos no próximo passo

interface ImageCarouselProps {
  images: string[];
  altPrefix?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altPrefix = "Imagem" }) => {
  const carrosselRef = useRef<HTMLDivElement>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    const carrossel = carrosselRef.current;
    if (!carrossel) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      const step = carrossel.clientWidth; 
      const maxScroll = carrossel.scrollWidth - step; 
      
      scrollAmount += step;

      if (scrollAmount > maxScroll) {
          scrollAmount = 0;
      }

      carrossel.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: "smooth"
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <S.CarouselContainer>
        <S.PhotoGallery ref={carrosselRef}>
          {images.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`${altPrefix} ${index + 1}`} 
              onClick={() => setExpandedImage(src)} 
            />
          ))}
        </S.PhotoGallery>
      </S.CarouselContainer>

      {/* Modal de Expansão */}
      {expandedImage && (
        <S.ModalOverlay onClick={() => setExpandedImage(null)}>
          <S.CloseButton onClick={() => setExpandedImage(null)}>&times;</S.CloseButton>
          <S.ExpandedImage 
            src={expandedImage} 
            alt="Imagem expandida" 
            onClick={(e) => e.stopPropagation()} 
          />
        </S.ModalOverlay>
      )}
    </>
  );
};