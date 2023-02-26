import { SectionData } from "@/data/home";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";

export const ReferencesSection = ({
  referencesData,
}: {
  referencesData: SectionData;
}) => (
  <SectionContainer id={referencesData.id}>
    <Heading
      level={2}
      title={referencesData.title}
      mobileTitle={referencesData.mobileTitle}
      description={referencesData.description}
    />
    <HorizontalCards data={referencesData.cardsData} />
  </SectionContainer>
);
