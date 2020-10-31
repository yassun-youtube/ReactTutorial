import React from 'react';
import { List } from "./List";

class App extends React.Component {
  render() {
    return (
      <div>
        クラスコンポーネントにしてみました。
        <List title="取り扱い言語一覧" />
      </div>
    )
  }
}

export default App;
