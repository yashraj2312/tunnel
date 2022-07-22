import {
  Box,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { siteLogo } from "assets";
import { useLocation } from "react-router-dom";

export function Navbar() {
  
  const { pathname } = useLocation();

  return (
    <>
      <Box
        bg={useColorModeValue("#084c61")}
        px={4}
        position={pathname === "/" || pathname === "/sign-up" ? "" : "fixed"}
        top='0'
        left='0'
        right={0}
        zIndex={
          pathname === "/login" || pathname === "/sign-up" ? "auto" : "1200"
        }
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              boxSize='125px'
              objectFit='cover'
              src={siteLogo}
              alt='site logo'
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
