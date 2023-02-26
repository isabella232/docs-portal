import Image from "next/image";

import { Flex } from "@/common/Container/styles";
import {
  Anchor,
  MenuItemsContainer,
  MobileAnchor,
} from "@/common/Layout/Header/styles";

const Navigations = [
  {
    label: "Get started",
    //  href is the id of the section, defined in home.json file
    href: "#Introduction",
  },
  {
    label: "Libraries",
    href: "#Libraries",
  },
  {
    label: "Books",
    href: "#Books",
  },
  {
    label: "References",
    href: "#References",
  },
];

export const MenuItems = ({ currentSection }: { currentSection: string }) => (
  <MenuItemsContainer>
    {Navigations.map((link) => (
      <Anchor
        key={link.href}
        href={link.href}
        isActive={currentSection === link.href.replace("#", "")}
      >
        {link.label}
      </Anchor>
    ))}
  </MenuItemsContainer>
);

export const MobileMenuItems = ({ onClose }: { onClose: () => void }) => {
  const AnchorItem = ({
    href,
    label,
  }: {
    href: string;
    label: React.ReactNode;
  }) => (
    <MobileAnchor href={href}>
      <Flex gap="10px" justify="start">
        {label}
        <Image
          src={"/assets/svg/arrow-right.svg"}
          alt="Arrow"
          width="8"
          height="14"
        />
      </Flex>
    </MobileAnchor>
  );

  return (
    <MenuItemsContainer onClick={onClose}>
      {Navigations.map((link) => (
        <AnchorItem key={link.href} href={link.href} label={link.label} />
      ))}
      <AnchorItem
        href="https://www.fuel.network/"
        label="Back to fuel.network"
      />
    </MenuItemsContainer>
  );
};
