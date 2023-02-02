import Image from "next/image";

import { SectionContainer } from "@/common/Container";
import { LogoContainer } from "@/common/Layout/Header/styles";
import {
  FlexContainer,
  SocialsContainer,
  Tooltip,
  FooterWrapper,
} from "@/common/Layout/Footer/styles";

const FooterSocials = [
  {
    name: "Twitter",
    icon: "/assets/svg/twitter.svg",
    link: "https://www.twitter.com/fuellabs_",
  },
  {
    name: "Discord",
    icon: "/assets/svg/discord.svg",
    link: "https://www.discord.com/invite/xfpK4Pe",
  },
  {
    name: "Github",
    icon: "/assets/svg/github.svg",
    link: "https://www.github.com/FuelLabs",
  },
];

export const Footer = ({ hideLogo }: { hideLogo?: boolean }) => (
  <FooterWrapper hideLogo={hideLogo}>
    <SectionContainer padding="2.75rem 0" layout>
      <FlexContainer>
        {!hideLogo && (
          <LogoContainer href="/">
            <Image
              src={"/assets/svg/logo.svg"}
              alt="Fuel logo"
              width="140"
              height="40"
            />
          </LogoContainer>
        )}
        <SocialsContainer hideLogo={hideLogo}>
          {FooterSocials.map((social, index) => (
            <a href={social.link} target="_blank" rel="noreferrer" key={index}>
              <Image
                src={social.icon}
                alt="Globe logo"
                width="40"
                height="40"
              />
              <Tooltip>{social.name}</Tooltip>
            </a>
          ))}
        </SocialsContainer>
      </FlexContainer>
    </SectionContainer>
  </FooterWrapper>
);
