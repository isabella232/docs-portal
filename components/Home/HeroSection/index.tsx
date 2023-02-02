import { HeroData } from "@/data/home";
import { Button } from "@/common/Button";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { ButtonContainer } from "@/components/Home/HeroSection/styles";

export const HeroSection = ({ heroData }: { heroData: HeroData }) => (
  <SectionContainer heroSection padding="5.125rem 0">
    <Heading
      level={1}
      title={heroData.title}
      description={heroData.description}
    />
    <ButtonContainer>
      <Button
        href={heroData.primaryButtonLink}
        text={heroData.primaryButtonLabel}
        variant="primary"
      />
      <Button
        href={heroData.secondaryButtonLink}
        text={heroData.secondaryButtonLabel}
        variant="secondary"
      />
    </ButtonContainer>
  </SectionContainer>
);
