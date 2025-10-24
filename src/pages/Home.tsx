import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../styles/GlobalStyles';
import { products } from '../data/products';
import { usePrice } from '../hooks/usePrice';
import { RocketIcon, LightningIcon, ShieldIcon, GlobeIcon, TargetIcon, DiamondIcon } from '../components/FeatureIcons';
import LazyImage from '../components/LazyImage';
import { COMPANY_INFO } from '../config/constants';
import {
  HeroSection,
  HeroVideo,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  FeaturesSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
  CarouselContent,
  CarouselTitle,
  CarouselSubtitle,
  CarouselDots,
  CarouselDot,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  ProductsSection,
  VideoSection,
  VideoSectionVideo,
  VideoSectionContent,
  VideoSectionTitle,
  VideoSectionSubtitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductButton,
  PremiumButton,
  ScrollReveal,
  ParallaxElement,
  PhotoGallerySection,
  PhotoStrip,
  PhotoItem,
  ScrollingTextBanner,
  ScrollingText,
  InfoSection,
  InfoGrid,
  InfoBlock,
  InfoTitle,
  InfoDescription,
  InfoSubsection,
  InfoSubtitle,
  InfoText,
  InfoHighlight
} from '../styles/pages/HomeStyles';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);
  const { formatPrice } = usePrice();
  const scrollRevealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoSectionVisible, setIsVideoSectionVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  // Состояние для карусели
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Состояние для второй карусели (Featured Solutions)
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);
  const totalFeaturedSlides = 3;

  // Состояние для автоматического выделения карточек продуктов
  const [activeProductCard, setActiveProductCard] = useState(0);
  const totalProductCards = featuredProducts.length;

  // Данные для слайдов карусели
  const carouselSlides = [
    {
      title: "Why Choose Email Marketing Academy?",
      subtitle: "Discover the excellence that makes our email marketing education exceptional"
    },
    {
      title: "Expert-Led Email Marketing Training",
      subtitle: "Learn from industry professionals with real-world email marketing and automation experience"
    },
    {
      title: "Innovation Meets Email Marketing",
      subtitle: "Where cutting-edge email marketing techniques meet practical application"
    }
  ];

  // Данные для слайдов Featured Solutions
  const featuredSlides = [
    {
      title: "Featured Email Marketing Courses",
      subtitle: "Discover our most popular and effective email marketing training programs"
    },
    {
      title: "Revolutionary Email Learning",
      subtitle: "Next-generation email marketing education that transforms careers"
    },
    {
      title: "Premium Email Marketing Education",
      subtitle: "Crafted for those who demand excellence in email marketing mastery"
    }
  ];

  // Мемоизируем массив изображений для галереи
  const galleryImages = useMemo(() => {
    // Новые email marketing изображения для галереи
    const allImages = [
      { src: `/images/mail_1.jpg`, alt: `Email Marketing Portfolio 1`, type: 'email-portfolio' },
      { src: `/images/mail_2.jpg`, alt: `Email Marketing Portfolio 2`, type: 'email-portfolio' },
      { src: `/images/mail_3.jpg`, alt: `Email Marketing Portfolio 3`, type: 'email-portfolio' },
      { src: `/images/mail_4.jpg`, alt: `Email Marketing Portfolio 4`, type: 'email-portfolio' },
      { src: `/images/mail_5.jpg`, alt: `Email Marketing Portfolio 5`, type: 'email-portfolio' },
      { src: `/images/mail_6.jpg`, alt: `Email Marketing Portfolio 6`, type: 'email-portfolio' },
      { src: `/images/mail_7.jpg`, alt: `Email Marketing Portfolio 7`, type: 'email-portfolio' },
      { src: `/images/mail_8.jpg`, alt: `Email Marketing Portfolio 8`, type: 'email-portfolio' },
      { src: `/images/mail_conference_1.jpg`, alt: `Email Marketing Conference`, type: 'email-conference' }
    ];
    
    // Перемешиваем для разнообразия и добавляем id
    return allImages
      .sort(() => Math.random() - 0.5)
      .map((img, index) => ({
        id: index,
        src: img.src,
        alt: img.alt,
        type: img.type
      }));
  }, []);

  // Мемоизируем текст для бегущей строки
  const scrollingTexts = useMemo(() => [
    'MASTER EMAIL MARKETING TODAY',
    'FOLLOW US @MAIL_LEARN_ACADEMY',
    'PREMIUM EMAIL MARKETING EDUCATION COURSES',
    'TRANSFORM YOUR CAREER WITH EMAIL MARKETING',
    'EMAIL AUTOMATION & CAMPAIGN OPTIMIZATION',
    'JOIN THE EMAIL MARKETING REVOLUTION NOW'
  ], []);

  useEffect(() => {
    // Intersection Observer для scroll reveal эффектов
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Наблюдаем за всеми элементами с scroll reveal
    scrollRevealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Intersection Observer для галереи
    const galleryObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          galleryObserver.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    // Intersection Observer для новой видео секции
    const videoSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoSectionVisible(true);
          videoSectionObserver.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (galleryRef.current) {
      galleryObserver.observe(galleryRef.current);
    }

    if (videoSectionRef.current) {
      videoSectionObserver.observe(videoSectionRef.current);
    }

    // Parallax эффект при скролле (throttled)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          parallaxRefs.current.forEach((ref, index) => {
            if (ref) {
              const speed = (index + 1) * 0.1;
              const yPos = -(scrollY * speed);
              ref.style.transform = `translateY(${yPos}px)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      galleryObserver.disconnect();
      videoSectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Автоматическое переключение слайдов каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Автоматическое переключение слайдов Featured Solutions каждые 5 секунд (со сдвигом)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedSlide(prev => (prev + 1) % totalFeaturedSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalFeaturedSlides]);

  // Автоматическое выделение карточек продуктов каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProductCard(prev => (prev + 1) % totalProductCards);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalProductCards]);

  // Функция для переключения на определенный слайд
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Функция для переключения на определенный слайд Featured Solutions
  const goToFeaturedSlide = (slideIndex: number) => {
    setCurrentFeaturedSlide(slideIndex);
  };

  // Поддержка свайпов для мобильных устройств
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Свайп влево - следующий слайд
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    } else if (isRightSwipe) {
      // Свайп вправо - предыдущий слайд
      setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  // Поддержка свайпов для Featured Solutions карусели
  const [featuredTouchStart, setFeaturedTouchStart] = useState<number | null>(null);
  const [featuredTouchEnd, setFeaturedTouchEnd] = useState<number | null>(null);

  const onFeaturedTouchStart = (e: React.TouchEvent) => {
    setFeaturedTouchEnd(null);
    setFeaturedTouchStart(e.targetTouches[0].clientX);
  };

  const onFeaturedTouchMove = (e: React.TouchEvent) => {
    setFeaturedTouchEnd(e.targetTouches[0].clientX);
  };

  const onFeaturedTouchEnd = () => {
    if (!featuredTouchStart || !featuredTouchEnd) return;
    
    const distance = featuredTouchStart - featuredTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Свайп влево - следующий слайд
      setCurrentFeaturedSlide(prev => (prev + 1) % totalFeaturedSlides);
    } else if (isRightSwipe) {
      // Свайп вправо - предыдущий слайд
      setCurrentFeaturedSlide(prev => (prev - 1 + totalFeaturedSlides) % totalFeaturedSlides);
    }
  };

  const setScrollRevealRef = (index: number) => (el: HTMLDivElement | null) => {
    scrollRevealRefs.current[index] = el;
  };

  const setParallaxRef = (index: number) => (el: HTMLDivElement | null) => {
    parallaxRefs.current[index] = el;
  };

  return (
    <>
      <HeroSection>
        <HeroVideo 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src="/videos/videoAI_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
        <Container>
          <HeroContent>
            <HeroTitle>MAIL  Marketing LEARN</HeroTitle> 
            <HeroSubtitle>
              Master Email Marketing & Automation with Expert-Led Video Courses - Transform Your Digital Marketing Career Today
            </HeroSubtitle>
            <HeroButtons>
              <Button as={Link} to="/products" variant="primary">
                Browse Courses
              </Button>
              <Button as={Link} to="/about" variant="outline">
                Our Mission
              </Button>
            </HeroButtons>
          </HeroContent>
        </Container>
      </HeroSection>

      <FeaturesSection>
        
        <Container>
          <ScrollReveal ref={setScrollRevealRef(0)}>
            {/* Карусель плашек */}
            <CarouselContainer
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <CarouselTrack currentSlide={currentSlide}>
                {carouselSlides.map((slide, index) => (
                  <CarouselSlide key={index}>
                    <CarouselContent>
                      <CarouselTitle>{slide.title}</CarouselTitle>
                      <CarouselSubtitle>{slide.subtitle}</CarouselSubtitle>
                    </CarouselContent>
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselContainer>
            
            {/* Навигационные точки */}
            <CarouselDots>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <CarouselDot
                  key={index}
                  active={currentSlide === index}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </CarouselDots>
          </ScrollReveal>
          
          <FeaturesGrid>
            <ScrollReveal ref={setScrollRevealRef(1)} delay={100}>
              <FeatureCard>
                <RocketIcon />
                <FeatureTitle>Expert Email Marketing Instruction</FeatureTitle>
                <FeatureDescription>
                  Learn from industry professionals with hands-on email marketing and automation experience and proven track records.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(2)} delay={200}>
              <FeatureCard>
                <LightningIcon />
                <FeatureTitle>Instant Access Learning</FeatureTitle>
                <FeatureDescription>
                  Start learning immediately with lifetime access to all course materials and updates.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(3)} delay={300}>
              <FeatureCard>
                <ShieldIcon />
                <FeatureTitle>Certified Email Marketing Quality</FeatureTitle>
                <FeatureDescription>
                  Industry-recognized certificates and rigorous email marketing curriculum ensure professional standards.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(4)} delay={400}>
              <FeatureCard>
                <GlobeIcon />
                <FeatureTitle>Email Marketing Community</FeatureTitle>
                <FeatureDescription>
                  Join hundreds of email marketing enthusiasts worldwide with 24/7 support and community access.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(5)} delay={500}>
              <FeatureCard>
                <TargetIcon />
                <FeatureTitle>Practical Application</FeatureTitle>
                <FeatureDescription>
                  Real-world projects and case studies that you can apply immediately in your work.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(6)} delay={600}>
              <FeatureCard>
                <DiamondIcon />
                <FeatureTitle>Premium Email Marketing Content</FeatureTitle>
                <FeatureDescription>
                  Cutting-edge email marketing curriculum updated regularly with the latest automation developments and trends.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* Новая независимая видео секция */}
      <VideoSection ref={videoSectionRef}>
        {isVideoSectionVisible && (
          <VideoSectionVideo 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="none"
          >
            <source src="/videos/videoAI_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </VideoSectionVideo>
        )}
        <VideoSectionContent>
          <VideoSectionTitle>Email Marketing Learning in Action</VideoSectionTitle>
          <VideoSectionSubtitle>
            Experience the future of email marketing education through interactive learning and real-world applications
          </VideoSectionSubtitle>
        </VideoSectionContent>
      </VideoSection>

      <ProductsSection>
        <Container>
          <ScrollReveal ref={setScrollRevealRef(7)}>
            {/* Карусель Featured Solutions */}
            <CarouselContainer
              onTouchStart={onFeaturedTouchStart}
              onTouchMove={onFeaturedTouchMove}
              onTouchEnd={onFeaturedTouchEnd}
            >
              <CarouselTrack currentSlide={currentFeaturedSlide}>
                {featuredSlides.map((slide, index) => (
                  <CarouselSlide key={index}>
                    <CarouselContent>
                      <CarouselTitle>{slide.title}</CarouselTitle>
                      <CarouselSubtitle>{slide.subtitle}</CarouselSubtitle>
                    </CarouselContent>
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselContainer>
            
            {/* Навигационные точки для Featured Solutions */}
            <CarouselDots>
              {Array.from({ length: totalFeaturedSlides }).map((_, index) => (
                <CarouselDot
                  key={index}
                  active={currentFeaturedSlide === index}
                  onClick={() => goToFeaturedSlide(index)}
                />
              ))}
            </CarouselDots>
          </ScrollReveal>
          
          <ProductsGrid>
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} ref={setScrollRevealRef(8 + index)} delay={index * 100}>
                <ProductCard $isActive={activeProductCard === index}>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductInfo style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%',
                    padding: '20px' 
                  }}>
                    <ProductContent style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}>
                      <ProductTitle style={{ 
                        marginBottom: '12px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {product.name}
                      </ProductTitle>
                      
                      <ProductDescription style={{
                        height: '70px',
                        overflow: 'hidden',
                        marginBottom: '8px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.4'
                      }}>
                        {product.description.length > 100 
                          ? product.description.substring(0, 100) + '...'
                          : product.description
                        }
                      </ProductDescription>
                      
                      <div style={{
                        marginTop: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '5px'
                      }}>
                        <ProductButton 
                          as={Link} 
                          to={`/product/${product.id}`}
                          style={{
                            padding: '8px 16px',
                            minWidth: '110px',
                            textAlign: 'center',
                            fontSize: '0.85rem',
                            fontWeight: '500'
                          }}
                        >
                          Start Learning
                        </ProductButton>
                      </div>
                    </ProductContent>
                  </ProductInfo>
                </ProductCard>
              </ScrollReveal>
            ))}
          </ProductsGrid>
          
          <ScrollReveal ref={setScrollRevealRef(14)}>
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
              <PremiumButton as={Link} to="/products">
                <span>
                  🎓 View All Courses
                </span>
              </PremiumButton>
            </div>
          </ScrollReveal>
        </Container>
      </ProductsSection>

      {/* Photo Gallery Section */}
      <PhotoGallerySection ref={galleryRef}>
        {isVisible && (
          <PhotoStrip>
            {/* Первый набор изображений */}
            {galleryImages.map((image) => (
              <PhotoItem key={`first-${image.id}`} className={`photo-${image.type}`}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                />
              </PhotoItem>
            ))}
            {/* Дублированный набор для бесконечной прокрутки */}
            {galleryImages.map((image) => (
              <PhotoItem key={`second-${image.id}`} className={`photo-${image.type}`}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                />
              </PhotoItem>
            ))}
            {/* Третий набор для полной бесконечности */}
            {galleryImages.map((image) => (
              <PhotoItem key={`third-${image.id}`} className={`photo-${image.type}`}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                />
              </PhotoItem>
            ))}
          </PhotoStrip>
        )}
        
        <ScrollingTextBanner>
          <ScrollingText>
            {scrollingTexts.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </ScrollingText>
        </ScrollingTextBanner>
      </PhotoGallerySection>

      {/* Information Section */}
      <InfoSection>
        <InfoGrid>
          <InfoBlock>
            <InfoTitle>Master Email Marketing</InfoTitle>
            <InfoDescription>
              Transform your digital marketing career with comprehensive email marketing training. 
              Learn email automation, list building, campaign optimization, and advanced email marketing applications 
              that professionals use to create high-converting email campaigns.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>Professional Email Marketing Development</InfoSubtitle>
              <InfoText>
                Master <InfoHighlight>advanced email marketing techniques </InfoHighlight> 
                 that deliver stunning, professional email campaigns. From basic fundamentals to 
                complex automation workflows, learn to create industry-standard email marketing strategies.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Real-World Email Marketing Applications</InfoTitle>
            <InfoDescription>
              Apply email marketing knowledge immediately with practical campaigns and case studies. 
              Our courses focus on real marketing scenarios and measurable business growth through email marketing.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>Industry-Proven Email Marketing Methods</InfoSubtitle>
              <InfoText>
                Learn <InfoHighlight>battle-tested email marketing strategies</InfoHighlight> used by 
                top marketing agencies and e-commerce companies. From list building to conversion optimization, 
                master techniques that deliver measurable results.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Lifetime Email Marketing Learning Access</InfoTitle>
            <InfoDescription>
              Enjoy unlimited access to all course materials, updates, and new content. 
              Stay ahead of the rapidly evolving email marketing industry with continuous learning.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>Always Up-to-Date Email Marketing Content</InfoSubtitle>
              <InfoText>
                Access <InfoHighlight>regularly updated email marketing curriculum</InfoHighlight> that 
                evolves with email technology. New automation features, tools, and techniques are 
                added monthly to keep your skills current.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Expert Email Marketing Community Support</InfoTitle>
            <InfoDescription>
              Join a thriving community of email marketing professionals and receive personalized guidance. 
              Get answers to your questions and accelerate your email marketing learning journey.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>24/7 Email Marketing Community Access</InfoSubtitle>
              <InfoText>
                Connect with <InfoHighlight>hundreds of email marketing learners worldwide </InfoHighlight> 
                through our exclusive community platform. Share campaigns, get feedback, 
                and collaborate on email marketing projects.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>
        </InfoGrid>
      </InfoSection>
    </>
  );
};

export default Home;
