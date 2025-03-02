import React, { useState } from "react";
import {
  Button,
  Box,
  Center,
  Heading,
  Text,
  Checkbox,
  Flex,
  Divider,
  AbsoluteCenter,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Center className="bg-[url(https://res.cloudinary.com/dygn4o3nv/image/upload/v1740694422/Log-In_jwspvw.png)] h-screen bg-center bg-cover">
      <Box
        bg={"white"}
        width={"464px"}
        height={"500px"}
        borderRadius={"16px"}
        paddingY={"4"}
        paddingX={"8"}
        className="space-y-4"
      >
        <Center flexDirection={"column"} textAlign={"center"}>
          <Heading size={"lg"} fontStyle={"feather"}>
            Sign in
          </Heading>
          <Text
            fontSize={"sm"}
            fontWeight={"normal"}
            lineHeight={"20.3px"}
            color={"#645D5D"}
            marginTop={"4"}
          >
            Enter your credentials to access your account
          </Text>
        </Center>
        <Box className="space-y-3">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={"2.5"}
            width={"full"}
            height={"50px"}
            borderWidth={"thin"}
            borderRadius={"md"}
            // _hover={{bg: "#f3c8b9"}}
            cursor={"pointer"}
          >
            <FcGoogle className="text-xl" />
            <Text fontWeight={"semibold"} fontSize={"medium"} color={"#344054"}>
              Continue with Google
            </Text>
          </Flex>

          <Box position="relative" paddingY="3">
            <Divider />
            <AbsoluteCenter
              bg="white"
              px="4"
              fontSize={"sm"}
              fontWeight={"normal"}
              lineHeight={"20.3px"}
            >
              OR
            </AbsoluteCenter>
          </Box>

          {/* FORM */}
          <FormControl marginY={"1.5"}>
            <FormLabel
              fontWeight={"medium"}
              fontSize={"sm"}
              lineHeight={"20.3px"}
            >
              Email Address
            </FormLabel>
            <Input
              type="email"
              size={"lg"}
              focusBorderColor="#EB5017"
              fontSize={"sm"}
            />
          </FormControl>

          <FormControl marginY={"1.5"}>
            <FormLabel
              fontWeight={"medium"}
              fontSize={"sm"}
              lineHeight={"20.3px"}
            >
              Password
            </FormLabel>
            <InputGroup>
              <Input
                type={isPasswordVisible ? "text" : "password"}
                focusBorderColor="#EB5017"
                size={"lg"}
                fontSize={"sm"}
              />
              <InputRightElement height={"full"} marginX={"2.5"}>
                <Button
                  h="1.75rem"
                  size="sm"
                  variant={"unstyled"}
                  display={"flex"}
                  justifyContent={"center"}
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? (
                    <VscEye className="text-lg" />
                  ) : (
                    <VscEyeClosed className="text-lg" />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Box>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Checkbox>
            <Text fontWeight="medium" fontSize="12px" lineHeight="20.3px">
              Remember me for 30 days
            </Text>
          </Checkbox>
          <Link
            fontWeight="medium"
            fontSize="12px"
            lineHeight="20.3px"
            color="#EB5017"
            to="/forgot-password"
          >
            Forgot password?
          </Link>
        </Flex>
        <Button variant={"custom"} width={"full"} size={"lg"} marginTop={"5"}>
          Sign in
        </Button>
      </Box>
    </Center>
  );
};

export default SignIn;
