import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {FiShoppingCart} from "react-icons/fi"
const Links = ["Baby", "Toddlers", "Kids"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    color={useColorModeValue("gray.700", "white.700")}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "white.700"),
    }}
    href={`/${children}`}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [Auth, setAuth] = useState(false);
  const router = useRouter()
  const AuthData = useSelector((store) => store.AuthUser.loginData);
  // const firstName = AuthData[0].firstName.split(" ")
  let Fname;
  if (AuthData != null) {
    const name = AuthData[0].firstName.split("");
    Fname = name[0];
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (AuthData != null) {
      setAuth(true);
    } else {
      setAuth(false);
    }

    return;
  }, [AuthData]);
  return (
    <>
      <Box
        px={4}
        width="full"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        position={"fixed"}
        top="0"
        zIndex={"2000"}
        bgColor={useColorModeValue("white", "gray.700")}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link href="/">
                <Image
                  src="/Diapers-logo.png"
                  width={150}
                  height={150}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              fontWeight="600"
            >
              {Links.map((link) => (
                <NavLink key={link} children={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap="20px">
          <HStack>
            <Link href="/Cart">
              <FiShoppingCart fontSize={"25px"}/>
              </Link>
            </HStack>
            <HStack>
              <Button onClick={toggleColorMode} mr="1rem">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </HStack>
            {Auth ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} name={Fname} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Orders</MenuItem>
                  <MenuItem onClick={()=>router.push("/Cart")}>Cart</MenuItem>
                  <MenuItem>whislist</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => setAuth(false)}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link
                href={"/Signup"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
              >
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.400"}
                  _hover={{
                    bg: "white.300",
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} href={link}>
                  {link}
                </NavLink>
              ))}
              {!Auth?(<Link href="/Signup" width={"fit-content"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
              >
                <Button width={"fit-content"} variant="outline">
                  Signup
                </Button>
              </Link>):null}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
