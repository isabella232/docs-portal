import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { useHandleClose } from "@/hooks/useHandleClose";
import { PageHideOuterScroll } from "@/styles/globalStyles";
import {
  BurgerSidebarContainer,
  BurgerSidebarWrapper,
  BurgerSidebarOverlay,
} from "@/common/Modal/styles";

interface BurgerSidebarProps {
  open: boolean;
  children: React.ReactNode;
  handleClose: () => void;
}

export const BurgerSidebar = ({
  open,
  children,
  handleClose,
}: BurgerSidebarProps) => {
  const TIMEOUT = 450;
  const wrapperRef = useRef(null);
  useHandleClose(wrapperRef, handleClose);

  return (
    <BurgerSidebarOverlay shouldShow={open}>
      <PageHideOuterScroll shouldHide={open} />
      <CSSTransition
        in={open}
        classNames="burgerslide-transition"
        unmountOnExit
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        <BurgerSidebarWrapper>
          <BurgerSidebarContainer ref={wrapperRef} shouldShow={open}>
            {children}
          </BurgerSidebarContainer>
        </BurgerSidebarWrapper>
      </CSSTransition>
    </BurgerSidebarOverlay>
  );
};
