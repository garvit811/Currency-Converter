import React, {useState, useEffect} from "react";

function useCurrency(to, from, amount){
    const [convertedValue, setConvertedValue] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        if (!to || !from) return;

    const fetchConversion = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch conversion rates");
        }

        const data = await response.json();
        const rate = data.rates[to];
        setConvertedValue(rate * amount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
      };
  
      fetchConversion();
    }, [to, from, amount]);

    return {convertedValue, error, loading};
}

export default useCurrency;