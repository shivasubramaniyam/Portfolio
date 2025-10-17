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

  const condition = weather.weather[0].main.toLowerCase();
  let animation = sunny;

  if (condition.includes("cloud")) animation = cloudy;
  else if (condition.includes("rain")) animation = rain;
  else if (condition.includes("storm") || condition.includes("thunder"))
    animation = storm;
  return (
    <Box p={2} borderRadius="12px" className="heading" maxW="sm" mx="auto">
      <Flex
        justify="space-between"
        align="center"
        display="flex"
        flexDir="row"
        gap="8px"
      >
        <Box w="50px" h="5S0px" background={"#7773732d"} borderRadius={"full"}>
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
