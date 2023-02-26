import Script from "next/script";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { PageSEO } from "@/common/PageSeo";
import ScrollToTop from "@/common/ScrollToTop";
import { HomeData, getHomeData } from "@/data/home";
import { HeroSection } from "@/components/Home/HeroSection";
import { BooksSection } from "@/components/Home/BookSection";
import { LibrariesSection } from "@/components/Home/LibrariesSection";
import { GetStartedSection } from "@/components/Home/GetStartedSection";
import { ReferencesSection } from "@/components/Home/ReferencesSection";

interface StaticProps {
  homeData: HomeData;
}

const Homepage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  homeData,
}) => (
  <>
    <PageSEO
      ogTitle={homeData.meta.ogTitle}
      ogDescription={homeData.meta.ogDescription}
      ogImage={homeData.meta.ogImage}
    />
    <ScrollToTop />
    <HeroSection heroData={homeData.heroData} />
    <GetStartedSection gettingStartedData={homeData.gettingStartedData} />
    <LibrariesSection librariesData={homeData.librariesData} />
    <BooksSection booksData={homeData.booksData} />
    <ReferencesSection referencesData={homeData.referencesData} />
    <Script src={"lib/hotjar.js"} strategy="afterInteractive" />
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-3NX45KSCPG"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3NX45KSCPG');
        `}
    </Script>
  </>
);

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  return {
    props: {
      homeData: getHomeData(),
    },
  };
};

export default Homepage;
