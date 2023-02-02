import Image from "next/image";

import { Anchor, MenuItemsContainer } from "@/common/Layout/Header/styles";
import { Flex } from "@/common/Container/styles";

export const MenuItems = ({ currentSection }: { currentSection: string }) => (
  <MenuItemsContainer>
    <Anchor isActive={currentSection === "Get started"} href="#Get started">
      Get started
    </Anchor>
    <Anchor
      isActive={currentSection === "Libraries and Examples"}
      href="#Libraries and Examples"
    >
      Libraries and Examples
    </Anchor>
    <Anchor isActive={currentSection === "Books"} href="#Books">
      Books
    </Anchor>
    <Anchor isActive={currentSection === "References"} href="#References">
      References
    </Anchor>
  </MenuItemsContainer>
);

export const MobileMenuItems = ({ onClose }: { onClose: () => void }) => (
  <MenuItemsContainer onClick={onClose}>
    <a href="https://www.google.com/">
      <Flex gap="8px">
        Get started
        <Image
          src={"/assets/svg/arrow-right.svg"}
          alt="Arrow"
          width="8"
          height="14"
        />
      </Flex>
    </a>
    <a href="https://www.google.com/">
      <Flex gap="8px">
        Libraries and Examples
        <Image
          src={"/assets/svg/arrow-right.svg"}
          alt="Arrow"
          width="8"
          height="14"
        />
      </Flex>
    </a>
    <a href="https://www.google.com/">
      <Flex gap="8px">
        Books
        <Image
          src={"/assets/svg/arrow-right.svg"}
          alt="Arrow"
          width="8"
          height="14"
        />
      </Flex>
    </a>
    <a href="https://www.google.com/">
      <Flex gap="8px">
        References
        <Image
          src={"/assets/svg/arrow-right.svg"}
          alt="Arrow"
          width="8"
          height="14"
        />
      </Flex>
    </a>
    <a href="https://www.google.com/">
      <Flex gap="8px">
        Back to fuel.network
        <Image
          src={"/assets/svg/arrow-right.svg"}
          alt="Arrow"
          width="8"
          height="14"
        />
      </Flex>
    </a>
  </MenuItemsContainer>
);
