// server.js
const corsAnywhere = require('cors-anywhere');

const PORT = process.env.PORT || 8000;

// Start the CORS Anywhere server
corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeaders: [], // No required headers
  removeHeaders: [] // No headers to remove
}).listen(PORT, () => {
  console.log(`CORS Anywhere server is running on port ${PORT}`);
});
