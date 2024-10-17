export type DailyWeather = {
    time: string[];
    weathercode?: number[];
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
    apparent_temperature_max?: number[];
    apparent_temperature_min?: number[];
    sunrise?: string[];
    sunset?: string[];
    precipitation_sum?: number[];
    rain_sum?: number[];
    showers_sum?: number[];
    snowfall_sum?: number[];
    precipitation_hours?: number[];
    windspeed_10m_max?: number[];
    windgusts_10m_max?: number[];
    winddirection_10m_dominant?: number[];
    shortwave_radiation_sum?: number[];
    et0_fao_evapotranspiration?: number[];
}

export type WeatherData = {
    daily: DailyWeather;
}

export enum AvailableWeatherValues {
    WeatherCode = 'weathercode',
    Temperature2mMax = 'temperature_2m_max',
    Temperature2mMin = 'temperature_2m_min',
    ApparentTemperatureMax = 'apparent_temperature_max',
    ApparentTemperatureMin = 'apparent_temperature_min',
    Sunrise = 'sunrise',
    Sunset = 'sunset',
    PrecipitationSum = 'precipitation_sum',
    RainSum = 'rain_sum',
    ShowersSum = 'showers_sum',
    SnowfallSum = 'snowfall_sum',
    PrecipitationHours = 'precipitation_hours',
    Windspeed10mMax = 'windspeed_10m_max',
    Windgusts10mMax = 'windgusts_10m_max',
    Winddirection10mDominant = 'winddirection_10m_dominant',
    ShortwaveRadiationSum = 'shortwave_radiation_sum',
    Et0FaoEvapotranspiration = 'et0_fao_evapotranspiration',
}