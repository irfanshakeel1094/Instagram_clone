# Instagram Clone

A modern Instagram clone built with React, featuring a responsive UI and interactive social media functionalities.

## ✨ Features

- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 📸 **Posts Feed** - View posts with images, captions, likes, and comments
- 📚 **Stories** - Horizontal scrollable stories with circular profile pictures
- ❤️ **Like Posts** - Interactive like functionality with heart animation
- 💬 **Comments** - View, add, and toggle comments on posts
- 👥 **Suggestions** - User suggestions panel with follow buttons
- 🎨 **Modern UI** - Clean interface using Tailwind CSS
- 🔄 **Real-time Updates** - Dynamic content from JSON server API

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Mock API**: JSON Server
- **Language**: JavaScript (ES6+)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Instagram
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install JSON Server** (if not already installed)
   ```bash
   npm install -g json-server
   ```

## 🚀 Running the Application

You need to run both the frontend and backend servers:

### 1. Start the JSON Server (Backend API)
```bash
npx json-server db/db.json --port 3000
```

### 2. Start the React Development Server (Frontend)
Open a new terminal and run:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or the port shown in your terminal).

## 📁 Project Structure

```
Instagram/
├── src/
│   ├── components/
│   │   ├── App.jsx           # Main application component
│   │   ├── Sidebar.jsx       # Left sidebar navigation
│   │   ├── Feed.jsx          # Main feed container
│   │   ├── Post.jsx          # Individual post with likes/comments
│   │   ├── Stories.jsx       # Stories carousel
│   │   └── Suggestions.jsx   # Right sidebar suggestions
│   ├── assets/               # Static assets
│   ├── App.css              # Component styles
│   ├── index.css            # Global styles with Tailwind
│   └── main.jsx             # Application entry point
├── db/
│   └── db.json              # Mock database for posts
├── public/                   # Public assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # Project documentation
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔑 Key Components

### Post Component
- Display user profile, username, and location
- Show post images with rounded corners
- Like/unlike functionality with heart icon
- Comment section with add/view/hide features
- Action buttons (like, comment, share, bookmark)

### Stories Component
- Circular profile pictures with gradient borders
- Horizontal scrollable layout
- Username display below each story

### Suggestions Component
- User profile display
- Suggested users list
- Follow button for each suggestion

## 📄 Database Schema

The `db.json` file contains the mock data structure:

```json
{
  "posts": [
    {
      "id": 1,
      "username": "john_doe",
      "profilePic": "url",
      "location": "City, Country",
      "image": "url",
      "caption": "Post caption",
      "likes": 1243,
      "timeAgo": "2 hours ago",
      "comments": [...]
    }
  ]
}
```

## 🎨 Styling

This project uses Tailwind CSS v4 with the Vite plugin for styling. Custom styles are defined in:
- `index.css` - Tailwind directives and global styles
- `App.css` - Component-specific styles

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is for educational purposes.

## 👨‍💻 Author

Built with ❤️ using React and Vite
