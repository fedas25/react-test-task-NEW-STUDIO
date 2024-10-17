import { DailyWeather } from "../types";

type Props = {
    weather: DailyWeather | null;
    variables: string[];
}

export const Layout = ({ weather, variables }: Props) => {
    return (
        <>
            <thead>
                <tr>
                    <td>date</td>
                    {variables.map(variable =>
                        <td key={variable}>
                            {variable}
                        </td>
                    )}
                </tr>
            </thead>
            <tbody>
                {weather && weather.time.map((time) =>
                    <tr>
                        <td key={time}>
                            {time}
                        </td>
                    </tr>
                )}
            </tbody>
        </>
    )
}
