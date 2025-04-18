import axios from "axios";
import { useState, useEffect } from "react";

interface WeatherInfo {
  [key: number]: {
    temp: number;
    description: string;
    icon: string;
    time: string;
  };
}

interface UseSidebarReturn {
  weatherData: WeatherInfo;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherInfo>>;
}

const useSidebar = (locations: any[]): UseSidebarReturn => {
  const [weatherData, setWeatherData] = useState<WeatherInfo>({});

  const fetchWeather = async (location: any) => {
    const apiKey = "947349ad2a19193d1255d2fbc26824af";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location.state}&units=metric&appid=${apiKey}`;
    try {
      const res = await axios.get(url);
      const data = res.data;
      const time = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).format(new Date());

      return {
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        time,
      };
    } catch (err) {
      console.error(`Error fetching weather for ${location.name}`, err);
      return null;
    }
  };

  useEffect(() => {
    const fetchAllWeather = async () => {
      const newWeatherData: WeatherInfo = {};
      for (const loc of locations) {
        const weather = await fetchWeather(loc);
        if (weather) {
          newWeatherData[loc.id] = weather;
        }
      }
      setWeatherData(newWeatherData);
    };

    if (locations.length > 0) {
      fetchAllWeather();
    }
  }, [locations]);

  return { weatherData, setWeatherData };
};

export { useSidebar };
