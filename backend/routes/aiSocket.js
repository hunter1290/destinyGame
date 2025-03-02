const { handleAIRequest } = require('../controllers/aiController');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on('ai_request', async (data) => {
            try {
                const response = await handleAIRequest(data.message);
                socket.emit('ai_response', response);
            } catch (error) {
                console.error("Gemini AI Error:", error);
                socket.emit('ai_response', "Error processing request.");
            }
        });

        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};
