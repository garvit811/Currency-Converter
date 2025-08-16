# 🌍 Currency Converter App

A **React-based Currency Converter** that allows you to convert amounts between multiple currencies in real time using the **Frankfurter Exchange Rates API**.  
Built with **React Hooks + Tailwind CSS**, the project leverages **custom hooks** for cleaner, reusable, and maintainable code.

---

## ✨ Features
- 🔄 Convert between any two currencies
- 🌐 Real-time exchange rates from [Frankfurter API](https://www.frankfurter.dev/)
- 🎨 Responsive and modern UI powered by Tailwind CSS
- ⚡ Custom React Hooks for modular code:
  - `useCurrencyList` → Fetches available currencies
  - `useCurrency` → Handles conversion logic
- ✅ Error handling & loading states for better UX

---

## 🛠️ Tech Stack
- **React (Vite)**
- **Tailwind CSS**
- **Frankfurter API**
- **React Hooks** (`useState`, `useEffect`, custom hooks)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/garvit811/currency-converter.git
cd currency-converter
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Run the development server
```bash
npm run dev
```

---

## 📂 Project Structure
<pre>
currency-converter/
│── src/
│   ├── App.jsx                # Main App Component (UI)
│   ├── App.css                # Styling
│   ├── hook/
│   │   ├── useCurrency.js     # Hook to fetch conversion rates
│   │   └── useCurrencyList.js # Hook to fetch supported currencies
│   └── main.jsx               # React entry point
</pre>
---

## 🔧 How It Works
1. Enter an amount in the input field.
2. Select From and To currencies (fetched using useCurrencyList).
3. Click Convert to trigger API call via useCurrency.
4. The converted amount is displayed with proper loading and error handling.

---

## 🚀 Future Improvements
- 📈 Show historical exchange rate trends with charts
- 🌙 Add dark mode support
- ⭐ Save favorite currency pairs
- 📱 Make it PWA-ready for offline usage

---
