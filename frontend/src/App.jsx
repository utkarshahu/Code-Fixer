import { useEffect, useState } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import prism from 'prismjs';
import './App.css';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import axios from "axios";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);

const [review, setreview] = useState(``)


async function reviewCode() {
    const response = await axios.post("http://localhost:3000/ai/get-review",{code})  
    setreview(response.data)
}

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={20}
              style={{
                fontSize: 20,
                height: "100%",
                width: "100%",
                overflow: "auto",
                fontFamily: "monospace",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          
        </div>
      </main>
    </>
  );
}

export default App;
