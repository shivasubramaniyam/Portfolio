"use client";
import { useEffect, useState } from "react";
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
          // silently fallback to Bangalore
          fetchWeather(12.9716, 77.5946);
        }
      );
    } else {
      // silently fallback to Bangalore
      fetchWeather(12.9716, 77.5946);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (error && !weather) {
    return <p className="text-center text-sm text-destructive">{error}</p>;
  }

  if (!weather) return null;

  const condition = weather.weather[0].main.toLowerCase();
  let animation: object = sunny;

  if (condition.includes("cloud")) animation = cloudy;
  else if (condition.includes("rain")) animation = rainy;
  else if (condition.includes("storm") || condition.includes("thunder"))
    animation = storm;

  return (
    <div className="flex items-center gap-3 rounded-xl p-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <Lottie animationData={animation} loop autoplay className="h-10 w-10" />
      </div>
      <div>
        <p className="text-sm font-bold">{weather.name}</p>
        <p className="text-xs text-muted-foreground">
          {weather.main.temp}°C - {weather.weather[0].description}
        </p>
      </div>
    </div>
  );
}
