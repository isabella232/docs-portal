import { useEffect } from "react";

export const useHandleClose = (
  ref: React.RefObject<HTMLInputElement>,
  handleClose?: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && handleClose) {
        if (!ref.current.contains(event.target as Node)) {
          handleClose();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClose]);
};
