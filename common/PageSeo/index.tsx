import Head from "next/head";
import { useRouter } from "next/router";

import { MetaData } from "@/data/home";

export const PageSEO = ({ ogTitle, ogDescription, ogImage }: MetaData) => {
  const router = useRouter();

  return (
    <Head>
      <title>{ogTitle}</title>
      <meta name="robots" content="follow, index" />
      <meta content={ogDescription} name="description" />
      <meta
        property="og:url"
        content={`https://fuel-doc.vercel.app/${router.asPath}`}
      />
      <meta property="og:type" content={"website"} />
      <meta property="og:site_name" content="Fuel" />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogTitle} />
      <meta name="twitter:card" content={ogImage} />
      <meta name="twitter:site" content="@fuellabs_" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};
