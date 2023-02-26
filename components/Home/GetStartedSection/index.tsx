import { SectionData } from "@/data/home";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";

export const GetStartedSection = ({
  gettingStartedData,
}: {
  gettingStartedData: SectionData;
}) => (
  <SectionContainer id={gettingStartedData.id}>
    <Heading
      level={2}
      title={gettingStartedData.title}
      description={gettingStartedData.description}
    />
    <HorizontalCards data={gettingStartedData.cardsData} />
  </SectionContainer>
);
