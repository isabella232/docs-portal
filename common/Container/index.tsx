import { useContext, useEffect, useRef } from "react";
import {
  Section,
  SectionWrapper,
  SectionCenter,
  Container,
} from "@/common/Container/styles";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { CurrentSectionContext } from "@/hooks/useCurrentSectionContext";
import { HeroSectionContainer } from "@/components/Home/HeroSection/styles";

interface ContainerProps {
  children: React.ReactNode;
  padding?: string;
  layout?: boolean;
  heroSection?: boolean;
  id?: string;
}

export const SectionContainer = ({
  children,
  padding,
  layout,
  heroSection,
  id,
}: ContainerProps) => {
  const { setCurrentSection } = useContext(CurrentSectionContext);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const containerObserverEntry = useIntersectionObserver(containerRef, {
    threshold: 0.15,
    rootMargin: "0px 0px -20% 0px",
  });
  const isContainerVisible = !!containerObserverEntry?.isIntersecting;

  useEffect(() => {
    if (isContainerVisible) {
      setCurrentSection((containerRef.current as HTMLDivElement)?.id);
    }
  }, [isContainerVisible, setCurrentSection]);

  return (
    <Section id={id} layout={layout} padding={padding} ref={containerRef}>
      {heroSection && <HeroSectionContainer />}
      <SectionWrapper>
        <SectionCenter>
          <Container layout={layout}>{children}</Container>
        </SectionCenter>
      </SectionWrapper>
    </Section>
  );
};
