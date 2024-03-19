/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';

const Holiday: React.FC = () => {
  const [holidays, setHolidays] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch(
          'https://date.nager.at/Api/v2/NextPublicHolidays/US',
        );

        if (!response.ok) {
          throw new Error('Failed to fetch holidays');
        }

        const data = await response.json();

        setHolidays(data);
      } catch (error: any) {
        setError(error);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <div>
      <h1>Holiday</h1>
      {error && <div>{error.message}</div>}
      <div>
        {holidays.map((holiday: any) => (
          <div key={holiday.date}>{holiday.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Holiday;
