import { Button } from "@/common/Button";
import { SectionData } from "@/data/home";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";
import { ButtonContainer } from "@/components/Home/GetStartedSection/styles";

export const LibrariesSection = ({
  librariesData,
}: {
  librariesData: SectionData;
}) => (
  <SectionContainer id={librariesData.id}>
    <Heading
      level={2}
      title={librariesData.title}
      description={librariesData.description}
    />
    <HorizontalCards data={librariesData.cardsData} />
    <ButtonContainer>
      <Button
        target="_self"
        text="Get started"
        href="#Get started"
        variant="secondary"
        arrowLeft
      />
      <Button
        target="_self"
        text="Books"
        href="#Books"
        variant="secondary"
        arrowRight
      />
    </ButtonContainer>
  </SectionContainer>
);
