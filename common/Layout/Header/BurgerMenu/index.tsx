import { BurgerSidebar } from "@/common/Modal";
import {
  NavigationPrimary,
  PointerImage,
  BurgerMenuContainer,
  BurgerSidebarFlex,
} from "@/common/Layout/Header/BurgerMenu/styles";
import { MobileMenuItems } from "@/common/Layout/Header/MenuItems";
import { Footer } from "@/common/Layout/Footer";
interface BurgerMenuProps {
  isMenuOpen: boolean;
  handleClose: () => void;
}

export const BurgerMenu = ({ isMenuOpen, handleClose }: BurgerMenuProps) => (
  <BurgerMenuContainer>
    <PointerImage
      src={"/assets/svg/open.svg"}
      alt="Open icon"
      width="40"
      height="30"
      onClick={handleClose}
    />
    <BurgerSidebar open={isMenuOpen} handleClose={handleClose}>
      <BurgerSidebarFlex>
        <PointerImage
          src={"/assets/svg/open.svg"}
          alt="Close icon"
          width="30"
          height="30"
          onClick={handleClose}
        />
        <PointerImage
          src={"/assets/svg/close.svg"}
          alt="Close icon"
          width="30"
          height="30"
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
