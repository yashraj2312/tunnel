import React, { useState } from "react";
import {
  Flex,
  HStack,
  Box,
  Textarea,
  Avatar,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { createUserPost } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";

export function PostTextBox() {
  const [value, setValue] = useState("");
  const {
    auth: { user },
  } = useSelector((state) => state);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const dispatch = useDispatch();
  const postHandler = async () => {
    dispatch(createUserPost({ content: value }));
    setValue("");
  };

  return (
    <Flex
      direction={"column"}
      boxShadow='base'
      w={"full"}
      spacing={4}
      py={6}
      px={2}
    >
      <HStack>
        <Avatar
          name={`${user.firstName} ${user.lastName}`}
          src={user.profilePic}
        />
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="What's happening?"
          size='sm'
        />
      </HStack>
      <HStack p={2} display={"flex"} justifyContent={"space-between"}>
        <Box></Box>
        <Button
          onClick={postHandler}
          w={32}
          bg={"primary"}
          color={"white"}
          _hover={{
            bg: useColorModeValue('secondary'),
          }}
        >
          Throttle
        </Button>
      </HStack>
    </Flex>
  );
}
