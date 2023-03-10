import {
  Box,
  Stack,
  Image,
  Text,
  Heading,
  HStack,
  VStack,
  Button,
  Center,
  Spinner,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/Home.module.css";
import ProductAddToCart from "@/components/cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLatestProducts } from "@/redux/baby/baby.action";
import Home from ".";
import { AlertBox } from "@/components/Alert";
const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.BabyProducts.data);
  let loading = useSelector((store) => store.BabyProducts.loading);
  useEffect(() => {
    dispatch(getLatestProducts());
  }, [dispatch]);
  return (
    <ErrorBoundary fallback={<AlertBox />}>
      {!loading ? (
        <Stack pt={"60px"}>
          {/* for building image portion */}
          <Box position={"relative"} width="100%" zIndex={"1"}>
            <Image
              src={
                "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/car_desktop_011723_slot2.jpg?yocs=4G_"
              }
              width="100%"
            />
            <HStack
              position={"absolute"}
              width="50%"
              zIndex={"100"}
              top={{ lg: "180px", md: "90px", base: "25px" }}
              right={{ lg: "20px", md: "10px", base: "5px" }}
            >
              <Box>
                <Heading
                  fontSize={{
                    lg: "70px",
                    md: "60px",
                    sm: "40px",
                    base: "20px",
                  }}
                >
                  Diaper's <span style={{ color: "#0EACD8" }}> Sale</span>
                </Heading>
                <Text
                  fontSize={{
                    lg: "70px",
                    md: "60px",
                    sm: "40px",
                    base: "20px",
                  }}
                  fontWeight="bold"
                >
                  is live
                </Text>
                <Text
                  fontFamily={("League Spartan", "sans-serif")}
                  fontWeight="bold"
                  fontSize={{
                    lg: "25px",
                    md: "20px",
                    sm: "10px",
                    base: "10px",
                  }}
                >
                  Up To <span style={{ color: "#0EACD8" }}>50%</span> OFF
                </Text>
              </Box>
            </HStack>
          </Box>
          {/* for buttons */}
          <Stack width={"100%"}>
            <HStack
              bgColor={"#0EACD8"}
              justifyContent="center"
              padding={"20px"}
              gap="20px"
              display={"grid"}
              gridTemplateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(4,1fr)",
                lg: "repeat(6,1fr)",
              }}
            >
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Baby"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                BABY BOY
              </Button>
              </Link>
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Baby"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                BABY GIRL
              </Button>
              </Link>
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Toddlers"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                TODDLER BOY
              </Button>
              </Link>
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Toddlers"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                TODDLER GIRL
              </Button>
              </Link>
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Kids"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                GIRL
              </Button>
              </Link>
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Kids"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                BOY
              </Button>
              </Link>
            </HStack>
          </Stack>
          {/* for button images */}
          <Stack width={"100%"}>
            <HStack
              justifyContent="center"
              padding={"20px"}
              gap="20px"
              flexWrap="wrap"
            >
              <VStack>
                <Image
                  src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/csfaces/car_csfaces_blue_bg_desktop.png?yocs=4E_4G_"
                  alt="babyboy"
                />
                <Text fontWeight={"600"}>BabyGirl</Text>
              </VStack>

              <VStack>
                <Image
                  src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/csfaces/car_csfaces_blue_bb_desktop.png?yocs=4E_4G_"
                  alt="babygirl"
                />
                <Text fontWeight={"600"}>BabyBoy</Text>
              </VStack>
              <VStack>
                <Image
                  src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/csfaces/car_csfaces_blue_tg_desktop.png?yocs=4E_4G_"
                  alt="Toddlerboy"
                />
                <Text fontWeight={"600"}>ToddlerGirl</Text>
              </VStack>
              <VStack>
                <Image
                  src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/csfaces/car_csfaces_blue_tb_desktop.png?yocs=4E_4G_"
                  alt="Toddlergirl"
                />
                <Text fontWeight={"600"}>ToddlerBoy</Text>
              </VStack>
              <VStack>
                <Image
                  src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/csfaces/car_csfaces_blue_g_desktop.png?yocs=4E_4G_"
                  alt="kidgirl"
                />
                <Text fontWeight={"600"}>KidGirl</Text>
              </VStack>
              <VStack>
                <Image
                  src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/csfaces/car_csfaces_blue_b_desktop.png?yocs=4E_4G_"
                  alt="kidboy"
                />
                <Text fontWeight={"600"}>KidBoy</Text>
              </VStack>
            </HStack>
          </Stack>

          {/* for shop favourites */}
          <Stack width={"100%"} paddingTop="40px" gap={"40px"}>
            <Heading textAlign={"center"} fontSize="50px" color={"#0EACD8"}>
              SHOP OUR FAVES
            </Heading>
            <HStack justifyContent="center" gap={"20px"} flexWrap="wrap">
              <Image
                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/shopourfaves/car_0117_shopourfaves_HP_newarrivals.png?yocs=4E_4G_"
                alt="favourites"
                width={"200px"}
              />
              <Image
                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.282/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/shopourfaves/car_0117_shopourfaves_HP_pjs.png?yocs=4E_4G_"
                alt="favourites"
                width={"200px"}
              />
              <Image
                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.282/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/shopourfaves/car_0117_shopourfaves_HP_shoes.png?yocs=4E_4G_"
                alt="favourites"
                width={"200px"}
              />
              <Image
                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.282/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/shopourfaves/car_0117_shopourfaves_HP_tops.png?yocs=4E_4G_"
                alt="favourites"
                width={"200px"}
              />
              <Image
                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.282/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/shopourfaves/car_0117_shopourfaves_HP_bottoms.png?yocs=4E_4G_"
                alt="favourites"
                width={"200px"}
              />
              <Image
                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.282/content/dam/ecomm/ec_creative_carters/2023/cadence/011723/shopourfaves/car_0117_shopourfaves_HP_clearance.png?yocs=4E_4G_"
                alt="favourites"
                width={"200px"}
              />
            </HStack>
          </Stack>

          {/* for features */}
          <HStack
            overflowX={"hidden"}
            pt="40px"
            flexWrap={"wrap"}
            alignItems="center"
            justifyContent={"center"}
          >
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/co_tri_brand/2022/q1/service-banner/serviceMat_Q1_2022_1.jpg?yocs=4E_4G_"
              alt="car"
              width={"373px"}
            />
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/co_tri_brand/2022/q1/service-banner/serviceMat_Q1_2022_2.jpg?yocs=4E_4G_"
              alt="car"
              width={"373px"}
            />
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/co_tri_brand/2022/q1/service-banner/serviceMat_Q1_2022_3.jpg?yocs=4E_4G_"
              alt="car"
              width={"373px"}
            />
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/co_tri_brand/2022/q1/service-banner/serviceMat_Q1_2022_4.jpg?yocs=4E_4G_"
              alt="car"
              width={"373px"}
            />
          </HStack>
          <Stack flexDirection={"column"} pt="50px">
            <Heading textAlign={"center"} fontWeight="600">
              Don't miss these top trends
            </Heading>
            <HomeSlides data={data} />
          </Stack>
          <LoveCarters />
        </Stack>
      ) : (
        <Stack mt="160px" justifyContent={"center"} alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Stack>
      )}
    </ErrorBoundary>
  );
};
export default HomePage;

