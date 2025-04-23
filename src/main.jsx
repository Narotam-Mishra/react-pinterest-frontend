import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from './routes/layouts/MainLayout.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// implementing lazy loading for each component
const HomePage = React.lazy(() => import("./routes/homePage/HomePage.jsx"));
const CreatePage = React.lazy(() => import("./routes/createPage/CreatePage.jsx"));
const PostPage = React.lazy(() => import("./routes/postPage/PostPage.jsx"));
const AuthPage = React.lazy(() => import("./routes/authPage/AuthPage.jsx"));
const ProfilePage = React.lazy(() => import("./routes/profilePage/ProfilePage.jsx"));
const SearchPage = React.lazy(() => import("./routes/searchPage/SearchPage.jsx"));

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
