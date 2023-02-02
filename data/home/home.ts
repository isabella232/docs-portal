import { applyDataOverrides } from "@/utils/applyOverride";

import HOME_DATA from "@/data/home/home.json";

export interface MetaData {
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface HeroData {
  title: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonLink: string;
  secondaryButtonLabel: string;
  secondaryButtonLink: string;
}
export interface cardsData {
  title: string;
  starIcon?: string;
  description: string;
  href: string;
}

export interface SectionData {
  id?: string;
  title: string;
  description: string;
  cardsData: cardsData[];
}

export type HomeData = {
  meta: MetaData;
  heroData: HeroData;
  gettingStartedData: SectionData;
  librariesData: SectionData;
  booksData: SectionData;
  referencesData: SectionData;
};

export const getHomeData = () => applyDataOverrides(HOME_DATA);
