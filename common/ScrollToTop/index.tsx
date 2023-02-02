import Image from "next/image";
import { useEffect, useState } from "react";

import { getScroll } from "@/utils/getScroll";
import { ScrollUpContainer } from "@/common/ScrollToTop/styles";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = (event: any) => {
      const offsetFromTop = getScroll(event.target, true);

      if (!showScroll && offsetFromTop > 350) {
        setShowScroll(true);
      } else if (offsetFromTop <= 350) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <ScrollUpContainer onClick={scrollUp} show={showScroll}>
      <Image
        src={"/assets/svg/arrow.svg"}
        alt="Fuel logo"
        width="32"
        height="32"
        priority
      />
    </ScrollUpContainer>
  );
};

export default ScrollToTop;
