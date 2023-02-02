import { Container, Description } from "@/common/Heading/styles";

export const Heading = ({
  level,
  title,
  description,
}: {
  level: number;
  title: string;
  description: string;
}) => {
  const CustomTitle = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Container>
      <CustomTitle>{title}</CustomTitle>
      <Description>{description}</Description>
    </Container>
  );
};
