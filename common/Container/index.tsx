import { useContext, useEffect, useRef } from "react";

import useWindowSize from "@/hooks/useIsMobile";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { CurrentSectionContext } from "@/hooks/useCurrentSectionContext";
import { HeroSectionContainer } from "@/components/Home/HeroSection/styles";
import {
  Section,
  SectionWrapper,
  SectionCenter,
  Container,
} from "@/common/Container/styles";

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
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { setCurrentSection } = useContext(CurrentSectionContext);
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
      {(heroSection || (isMobile && !layout)) && <HeroSectionContainer />}
      <SectionWrapper>
        <SectionCenter>
          <Container layout={layout}>{children}</Container>
        </SectionCenter>
      </SectionWrapper>
    </Section>
  );
};
