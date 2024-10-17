import React, { useState } from 'react';
import Weather from './components/Weather';
import { AvailableWeatherValues } from './types';

const availableValues: string[] = Object.values(AvailableWeatherValues) as string[];

function App() {
  const [variables, setVariables] = useState<string[]>([]);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const inputValues: string[] = (e.target as HTMLInputElement).value.split(' ');
    const validValues = inputValues.filter((item: string) => availableValues.includes(item));
    setVariables(validValues);
  }

  return (
    <div>
      <div>
        <ul>
          Данные для отображения:
          {Object.values(AvailableWeatherValues).map((condition) => (
            <li key={condition}>{condition}</li>
          ))}
        </ul>
        <label>
          <input style={{ width: '80%' }} type="text" placeholder='Данные о погоде через пробел' onInput={handleInputChange} />
        </label>
      </div>
      <Weather lat={55.751244} long={37.618423} variables={variables} />
    </div>
  );
}

export default App;
