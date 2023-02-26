import useWindowSize from "@/hooks/useIsMobile";
import { Container, Description } from "@/common/Heading/styles";

export const Heading = ({
  level,
  title,
  mobileTitle,
  description,
}: {
  level: number;
  title: string;
  mobileTitle?: string;
  description: string;
}) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const CustomTitle = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Container>
      <CustomTitle>{isMobile && mobileTitle ? mobileTitle : title}</CustomTitle>
      <Description>{description}</Description>
    </Container>
  );
};
