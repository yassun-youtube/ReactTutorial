import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";

function App() {
  const [description, setDescription] = useState('クリック前の表示');
  const [tab, setTab] = useState('list');

  const changeDescription = () => {
    setDescription('クリック後の表示です。')
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      { description }
      {
        tab === 'list' ? <List title="取り扱い言語一覧"/> : <Form />
      }
      <button onClick={changeDescription}>ボタン</button>
    </div>
  );
}

export default App;
