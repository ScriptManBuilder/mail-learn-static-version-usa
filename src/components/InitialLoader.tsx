import React from 'react';
import {
  LoaderContainer,
  LoaderContent,
  Logo,
  Tagline,
  SpinnerContainer,
  Spinner,
  ProgressSection,
  ProgressBarContainer,
  ProgressBar,
  ProgressText,
  LoadingText,
  DecorativeCircle
} from '../styles/components/InitialLoaderStyles';

interface InitialLoaderProps {
  progress: number;
}

const InitialLoader: React.FC<InitialLoaderProps> = ({ progress }) => {
  const isComplete = progress >= 100;

  // Dynamic loading messages based on progress
  const getLoadingMessage = () => {
    if (progress < 20) return 'Initializing email marketing platform...';
    if (progress < 40) return 'Loading course materials and resources...';
    if (progress < 60) return 'Preparing interactive learning environment...';
    if (progress < 80) return 'Setting up your personalized dashboard...';
    if (progress < 95) return 'Almost ready to master email marketing...';
    return 'Welcome to your email marketing journey!';
  };

  return (
    <LoaderContainer $isComplete={isComplete}>
      {/* Decorative circles for visual appeal */}
      <DecorativeCircle size={100} delay={0} left="10%" top="20%" />
      <DecorativeCircle size={60} delay={1} left="80%" top="70%" />
      <DecorativeCircle size={80} delay={2} left="20%" top="80%" />
      <DecorativeCircle size={40} delay={0.5} left="90%" top="15%" />
      
      <LoaderContent>
        <Logo>MAIL LEARN ACADEMY</Logo>
        <Tagline>Master Email Marketing Excellence</Tagline>
        
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
        
        <ProgressSection>
          <ProgressBarContainer>
            <ProgressBar $progress={progress} />
          </ProgressBarContainer>
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </ProgressSection>
        
        <LoadingText>
          {getLoadingMessage()}
        </LoadingText>
      </LoaderContent>
    </LoaderContainer>
  );
};

export default InitialLoader;