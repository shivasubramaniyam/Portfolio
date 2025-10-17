// ca04174d9240464f90cf6a19ca61e59f;
"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import sunny from "@/public/lottie/Sunny.json";
import cloudy from "@/public/lottie/Clouds.json";
import rainy from "@/public/lottie/rainy.json";
import storm from "@/public/lottie/storm.json";
export default function WeatherAPI() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const city = "bangalore";
  const responsiveFontSize = useBreakpointValue({
    base: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  });
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
        );

        const data = await res.json();
        if (res.ok) setWeather(data);
        else setError(data.message);
      } catch (err) {
        setError("Failed to fetch weather at this time");
      }
    };
    fetchWeather();
  }, []);

  if (error)
    return (
      <Text color="red.400" textAlign="center">
        Error: {error}
      </Text>
    );

  if (!weather)
    return (
      <Flex justify="center" align="center" p={4}>
        <Spinner size="lg" color="blue.400" />
      </Flex>
    );

  //   const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const condition = weather.weather[0].main.toLowerCase();
  let animation = sunny;

  if (condition.includes("cloud")) animation = cloudy;
  else if (condition.includes("rain")) animation = rain;
  else if (condition.includes("storm") || condition.includes("thunder"))
    animation = storm;
  return (
    <Box
      //   bg="gray.700"
      p={2}
      borderRadius="12px"
      //   boxShadow="xl"
      maxW="sm"
      mx="auto"
      //   _hover={{ transform: "scale(1.03)", transition: "0.3s" }}
    >
      <Flex
        justify="space-between"
        align="center"
        display="flex"
        flexDir="row"
        gap="8px"
      >
        <Box
          w="50px"
          h="5S0px"
          background={"#7773732d"}
          borderRadius={"full"}
          //   zIndex={2}
        >
          <Lottie animationData={animation} loop autoplay />
        </Box>
        <Box>
          <Text fontSize={responsiveFontSize} fontWeight="bold">
            {weather.name}
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} mt={1}>
            {weather.main.temp}°C - {weather.weather[0].description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
// mongodb+srv://shiva_2003:<db_password>@shivas-cluster.yqtctby.mongodb.net/?retryWrites=true&w=majority&appName=shivas-cluster
