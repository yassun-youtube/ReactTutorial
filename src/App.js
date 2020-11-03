import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import styled from 'styled-components';
import { getLanguages } from "./const/languages";
import { withLoading } from "./hoc/with-loading";
import { Header } from "./Header";

function App({ data }) {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(data);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  };

  return (
    <div>
        <Header tab={tab} setTab={setTab} />
        {
          tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang}/>
        }
    </div>
  );
}

export default withLoading(App, getLanguages);
