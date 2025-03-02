const { GoogleGenerativeAI } = require("@google/generative-ai");
const sampleData = require('../sampleData.json')

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const handleAIRequest = async () => {  // Use 'prompt' instead of 'message'
      
     const prompt = "Create a two - three cryptic clue that describes a famous travel destination without directly naming it. The clue should be challenging yet solvable, using wordplay, historical references, or cultural hints. After the user guesses the destination, reveal an engaging description, fun facts, trivia, and surprising details about the place. Keep the clues creative, the descriptions vivid, and the facts exciting! Return the answer in a json format only curly braces no extra";

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] }); // Add the prompt here
        const response = await result.response.text(); 

        return response;
    } catch (error) {
        console.error("Error with Gemini AI:", error);
        throw new Error("AI request failed.");
    }
};

module.exports = { handleAIRequest };
