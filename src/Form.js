import { useState } from 'react';

export const Form = () => {
  const [text, setText] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log(`submitForm(${text})`);
  }

  return (
    <div>
      <h4>新しい言語の追加</h4>
      <form onSubmit={submitForm}>
        <div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <button>追加</button>
        </div>
      </form>
    </div>
  )
}
