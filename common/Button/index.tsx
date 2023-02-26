import { Container, Anchor } from "@/common/Button/styles";

export interface ButtonProps {
  text: string;
  href: string;
  target?: string;
  variant: "primary" | "secondary";
}

export const Button = ({
  text,
  href,
  target = "_blank",
  variant,
}: ButtonProps) => (
  <Anchor href={href} target={target} rel="noreferrer">
    <Container variant={variant}>{text}</Container>
  </Anchor>
);
