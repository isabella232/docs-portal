import { SectionData } from "@/data/home";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";

export const BooksSection = ({ booksData }: { booksData: SectionData }) => (
  <SectionContainer id={booksData.id}>
    <Heading
      level={2}
      title={booksData.title}
      description={booksData.description}
    />
    <HorizontalCards data={booksData.cardsData} />
  </SectionContainer>
);
