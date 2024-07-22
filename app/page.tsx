import searchIcon from "../public/search.svg";
import Image from 'next/image';
import { Roboto_Flex } from 'next/font/google'
import LocationSearchInput from "@/components/LocationSearchInput/LocationSearchInput";

type Location = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

type Condition = {
  text: string;
  icon: string;
  code: number;
}

type CurrentWeather = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

type WeatherData = {
  location: Location;
  current: CurrentWeather;
}

const getWeatherData = async () => {
  const res = await fetch('http://api.weatherapi.com/v1/forecast.json?key=d9b1336d72774238b9940825242007&q=Tokyo&days=1');
  const data = await res.json();
  return data as WeatherData;
}

const getFormattedDateString = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}-${date.getDay() < 10 ? '0' + date.getDay() : date.getDay()}`
}

const getDayOfWeek = (date: Date) => {
  switch (date.getDay()) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      break;
  }
}
const roboto = Roboto_Flex({ subsets: ['latin'] })

export default async function Home() {
  const data = await getWeatherData();
  const now = new Date();
  return (
    <main className={`w-screen h-screen  flex ${roboto.className}`}>
      <div className="w-4/12 h-100 p-12 flex flex-col items-center">

        <LocationSearchInput region={data.location.region} country={data.location.country}></LocationSearchInput>

        <img src={data.current.condition.icon} alt="" />

        <p className="text-8xl">{data.current.temp_c}°C</p>

        <p>{data.current.condition.text}</p>

        <div className="bg-gray-300 w-5/6 h-1 rounded-full">
        </div>

        <p>{getFormattedDateString(now)}</p>

        <p className="text-2xl">{getDayOfWeek(now)}</p>

        <p className="text-5xl">{data.location.region}</p>

      </div>

      <div className="w-8/12 h-100 bg-gray-200"></div>

    </main>
  );
}
