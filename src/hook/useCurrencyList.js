import { useState, useEffect } from 'react';

function useCurrencyList() {
    const [currencies, setCurrencies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCurrencies = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://api.frankfurter.app/currencies');
                if (!response.ok) {
                    throw new Error('Failed to fetch currencies');
                }
                const data = await response.json();
                const currencyArray = Object.entries(data);
                setCurrencies(currencyArray);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrencies();
    }, []);

    return { currencies, error, loading };
}

export default useCurrencyList;