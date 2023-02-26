import Image from "next/image";

import { CardsData } from "@/data/home";
import { Flex } from "@/common/Container/styles";
import {
  CardsContainer,
  Anchor,
  CardWrapper,
  Card,
  Title,
  ImageContainer,
} from "@/common/HorizontalCards/styles";

export const HorizontalCards = ({ data }: { data: CardsData[] }) => (
  <CardsContainer>
    {data.map((card, index) => (
      <CardWrapper key={index}>
        <Anchor href={card.href} target="_blank" rel="noreferrer">
          <Card>
            <Flex>
              <Title>{card.title}</Title>
              {card.starIcon && (
                <ImageContainer>
                  <Image
                    src={`/assets/svg/${card.starIcon}.svg`}
                    width="30"
                    height="30"
                    alt={`${card.starIcon} icon`}
                  />
                </ImageContainer>
              )}
            </Flex>
            <p>{card.description}</p>
          </Card>
        </Anchor>
      </CardWrapper>
    ))}
  </CardsContainer>
);
