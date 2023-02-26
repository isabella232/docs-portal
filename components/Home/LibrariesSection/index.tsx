import { SectionData } from "@/data/home";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";

export const LibrariesSection = ({
  librariesData,
}: {
  librariesData: SectionData;
}) => (
  <SectionContainer id={librariesData.id}>
    <Heading
      level={2}
      title={librariesData.title}
      mobileTitle={librariesData.mobileTitle}
      description={librariesData.description}
    />
    <HorizontalCards data={librariesData.cardsData} />
  </SectionContainer>
);
