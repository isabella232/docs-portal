import { Button } from "@/common/Button";
import { SectionData } from "@/data/home";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";
import { ButtonContainer } from "@/components/Home/GetStartedSection/styles";

export const ReferencesSection = ({
  referencesData,
}: {
  referencesData: SectionData;
}) => (
  <SectionContainer id={referencesData.id}>
    <Heading
      level={2}
      title={referencesData.title}
      description={referencesData.description}
    />
    <HorizontalCards data={referencesData.cardsData} />
    <ButtonContainer>
      <Button
        target="_self"
        text="Books"
        href="#Books"
        variant="secondary"
        arrowLeft
      />
    </ButtonContainer>
  </SectionContainer>
);
