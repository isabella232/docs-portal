import { Button } from "@/common/Button";
import { SectionData } from "@/data/home";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";
import { ButtonContainer } from "@/components/Home/GetStartedSection/styles";

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
    <ButtonContainer>
      <Button
        target="_self"
        text="Examples & Libraries"
        href="#Libraries and Examples"
        variant="secondary"
        arrowRight
      />
    </ButtonContainer>
  </SectionContainer>
);
