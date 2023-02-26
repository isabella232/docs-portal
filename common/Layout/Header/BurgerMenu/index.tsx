import { BurgerSidebar } from "@/common/Modal";
import useWindowSize from "@/hooks/useIsMobile";
import { MobileMenuItems } from "@/common/Layout/Header/MenuItems";
import { Footer } from "@/common/Layout/Footer";
import {
  NavigationPrimary,
  PointerImage,
  BurgerMenuContainer,
  BurgerSidebarFlex,
} from "@/common/Layout/Header/BurgerMenu/styles";
interface BurgerMenuProps {
  isMenuOpen: boolean;
  handleClose: () => void;
}

export const BurgerMenu = ({ isMenuOpen, handleClose }: BurgerMenuProps) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <BurgerMenuContainer>
      <PointerImage
        src={"/assets/svg/open.svg"}
        alt="Open icon"
        width={isMobile ? "18" : "30"}
        height={isMobile ? "18" : "30"}
        onClick={handleClose}
      />
      <BurgerSidebar open={isMenuOpen} handleClose={handleClose}>
        <BurgerSidebarFlex>
          <PointerImage
            src={"/assets/svg/logo.svg"}
            alt="Fuel logo"
            width={isMobile ? 100 : 140}
            height={isMobile ? 28 : 40}
            priority
          />
          <PointerImage
            src={"/assets/svg/close.svg"}
            alt="Close icon"
            width={isMobile ? "18" : "30"}
            height={isMobile ? "18" : "30"}
            onClick={handleClose}
          />
        </BurgerSidebarFlex>
        <NavigationPrimary>
          <MobileMenuItems onClose={handleClose} />
        </NavigationPrimary>
        <Footer hideLogo />
      </BurgerSidebar>
    </BurgerMenuContainer>
  );
};
