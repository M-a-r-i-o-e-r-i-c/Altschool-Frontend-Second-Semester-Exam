import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import CounterTwo from "./Pages/CounterTwo";
import ErrorPage from "./Pages/ErrorPage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error">
          <h1>Something went wrong.</h1>
          <p>Please check the console for more information.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className="App" id={theme}>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/countertwo"
              element={
                <ErrorBoundary>
                  <CounterTwo />
                </ErrorBoundary>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
