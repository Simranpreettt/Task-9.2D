import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';

import 'codemirror/lib/codemirror.css';  // Add CodeMirror base styles
import 'codemirror/theme/material.css';  // Optional: Add a theme like 'material'
import 'codemirror/mode/markdown/markdown';  // Enable Markdown mode

const PostQuestion = () => {
  const [content, setContent] = useState('');  // State to store the written content

  return (
    <div>
      <h2>Write Your Question</h2>
      <CodeMirror
        value={content}
        options={{
          mode: 'markdown',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setContent(value);  // Update content as user types
        }}
      />
      <h3>Preview:</h3>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default PostQuestion;
