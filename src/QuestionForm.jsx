import React, { useState } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript'; 
import './QuestionForm.css';

function QuestionForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [code, setCode] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'questions'), {
        title,
        description,
        tags,
        code,
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      setTitle('');
      setDescription('');
      setTags('');
      setCode('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Form className="question-form" onSubmit={handleSubmit}>
      <Form.Field>
        <label>Title</label>
        <input
          placeholder="Start your question with how, what, why, etc."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Describe your problem</label>
        <TextArea
          placeholder="Describe your problem"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <input
          placeholder="Add up to 3 tags, e.g., Java, React"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </Form.Field>

      <Form.Field>
        <label>Code</label>
        <CodeMirror
          value={code}
          options={{
            mode: 'javascript', 
            theme: 'default',
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            setCode(value);
          }}
        />
      </Form.Field>

      <Button type="submit">Post</Button>

      <h3>Markdown Preview:</h3>
      <ReactMarkdown>{`${description}\n\n\`\`\`javascript\n${code}\n\`\`\``}</ReactMarkdown> 
    </Form>
  );
}

export default QuestionForm;
