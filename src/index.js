import '@fortawesome/fontawesome-free/css/all.css';
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './components/common/ThemeContext';
import './index.css';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/ai-content/", async (req, res) => {
  
  const {
    prompt,
    temperature,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty,
  } = req.body;

  const openAPICall = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
     
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-instruct",
      prompt: prompt,
      temperature: temperature,
      max_tokens: max_tokens,
      top_p: top_p,
      frequency_penalty: frequency_penalty,
      presence_penalty: presence_penalty,
    }),
  });

  const content = await openAPICall.json();
  res.status(201).json({ output: content });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const container = document.getElementById('root');

createRoot(container).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
