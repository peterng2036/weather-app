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

export default async function Home() {
  const data = await getWeatherData()
  return (
    <div className="w-screen h-screen bg-gray-200">
      <div className="flex items-center justify-center flex-col w-1/2">
        <div className="bg-gray-600 text-white rounded-full w-1/2 px-4 py-2">
          <p>{data.location.region}, {data.location.country}</p>
        </div>
        <img src={data.current.condition.icon} alt="" />
        <p>{data.current.temp_c}</p>
        <p>{data.current.condition.text}</p>
      </div>
    </div>
  );
}
