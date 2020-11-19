import { useState } from 'react';
import { ThemeContext,THEMES } from "./contexts/ThemeContext";
import { withLoading } from "./hoc/with-loading";
import App from "./App";
import { getLanguages } from "./const/languages";

const AppComponent = withLoading(App, getLanguages)

export const AppContainer = () => {
  const [theme, setTheme] = useState(THEMES.dark);

  const toggleTheme = () => {
    const nextTheme = (theme === THEMES.dark) ? THEMES.light : THEMES.dark;
    setTheme(nextTheme);
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <AppComponent />
    </ThemeContext.Provider>
  )
}
