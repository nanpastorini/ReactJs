import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray"
      color="black"
    >
      <div>
        <Menu>
          <MenuButton>
            Nuestros Productos
          </MenuButton>
          <MenuList>
            <MenuItem>Motorola</MenuItem>
            <MenuItem>Samsung</MenuItem>
            <MenuItem>Iphone</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <CartWidget/>
    </Flex>
  );
};

export default NavBar;