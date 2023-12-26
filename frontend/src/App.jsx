// React Frontend with Enhanced Webhooks
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    try {
      // Validate user input
      if (!userInput.trim()) {
        console.error("Please enter a message.");
        return;
      }

      const response = await axios.post("http://localhost:3001/webhook", {
        message: userInput,
        // Include additional payload fields (e.g., senderID, timestamp)
        senderID: 123,
        timestamp: new Date().toISOString(),
      });

      // Display server's response
      setMessage(response.data);
    } catch (error) {
      // Handle errors gracefully
      console.error("Error sending message:", error.message);
      setMessage("Error sending message. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1>WEBHOOKS</h1>

      {/* Form for user input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <label>
          Enter Message:
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
        <button type="submit">Send Message</button>
      </form>

      {/* Display server's response */}
      <p>{message}</p>
    </div>
  );
}

export default App;
