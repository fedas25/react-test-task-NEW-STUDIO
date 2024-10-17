/* tslint:disable */
// @ts-nocheck
import React, { useEffect, useMemo, useState } from 'react';
import { WeatherData } from '../types';
import { useWeatherData } from '../hooks/useWeatherData';

type Props = {
    lat: number;
    long: number;
    variables: string[];
}

const Weather: React.FC<Props> = ({ lat, long, variables }) => {
    const { weather, error } = useWeatherData(lat, long, variables);

    if (error) return <div>Ошибка: {error}</div>

    return (
        <table style={{ width: '100%' }}>
            <thead>
                <tr>
                    <td>date</td>
                    {variables.map((variable) => (
                        <td key={variable}>{variable}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {weather && weather.daily.time.map((time, index) => {
                    const weatherDataForDate = weather.daily;

                    return (
                        <tr key={time}>
                            <td>{time}</td>
                            {variables.map((variable) => {
                                const variableValue = weatherDataForDate[variable]?.[index] ?? 'NULL';

                                return (
                                    <td key={variable}>
                                        {variableValue}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Weather;