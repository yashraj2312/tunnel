import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { loginUser } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link as ReactRouterLink } from "react-router-dom";
import { toast } from "react-toastify";


export function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    isRememberMe: true,
  });

  const changeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (userDetails.username === "" || userDetails.password === "") {
      toast.error("Please enter both username and password");
    } else {
      dispatch(loginUser(userDetails));
    }
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();
    setUserDetails({
      ...userDetails,
      username: "clarkkent",
      password: "clarkkent123",
    });
    dispatch(loginUser({ username: "clarkkent", password: "clarkkent123" }));
    navigate("/home");
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
          
          <Text fontSize={"lg"} color={"gray.600"}>
            {" "}
            
            
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id='username' isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type='username'
                
                onChange={changeHandler}
                value={userDetails.username}
                name='username'
              />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                
                onChange={changeHandler}
                value={userDetails.password}
                name='password'
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox
                  onChange={() =>
                    setUserDetails({
                      ...userDetails,
                      isRememberMe: !userDetails.isRememberMe,
                    })
                  }
                  value={userDetails.isRememberMe}
                  isChecked={userDetails.isRememberMe}
                >
                  Remember me
                </Checkbox>
                
              </Stack>
              <Button
                onClick={loginHandler}
                bg={"primary"}
                color={"white"}
                _hover={{
                  bg: useColorModeValue("gray.700", "gray.600"),
                }}
              >
                Log In
              </Button>
              <Button
                onClick={guestLoginHandler}
                bg={"gray.400"}
                color={"white"}
                _hover={{
                  bg: "gray.500",
                }}
              >
                Sample Login
              </Button>
              {/* <Button
                bg={"primary"}
                color={"white"}
                as={ReactRouterLink} to={'/sign-up'}
                _hover={{
                  bg: useColorModeValue("gray.700", "gray.600"),
                }}
              >
                Sign up
              </Button> */}
              <Text align={"center"}>
                Already a user?{" "}
              <Link
              align={"center"}
              as={ReactRouterLink}
              to='/sign-up'
              color={useColorModeValue("primary", "secondary")}
            >
              Sign up
            </Link>{" "}
            </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
