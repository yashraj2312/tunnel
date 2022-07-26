import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { signupUser } from "./authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


export function Signup() {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      userDetails.firstName === "" ||
      userDetails.lastName === "" ||
      userDetails.username === "" ||
      userDetails.password === ""
    ) {
      toast.error("Please enter all the fields");
    } else if (userDetails.password !== userDetails.confirmPassword) {
      toast.error("Password and confirm password doesn't match");
    } else {
      dispatch(signupUser(userDetails));
    }
  };

  return (
    <Flex
      minH={"calc(100vh - 80px)"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id='firstName' isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type='text'
                    onChange={changeHandler}
                    value={userDetails.firstName}
                    name='firstName'
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='lastName' isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type='text'
                    onChange={changeHandler}
                    value={userDetails.lastName}
                    name='lastName'
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id='username' isRequired>
              <FormLabel>username</FormLabel>
              <Input
                type='test'
                onChange={changeHandler}
                value={userDetails.username}
                name='username'
              />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={changeHandler}
                  value={userDetails.password}
                  name='password'
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        password: !prev.password,
                      }))
                    }
                  >
                    {showPassword.password ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Confirm password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={changeHandler}
                  value={userDetails.confirmPassword}
                  name='confirmPassword'
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        confirmPassword: !prev.confirmPassword,
                      }))
                    }
                  >
                    {showPassword.confirmPassword ? (
                      <ViewIcon />
                    ) : (
                      <ViewOffIcon />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText='Submitting'
                size='lg'
                bg={"primary"}
                color={"white"}
                _hover={{
                  bg: useColorModeValue("gray.700", "gray.600"),
                }}
                onClick={handleSignup}
              >
                Create Account
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link
                  as={ReactRouterLink}
                  to={'/login'}
                  color={useColorModeValue("primary", "secondary")}
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
