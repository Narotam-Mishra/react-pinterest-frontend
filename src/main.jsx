import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './routes/homePage/HomePage.jsx';
import CreatePage from './routes/createPage/CreatePage.jsx';
import PostPage from './routes/postPage/PostPage.jsx';
import AuthPage from './routes/authPage/AuthPage.jsx';
import ProfilePage from './routes/profilePage/ProfilePage.jsx';
import SearchPage from './routes/searchPage/SearchPage.jsx';
import MainLayout from './routes/layouts/MainLayout.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/pin/:id" element={<PostPage />} />
            <Route path="/:username" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
