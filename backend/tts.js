// Function to speak the given text with a custom voice
function speakTextWithCustomVoice(text, voiceName) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const selectedVoice = voices.find(voice => voice.name === voiceName);
  
  if (selectedVoice) {
    utterance.voice = selectedVoice;
    window.speechSynthesis.speak(utterance);
  } else {
    console.error('Voice not found:', voiceName);
  }
}

// Array of questions
const questions = [
  "Tell me about yourself",
  "What was your percentage in Last semester?",
  "What’s the project you have done?",
  "Why Should we Hire you?",
  "Do you have any Experience - Internship done for the same role?"
];

// Function to display and speak each question one at a time
async function askQuestions() {
  const selectedVoice = 'Google हिन्दी'; // Change voice here to the desired voice
  
  for (let i = 0; i < questions.length; i++) {
    var questionNumber = i + 1;
    const questionText = `Question ${questionNumber}: ${questions[i]}`;
    console.log(questionText);
    speakTextWithCustomVoice(questions[i], selectedVoice);
    await delay(500); // Adjust delay time (in milliseconds) as needed
  }
}

// Utility function to create a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Call the function to ask questions when the script runs
askQuestions();