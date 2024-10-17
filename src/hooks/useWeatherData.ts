import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import { WeatherData } from '../types';

export const useWeatherData = (lat: number, long: number, variables: string[]) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${API_URL}?latitude=${lat}&longitude=${long}&daily=${variables.join(',')}&timezone=Europe/Moscow&past_days=0`
                );

                if (!response.ok) throw new Error('Сетевая ошибка: не удалось загрузить данные');

                const json: WeatherData = await response.json();
                setWeather(json);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Неизвестная ошибка'
                setError(errorMessage);
            }
        };

        fetchData();
    }, [lat, long, variables]);

    return { weather, error };
};