# SnapApp - A Pinterest-like Photo Sharing Application (Frontend)

![SnapApp Banner](https://via.placeholder.com/800x200?text=SnapApp:+Share+Your+Visual+Stories)

## 📌 Overview

A modern **Pinterest-inspired photo-sharing frontend application**, built with **React, Tailwind CSS, and Vite**. This is the **frontend** for a full-stack MERN application, enabling users to upload, explore, and interact with images in a clean, Pinterest-like interface.

🔗 **[View Live Demo](https://snapapp-react-frontend.netlify.app/)**

## ✨ Frontend Features

- **User Interface**
  - Clean and intuitive navigation
  - Responsive masonry layout for image display
  - Dark/light mode toggle
  - Smooth animations and transitions

- **User Authentication UI**
  - Registration and login forms
  - Error handling and form validation

- **Content Creation**
  - Interactive image upload with preview
  - Form for adding descriptions and tags
  - Edit and delete options for user's own content

- **Social Interaction Components**
  - Like and save buttons with counter displays
  - Comment section with threaded replies
  - User follow functionality
  - Share options for social media platforms

- **Content Discovery Features**
  - Search bar with auto-suggestions
  - Advanced filters and category selection
  - Infinite scroll implementation

- **Profile Management**
  - Editable user profile interface
  - Activity tracking visualization
  - Collection management tools
  - Settings and preferences panel

- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts for all screen sizes
  - Touch-friendly interfaces
  - Optimized performance on all devices

## 🛠️ Technologies Used

- **React.js**: Core library for building the user interface
- **React Router**: For navigation between pages
- **Zustand**: State management across the application
- **Axios**: API calls to the backend
- **Emoji Picker**: For selecting emojis
- **CSS**: For custom styling solutions
- **Imagekitio React**: For maintaining images
- **React Colorful**: For selecting different colors
- **React Infinite Scroll Component**: For handling infinite scrolling feature
- **Vite**: Frontend build tool and development server
- **ESLint & Prettier**: Code quality and formatting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v6.0.0 or higher)

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Narotam-Mishra/react-pinterest-frontend.git
cd react-pinterest-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following variables:

```
VITE_URL_IK_ENDPOINT=your_imageio_url
VITE_API_URL=your_backend_apis_url
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for production

```bash
npm run build
```

## 📂 Frontend Project Structure

```
frontend/
├── src/                     # Source code
├── public/                  # Public assets and index.html
│   ├── components/          # Reusable UI components
│   │   ├── boards/          # borads for maintaining images collection
│   │   ├── comments/        # For comment section
│   │   ├── editor/          # For image edit options
│   │   ├── gallery/         # For image gallery
│   │   ├── galleryItems/    # For collection of images
│   │   ├── image/           # For using Image component
│   │   ├── leftBar/         # Left side bar
│   │   ├── postInteraction/ # For post interaction
│   │   ├── topBar/          # Top bar of app 
│   │   └── userButton/
│   ├── routes/              # Application routes
│   │   ├── authPage/
│   │   ├── createPage/
│   │   ├── homePage/
│   │   ├── layouts/
│   │   ├── postPage/
│   │   ├── profilePage/
│   │   └── searchPage/
│   ├── utils/       # Utility functions and helpers
│   ├── App.css
│   ├── App.jsx      # Main application component
│   ├── index.css    # Global styles
│   └── main.jsx     # Application entry point
├── .env             # Environment variables
└── .gitignore       # Git ignore configuration
```

## 📱 Screenshots
![Login Screen](https://github.com/Narotam-Mishra/react-pinterest-frontend/blob/main/screenshots/LoginPage.png)
![Home Feed](https://github.com/Narotam-Mishra/react-pinterest-frontend/blob/main/screenshots/HomePage.png)
![Pin Detail](https://github.com/Narotam-Mishra/react-pinterest-frontend/blob/main/screenshots/pinDetails.png)
![Profile Page](https://github.com/Narotam-Mishra/react-pinterest-frontend/blob/main/screenshots/UserProfilePage.png)

## 🔍 Key Frontend Implementation Details

### Component Architecture
The application follows a modular component architecture, separating concerns for better maintainability and reuse. Components are organized by feature and include both presentational and container components.

### State Management
Zustand is used for global state management, with separate slices for different features such as authentication, pins, and user profiles. Local component state is used where appropriate for UI-specific functionality.

### Responsive Design Implementation
The interface is built using a mobile-first approach with responsive breakpoints. The layout adjusts dynamically to different screen sizes through CSS media queries and flexible grid systems.

### Performance Optimization
- Lazy loading of images and components
- Memoization of expensive components using React.memo
- Code splitting for route-based component loading
- Optimized re-renders using careful state management

### Masonry Layout
The Pinterest-style masonry layout is implemented using using grid layout, providing a responsive and visually appealing grid that adjusts based on the viewport size.

### Form Handling and Validation
Forms throughout the application use React Hook Form for state management and Yup schema validation to ensure data integrity before submission.

## 🧪 Testing Frontend Components

Run the test suite with:

```bash
npm test
```

The frontend components are tested using:
- Jest for unit testing
- React Testing Library for component testing
- Mock Service Worker for API mocking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Narotam Mishra**
- GitHub: [@Narotam-Mishra](https://github.com/Narotam-Mishra)
- LinkedIn: [Narotam Mishra](https://www.linkedin.com/in/narotam-mishra/)

## 🙏 Acknowledgements

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Material UI](https://mui.com/)
- [Pinterest](https://pinterest.com) for design inspiration
- All the contributors to the open-source libraries used in this project

---

*Made with ❤️ by Narotam Mishra*