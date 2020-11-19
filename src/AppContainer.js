import React from 'react';
import { ThemeContext,THEMES } from "./contexts/ThemeContext";
import { withLoading } from "./hoc/withLoading";
import App from "./App";
import { getLanguages } from "./const/languages";

const AppComponent = withLoading(App, getLanguages);

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: THEMES.dark };
  }
  toggleTheme() {
    const theme = this.state.theme === THEMES.dark ? THEMES.light : THEMES.dark;
    this.setState({ theme });
  }
  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, () => this.toggleTheme()]}>
        <AppComponent />
      </ThemeContext.Provider>
    )
  }
}
