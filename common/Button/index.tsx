import Image from "next/image";

import { Container, Anchor } from "@/common/Button/styles";

export interface ButtonProps {
  text: string;
  href: string;
  target?: string;
  arrowRight?: boolean;
  arrowLeft?: boolean;
  variant: "primary" | "secondary";
}

export const Button = ({
  text,
  href,
  target = "_blank",
  variant,
  arrowRight,
  arrowLeft,
}: ButtonProps) => (
  <Anchor href={href} target={target} rel="noreferrer">
    <Container variant={variant}>
      {arrowLeft && (
        <Image
          src={"/assets/svg/arrow-left.svg"}
          alt="Arrow"
          width="8"
          height="14"
        />
      )}
      {text}
      {arrowRight && (
        <Image
          src={"/assets/svg/arrow-right.svg"}
          alt="Arrow"
          width="8"
          height="14"
        />
      )}
    </Container>
  </Anchor>
);
