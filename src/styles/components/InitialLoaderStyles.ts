import styled, { keyframes, css } from 'styled-components';

// Анимации
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const progressFill = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

// Основной контейнер лоадера
export const LoaderContainer = styled.div<{ $isComplete: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  opacity: ${props => props.$isComplete ? 0 : 1};
  visibility: ${props => props.$isComplete ? 'hidden' : 'visible'};
  transition: opacity 0.6s ease-out, visibility 0.6s ease-out;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.1) 0%, transparent 70%);
    animation: ${pulse} 3s ease-in-out infinite;
  }
`;

// Контент лоадера
export const LoaderContent = styled.div`
  text-align: center;
  color: white;
  max-width: 500px;
  padding: 2rem;
  animation: ${fadeIn} 0.8s ease-out;
  position: relative;
  z-index: 1;
`;

// Логотип
export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #4a90e2 0%, #67b8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: ${pulse} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }
`;

// Подзаголовок
export const Tagline = styled.p`
  font-size: 1.2rem;
  color: #a0b4d0;
  margin: 0 0 3rem 0;
  font-weight: 300;
  letter-spacing: 1px;
  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

// Контейнер спиннера
export const SpinnerContainer = styled.div`
  margin: 2rem 0;
  animation: ${fadeIn} 1s ease-out 0.6s both;
`;

// Спиннер
export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid rgba(74, 144, 226, 0.2);
  border-top: 3px solid #4a90e2;
  border-radius: 50%;
  margin: 0 auto;
  animation: ${spin} 1.2s linear infinite;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

// Секция прогресса
export const ProgressSection = styled.div`
  margin: 3rem 0 2rem 0;
  animation: ${fadeIn} 1s ease-out 0.9s both;
`;

// Контейнер прогресс-бара
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(74, 144, 226, 0.2);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

// Прогресс-бар
export const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #4a90e2, #67b8ff);
  border-radius: 3px;
  transition: width 0.3s ease-out;
  width: ${props => props.$progress}%;
  position: relative;
  box-shadow: 0 0 10px rgba(74, 144, 226, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6));
    border-radius: 0 3px 3px 0;
  }
`;

// Текст прогресса
export const ProgressText = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a90e2;
  text-align: center;
  margin-bottom: 0.5rem;
`;

// Текст загрузки
export const LoadingText = styled.div`
  font-size: 0.95rem;
  color: #8da3c7;
  font-weight: 400;
  letter-spacing: 0.5px;
  animation: ${pulse} 1.5s ease-in-out infinite;
  min-height: 1.2rem;
  transition: all 0.3s ease-out;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0 1rem;
  }
`;

// Дополнительные элементы для улучшения UX
export const LoadingDots = styled.span`
  &::after {
    content: '';
    animation: ${keyframes`
      0%, 20% { content: ''; }
      40% { content: '.'; }
      60% { content: '..'; }
      80%, 100% { content: '...'; }
    `} 1.5s infinite;
  }
`;

// Декоративные элементы
export const DecorativeCircle = styled.div<{ size: number; delay: number; left: string; top: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid rgba(74, 144, 226, 0.1);
  border-radius: 50%;
  left: ${props => props.left};
  top: ${props => props.top};
  animation: ${pulse} 3s ease-in-out infinite ${props => props.delay}s;
`;