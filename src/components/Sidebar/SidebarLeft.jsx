import React from "react";
import {
  Flex,
  Avatar,
  HStack,
  Box,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  SiHomebridge,
  SiAzuredataexplorer,
  BsFillBookmarkStarFill,
  FaUserCog,
} from "assets";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "features/Auth/authSlice";

export function SidebarLeft() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    auth: { user },
  } = useSelector((state) => state);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };
  return (
    <div>
      <Flex
        spacing={4}
        position='sticky'
        top='20'
        maxW={"20rem"}
        minW={"16rem"}
        fontSize={"xl"}
        height={"calc(100vh - 80px)"}
        flexDirection='column'
        justifyContent={"space-between"}
        py={6}
        px={2}
        pr={6}
      >
        <Box>
          <NavLink
            to='/home'
            className={({ isActive }) =>
              isActive
                ? `${styles.isNavLinkActive} ${styles.sidebarMenuNavLink}`
                : `${styles.isNavLinkInactive} ${styles.sidebarMenuNavLink}`
            }
          >
            <Flex alignItems={"center"} lineHeight={10}>
              <SiHomebridge />
              <Box px={2}>Home</Box>
            </Flex>
          </NavLink>
          <NavLink
            to='/explore'
            className={({ isActive }) =>
              isActive
                ? `${styles.isNavLinkActive} ${styles.sidebarMenuNavLink}`
                : `${styles.isNavLinkInactive} ${styles.sidebarMenuNavLink}`
            }
          >
            <Flex alignItems={"center"} lineHeight={10}>
              <SiAzuredataexplorer />
              <Box px={2}>Explore</Box>
            </Flex>
          </NavLink>

          <NavLink
            to='/bookmarks'
            className={({ isActive }) =>
              isActive
                ? `${styles.isNavLinkActive} ${styles.sidebarMenuNavLink}`
                : `${styles.isNavLinkInactive} ${styles.sidebarMenuNavLink}`
            }
          >
            <Flex alignItems={"center"} lineHeight={10}>
              <BsFillBookmarkStarFill />
              <Box px={2}>Bookmarks</Box>
            </Flex>
          </NavLink>

          <NavLink
            to={`/profile/${user.username}`}
            className={({ isActive }) =>
              isActive
                ? `${styles.isNavLinkActive} ${styles.sidebarMenuNavLink}`
                : `${styles.isNavLinkInactive} ${styles.sidebarMenuNavLink}`
            }
          >
            <Flex alignItems={"center"} lineHeight={10}>
              <FaUserCog />
              <Box px={2}>Profile</Box>
            </Flex>
          </NavLink>

          <Button
            onClick={handleLogout}
            mt={10}
            w={"full"}
            bg={"primary"}
            color={"white"}
            _hover={{
              bg: useColorModeValue("#084c61"),
            }}
          >
            Logout
          </Button>
        </Box>

        <HStack spacing='24px'>
          <Avatar name='John Doe' src={user.profilePic} />

          <Heading as='h5' size='sm'>
            {`${user.firstName} ${user.lastName}`}
          </Heading>
          <Box></Box>
        </HStack>
      </Flex>
    </div>
  );
}
