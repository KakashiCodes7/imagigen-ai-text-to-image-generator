# 🎨 ImagiGen AI - Fastest Text-to-Image Generator

## 📊 Project Overview
**ImagiGen AI** is a web-based **text-to-image generator** that transforms user-entered prompts into high-quality visuals using **OpenAI's API**. Designed with speed, customization, and simplicity in mind, the platform allows users to create, view, and download AI-generated images instantly. Built using **HTML, CSS, JavaScript, Node.js, and OpenAI API**, it is ideal for content creators, developers, marketers, and educators.

## 🌟 Features
- 🔊 Lightning-fast image generation via OpenAI’s API
- 💍 Simple, modern user interface (HTML, CSS, JS)
- 🔁 Live preview & image refresh option
- 🔧 Backend built with Node.js and Express.js
- 📁 Option to download AI-generated images
- ✨ Real-time inference feedback with progress updates
- 🛡️ Secure API key integration with environment variables

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (React / Next.js optional)
- **Backend**: Node.js, Express.js
- **AI Integration**: OpenAI Image Generation API
- **Other Tools**: Axios, Vercel (for deployment), TailwindCSS, ThemeProvider

## 📖 Folder Structure
```
imagigen-ai/
├── public/
├── components/
├── pages/
├── styles/
├── .env.local            # Contains FAL API key securely
├── Layout.tsx            # UI layout structure
├── Page.tsx              # Core image generation logic
├── Nav.tsx               # Navigation bar
└── Theme-provider.tsx    # Theme toggle setup
```

## 🔧 Installation & Setup
### Prerequisites
- Node.js v14 or later
- npm or yarn
- OpenAI API Key (via Fal.ai or directly from OpenAI)

### Steps to Run the Project
```bash
# Clone the repository
https://github.com/your-username/imagigen-ai.git
cd imagigen-ai

# Install dependencies
npm install

# Set up environment variables
Create a `.env.local` file and add your FAL key:
FAL_KEY="your_fal_api_key_here"

# Run the development server
npm run dev

# Open in browser
http://localhost:3000
```

## 📌 How to Create a FAL Key
1. Go to [https://fal.ai](https://fal.ai)
2. Sign in or create a free account
3. Navigate to the **API Keys** section in the dashboard
4. Generate a new API key
5. Copy and store it safely
6. Paste it into your `.env.local` file as:
```bash
FAL_KEY="your_generated_key"
```

## 📸 Screenshots
![Image](https://github.com/user-attachments/assets/4b2a0d34-0291-404c-b5c8-ae3c9a54d43c)

![Image](https://github.com/user-attachments/assets/54240fa6-a31e-4a0f-8362-5fc795b27149)

![Image](https://github.com/user-attachments/assets/5b8fdb2c-211d-4ffb-a7b3-b28b34200f25)

## 🔄 Future Enhancements
- 🔒 User authentication and personalized image history
- 🔖 Image style selector (realistic, cartoon, anime)
- 🔹 Multi-language input support
- 🌐 Mobile-responsive PWA version
- 🎨 AI model switching (DALL-E, Stable Diffusion, MidJourney)

## 🎓 Ideal For
- Content creators & bloggers
- Design mockups & concept art
- Educators & students
- AI experimentation & learning

## 📜 License
This project is intended for educational use. All rights to OpenAI API usage belong to their respective owners. Please follow their API usage policy.

---
