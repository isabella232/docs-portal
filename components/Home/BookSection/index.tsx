import { Button } from "@/common/Button";
import { SectionData } from "@/data/home";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";
import { ButtonContainer } from "@/components/Home/GetStartedSection/styles";

export const BooksSection = ({ booksData }: { booksData: SectionData }) => (
  <SectionContainer id={booksData.id}>
    <Heading
      level={2}
      title={booksData.title}
      description={booksData.description}
    />
    <HorizontalCards data={booksData.cardsData} />
    <ButtonContainer>
      <Button
        target="_self"
        text="Libraries and Examples"
        href="#Libraries and Examples"
        variant="secondary"
        arrowLeft
      />
      <Button
        target="_self"
        text="Specs & References"
        href="#References"
        variant="secondary"
        arrowRight
      />
    </ButtonContainer>
  </SectionContainer>
);
