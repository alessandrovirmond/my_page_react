import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const TextSide = styled.div`
  flex: 1;
  min-width: 300px;

  p {
    color: var(--text-muted);
    margin-bottom: 15px;
  }
`;

export const CarouselSide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    width: 50%; 
  }
`;

export const HobbiesList = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 12px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-main);

    span {
      font-size: 1.2rem;
    }
  }
`;

export const CarouselContainer = styled.div`
  width: 300px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PhotoGallery = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  border-radius: 8px;
  border: 2px solid var(--border-color);
  scroll-snap-type: x mandatory;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--accent-color);
  }

  img {
    height: 400px;
    width: 100%;
    min-width: 100%;
    object-fit: cover;
    scroll-snap-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }

    @media (max-width: 768px) {
      height: 350px;
    }

    @media (max-width: 480px) {
      height: 300px;
    }
  }
`;