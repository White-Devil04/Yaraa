import React, { useState, useEffect, useRef } from 'react';
import SpeechToText from './SpeechToText';

function ChatApp() {
  const questions = [
    "Tell me about yourself",
    "What was your percentage in Last semester?",
    "What’s the project you have done?",
    "Why Should we Hire you?",
    "Do you have any Experience - Internship done for the same role?"
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const hasSentInitialQuestion = useRef(false);

  useEffect(() => {
    if (!hasSentInitialQuestion.current && messages.length === 0) {
      sendQuestion(0);
      hasSentInitialQuestion.current = true;
    }
  }, [messages]); // Depend on messages to ensure the effect only runs when messages change

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].isUserMessage) {
      setCurrentQuestionIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < questions.length) {
          sendQuestion(nextIndex);
        }
        return nextIndex;
      });
    }
  }, [messages]);

  const sendQuestion = (index) => {
    if (index < questions.length) {
      const question = {
        text: questions[index],
        isUserMessage: false, // false indicates this is a question from the interviewer
      };
      setMessages(messages => [...messages, question]);
    }
  };

  const handleSpeechToText = (text) => {
    setMessages((prevMessages) => [...prevMessages, { text, isUserMessage: true }]);
  };
  const handleOpenSTTDialog = () => {
    // Use the SpeechRecognition API to transcribe the user's speech
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      // Get the transcribed text from the event
      const text = event.results[0][0].transcript;
      // Add the transcribed text as a user message
      handleSpeechToText(text);
    };
    // Start the speech recognition
    recognition.start();
  };

  const downloadCSV = () => {
    const csvContent = messages.map((message, index) => {
      const question = index < questions.length ? questions[index] : '';
      return `"${question}","${message.text}"`;
    }).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'messages.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index} className={message.isUserMessage ? 'user-message' : 'received-message'}>
            {message.text}
          </p>
        ))}
      </div>
      <SpeechToText onTranscription={handleSpeechToText} /> {/* Use the SpeechToText component with the onTranscription prop */}
      <button onClick={downloadCSV}>Download CSV</button>
    </div>
  );
}

export default ChatApp;