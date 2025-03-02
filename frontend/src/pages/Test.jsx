import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

function Test() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    useEffect(() => {
        socket.on("ai_response", (data) => {
            console.log("Socket Connected");
             
            setResponse(data);
        });

        socket.emit("ai_request", { message: "Give me a place" });

        return () => {
            socket.off("ai_response");
        };
    }, []);

    const sendMessage = () => {
        socket.emit("ai_request", { message });
        setMessage("");
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>🌍 Globetrotter AI</h2>
            
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask Gemini AI..."
                    style={styles.input}
                />
                <button onClick={sendMessage} style={styles.button}>Send</button>
            </div>

            <div style={styles.responseContainer}>
                <h3>🤖 AI Response:</h3>
                <pre style={styles.responseText}>{response}</pre>
            </div>
        </div>
    );
}

export default Test;

// Inline CSS styles
const styles = {
    container: {
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
    },
    heading: {
        textAlign: "center",
        color: "#333",
    },
    inputContainer: {
        display: "flex",
        gap: "10px",
        marginBottom: "15px",
    },
    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px 15px",
        backgroundColor: "#4c8bf5",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.3s ease",
    },
    responseContainer: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        border: "1px solid #ddd",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    },
    responseText: {
        whiteSpace: "pre-wrap", // Ensures formatting is preserved
        wordWrap: "break-word",
        fontSize: "14px",
        lineHeight: "1.5",
        color: "#444",
    },
};
