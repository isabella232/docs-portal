import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { useHandleClose } from "@/hooks/useHandleClose";
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
          <BurgerSidebarContainer ref={wrapperRef}>
            {children}
          </BurgerSidebarContainer>
        </BurgerSidebarWrapper>
      </CSSTransition>
    </BurgerSidebarOverlay>
  );
};
