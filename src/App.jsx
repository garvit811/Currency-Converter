import { useState } from 'react'
import useCurrency from './hook/usecurrency'
import useCurrencyList from './hook/useCurrencyList'
import './App.css'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [triggerConversion, setTriggerConversion] = useState(false)

  const { currencies, error: currencyError, loading: currencyLoading } = useCurrencyList()
  const { convertedValue, error: conversionError, loading: conversionLoading } = useCurrency(
    triggerConversion ? to : null,
    triggerConversion ? from : null,
    triggerConversion ? amount : null)

  const handleConvert = () => {
    if (amount > 0 && from && to) {
      setTriggerConversion(true); // Trigger the conversion
    } else {
      alert('Please enter a valid amount and select currencies.');
    }
  };

  return (
    <>
      <div className=' bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 h-full w-full flex items-center justify-center flex-col gap-20'>
        <div className=' text-white text-center font-bold font-sans'>
          <h1 className=' text-6xl'>Currency Converter</h1>
          <h2 className=' text-4xl mt-5'>Conversion made eazy, Rates made right!!!</h2>
        </div>
        <div className=' bg-white w-8/10 h-1/3 rounded-xl flex flex-col'>
          <div className='grid grid-cols-3 h-1/2 w-full gap-4 p-4 '>
            <div className=' hover:bg-gray-50 focus:bg-gray-50 border border-gray-300 rounded-xl cursor-pointer px-4 flex flex-col'>
              <label htmlFor="amount" className=' font-semibold text-gray-500'>Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className='h-2/3 text-2xl outline-none border-none' />
            </div>
            <div className=' hover:bg-gray-50 focus:bg-gray-50 border border-gray-300 rounded-xl cursor-pointer px-4 flex flex-col'>
              
              <label htmlFor="from" className='font-semibold text-gray-500'>From</label>
              <select
                name="from"
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className='h-2/3 text-2xl outline-none border-none'
              >
                {currencyLoading ? (
                  <option>Loading...</option>
                ) : currencyError ? (
                  <option>Error loading currencies</option>
                ) : (
                  currencies.map(([code, name]) => (
                    <option key={code} value={code}>
                      {code} - {name}
                    </option>
                  ))
                )}
              </select>
            </div>

                

            <div className=' hover:bg-gray-50 focus:bg-gray-50 border border-gray-300 rounded-xl cursor-pointer px-4 flex flex-col'>
              <label htmlFor="to" className='font-semibold text-gray-500'>From</label>
              <select
                name="to"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className='h-2/3 text-2xl outline-none border-none'
              >
                {currencyLoading ? (
                  <option>Loading...</option>
                ) : currencyError ? (
                  <option>Error loading currencies</option>
                ) : (
                  currencies.map(([code, name]) => (
                    <option key={code} value={code}>
                      {code} - {name}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          <div className='grid grid-cols-3 h-1/2 w-full gap-4 p-4'>
            <div className='border border-gray-300 rounded-xl col-span-2 px-4'>
              <input
                type="Numbers"
                value={conversionLoading ? 'Converting...' : conversionError ? 'Error' : convertedValue || ''}
                className='h-full outline-none border-none text-3xl'
                readOnly />
            </div>
            <button className=' bg-blue-800 hover:bg-blue-500 cursor-pointer rounded-xl text-white text-4xl font-semibold'
              onClick={handleConvert}
            >Convert</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
