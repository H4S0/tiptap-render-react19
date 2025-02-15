import React from 'react';
import { TipTapRenderer } from 'tiptap-react-render';

const jsonData = {
  type: 'doc',
  content: [
    { type: 'paragraph', content: [{ type: 'text', text: 'Hello, TipTap!' }] },
    {
      type: 'heading',
      attrs: { level: 2 },
      content: [{ type: 'text', text: 'Welcome to TipTap Renderer' }],
    },
  ],
};

const App = () => {
  return (
    <div>
      <h1>TipTap Renderer Example</h1>
      <TipTapRenderer content={jsonData} />
    </div>
  );
};

export default App;