function HomeSlides({ data }) {
  return (
    <Swiper
      breakpoints={{
        280: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide>
        <ProductAddToCart/>
      </SwiperSlide>
      <SwiperSlide>
      <ProductAddToCart/>
        </SwiperSlide>
      <SwiperSlide>
      <ProductAddToCart/>
      </SwiperSlide>
      <SwiperSlide>
      <ProductAddToCart/>
      </SwiperSlide> */}

      {data?.map((el) => (
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={el.id}
        >
          <Link
            color={useColorModeValue("gray.700", "white.700")}
            _hover={{
              textDecoration: "none",
            }}
            href={`/Baby/${el.id}`}
          >
            <ProductAddToCart key={el.id} data={el} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function LoveCarters() {
  return (
    <Stack pt={"4rem"} gap="30px">
      <Center flexDirection={"column"}>
        <Heading>Show us how you</Heading>
        <Heading>
          <span style={{ color: "#0EACD8" }}>#lovecarters</span>
        </Heading>
        <Text fontSize={"20px"} textAlign="center">
          And follow our new budding brand @LittlePlanet
        </Text>
      </Center>

      <HStack justifyContent={"center"} flexWrap="wrap">
        <Image
          src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjY5MjEyNzIxLjU2MjgzNjI3MDk3Mi5qcGVn.jpg?w=640&h=640&fit=cover"
          alt="image"
          width={"350px"}
        />
        <Image
          src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjkwODE0NjY2MzkzNC5qcGVn.jpg?w=640&h=640&fit=cover"
          alt="image"
          width={"350px"}
        />
        <Image
          src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjM5MjYzMzIxMDE5LmpwZWc=.jpg?w=640&h=640&fit=cover"
          alt="image"
          width={"350px"}
        />
        <Image
          src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk3LjI0ODUyMDk0ODE5OS5qcGVn.jpg?w=640&h=640&fit=cover"
          alt="image"
          width={"350px"}
        />
      </HStack>
    </Stack>
  );
}
