"use client";
import { useEffect, useState } from "react";
import { Box, Flex, Text, Spinner, useBreakpointValue } from "@chakra-ui/react";
import Lottie from "lottie-react";


import sunny from "@/public/lottie/Sunny.json";
import cloudy from "@/public/lottie/Clouds.json";
import rainy from "@/public/lottie/rainy.json";
import storm from "@/public/lottie/storm.json";


interface WeatherData {
  name: string;
  weather: {
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
  };
}


export default function WeatherAPI() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const responsiveFontSize = useBreakpointValue({
    base: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  });

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        const data = await res.json();

        if (res.ok) {
          setWeather(data as WeatherData);
        } else {
          setError(data.message || "Failed to fetch weather");
        }
      } catch (err) {
        console.error("Weather fetch error:", err);
        setError("Failed to fetch weather at this time");
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        () => {
          setError("Location permission denied. Showing default location.");
          fetchWeather(12.9716, 77.5946); 
        }
      );
    } else {
      setError("Geolocation not supported by your browser.");
      fetchWeather(12.9716, 77.5946);
    }
  }, []);

  if (loading)
    return (
      <Flex justify="center" align="center" p={4}>
        <Spinner size="lg" color="blue.400" />
      </Flex>
    );

  if (error && !weather)
    return (
      <Text color="red.400" textAlign="center">
        {error}
      </Text>
    );

  if (!weather) return null;

  const condition = weather.weather[0].main.toLowerCase();
  let animation: object = sunny;

  if (condition.includes("cloud")) animation = cloudy;
  else if (condition.includes("rain")) animation = rainy;
  else if (condition.includes("storm") || condition.includes("thunder"))
    animation = storm;

  return (
    <Box p={2} borderRadius="12px" className="heading" maxW="sm" mx="auto">
      <Flex justify="space-between" align="center" gap="8px">
        <Box w="50px" h="50px" bg="#7773732d" borderRadius="full">
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
