# Melune

Melune is a Spotify-inspired music streaming platform with real-time chat, social listening, and an admin dashboard for managing songs, albums, and artists. This project integrates AI capabilities through a fine-tuned Gemini model to enhance user interactions.

## Features

- 🎵 **Music Streaming** – Stream high-quality audio seamlessly.
- 💬 **Real-Time Chat** – Chat with friends while listening to music.
- 🎧 **Social Listening** – Sync playback with friends for a shared experience.
- 🎛️ **Admin Dashboard** – Manage songs, albums, and artists efficiently.
- 🚀 **Modern UI** – Sleek and responsive design using modern frontend frameworks.
- 🧠 **AI-Powered Interactions** – Chat with an AI assistant to get music recommendations, insights about your favorite artists, or create personalized playlists.

## Tech Stack

### Frontend

- React.js (or Next.js if applicable)
- TypeScript
- TailwindCSS
- Vite
- Zustand (State Management)

### Backend

- Node.js & Express.js
- MongoDB (Mongoose ODM)
- WebSockets (Socket.io) for real-time chat
- Cloudinary for media storage
- Node-Cron for scheduled tasks

### AI Integration

- Fine-tuned Gemini model for enhanced recommendations & interactions
- Google Generative AI

## Installation

### Prerequisites

- Node.js (>= 16.x)
- MongoDB/PostgreSQL instance

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/Abhishek-Shukla-github/Melune.git
   cd melune
   ```
2. Install dependencies:
   - Backend:
     ```sh
     cd backend
     npm install
     ```
   - Frontend:
     ```sh
     cd frontend
     npm install
     ```
3. Set up environment variables:
   - **Backend (`.env`)**
     ```sh
     PORT=YOUR_PORT
     MONGODB_URI=YOUR_MONGODB_URI
     ADMIN_EMAIL=YOUR_ADMIN_EMAIL
     CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
     CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
     CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
     NODE_ENV=development
     CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
     CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
     AI_ID=YOUR_AI_ID
     ```
   - **Frontend (`.env`)**
     ```sh
     VITE_AI_ID=YOUR_AI_ID
     VITE_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
     VITE_MODE=production
     VITE_AI_API_KEY=YOUR_AI_API_KEY
     ```
4. Start the servers:
   - Backend:
     ```sh
     cd backend
     npm run dev
     ```
   - Frontend:
     ```sh
     cd frontend
     npm run dev
     ```

## Usage

- Sign up or log in.
- Start streaming music and explore curated recommendations.
- Join or create a social listening room to listen with friends.
- Use the chat feature for real-time interactions.
- Admins can manage songs, albums, and artists from the dashboard.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

MIT License

---

## Contact

For any queries, reach out via [LinkedIn](https://www.linkedin.com/in/abhishekshukla1999/) or open an issue on GitHub.

