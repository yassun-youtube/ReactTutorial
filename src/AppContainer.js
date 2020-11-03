import React from 'react';
import { withLoading } from "./hoc/withLoading";
import { getLanguages } from "./const/languages";
import { ThemeContext,THEMES } from "./contexts/ThemeContext";
import { App } from "./App";

const AppComponent = withLoading(App, getLanguages);

export class AppContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = { theme: THEMES.dark };
  }
  toggleTheme() {
    console.log('toggleTheme')
    const theme = (this.state.theme === THEMES.dark) ? THEMES.light : THEMES.dark;
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, () => this.toggleTheme()]}>
        <AppComponent />
      </ThemeContext.Provider>
    )
  }
}
