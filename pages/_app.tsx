import { useState } from "react";
import type { AppProps } from "next/app";

import { Header } from "@/common/Layout/Header";
import { Footer } from "@/common/Layout/Footer";
import { CurrentSectionContext } from "@/hooks/useCurrentSectionContext";

import { GlobalStyle } from "@/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  const [currentSection, setCurrentSection] = useState("");

  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection: currentSection,
        setCurrentSection: (currentSection) =>
          setCurrentSection(currentSection),
      }}
    >
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CurrentSectionContext.Provider>
  );
}
