import Image from "next/image";
import { useContext, useState } from "react";

import { Button } from "@/common/Button";
import { SectionContainer } from "@/common/Container";
import { BurgerMenu } from "@/common/Layout/Header/BurgerMenu";
import { CurrentSectionContext } from "@/hooks/useCurrentSectionContext";
import {
  LogoContainer,
  DesktopMenuContainer,
  ButtonContainer,
  StickyHeader,
  HeaderFlex,
} from "@/common/Layout/Header/styles";
import { MenuItems } from "@/common/Layout/Header/MenuItems";

export const Header = () => {
  const [isMenuOpen, setIsMenOpen] = useState<boolean>(false);
  const { currentSection } = useContext(CurrentSectionContext);

  return (
    <StickyHeader>
      <SectionContainer padding="1.5rem 0" layout>
        <HeaderFlex>
          <LogoContainer href="/">
            <Image
              src={"/assets/svg/logo.svg"}
              alt="Fuel logo"
              width="140"
              height="40"
              priority
            />
          </LogoContainer>
          <DesktopMenuContainer>
            <MenuItems currentSection={currentSection} />
          </DesktopMenuContainer>
          <ButtonContainer>
            <Button href="/" text="Back to fuel.network" variant="primary" />
          </ButtonContainer>
          <BurgerMenu
            isMenuOpen={isMenuOpen}
            handleClose={() => setIsMenOpen(!isMenuOpen)}
          />
        </HeaderFlex>
      </SectionContainer>
    </StickyHeader>
  );
};
