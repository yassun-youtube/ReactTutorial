import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";

function App() {
  const [tab, setTab] = useState('list');

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      {
        tab === 'list' ? <List /> : <Form />
      }
    </div>
  );
}

export default App;
