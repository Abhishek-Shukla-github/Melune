import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import MainLayout from "./layout/MainLayout";
import ChatPage from "./pages/chat/ChatPage";
import AlbumPage from "./pages/album/AlbumPage";
function App() {

  return (
    <>
      <Routes>
        <Route path="/auth-callback" element={<AuthCallbackPage />}/>
      
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/chat" element={<ChatPage />}/>
          <Route path="/albums/:id" element={<AlbumPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
