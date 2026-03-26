# 📄 AskDocs

> Chat with your PDFs using AI — fast, intuitive, and modern.

🌐 Live: https://www.askdocs.dev  
⚙️ Backend API: https://api.askdocs.dev

---

## 🚀 Overview

**AskDocs** is an AI-powered web application that allows users to upload PDFs and interact with them conversationally. Instead of manually searching through documents, users can ask questions and get instant, contextual answers.

This repository contains the **frontend** of the application, built using a modern React ecosystem.

---

## ✨ Features

- 📤 Upload PDF documents
- 💬 Chat with your PDFs in real-time
- ⚡ Fast data fetching and caching with TanStack Query
- 🔐 Authentication flow (email-based)
- 📩 Email verification (via Resend - backend)
- 📱 Fully responsive UI
- 🎨 Clean and modern design using Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

- React (TypeScript)
- Vite
- TanStack Query (React Query)
- Redux Toolkit
- Tailwind CSS
- Axios

### Backend (separate service)

- API: https://api.askdocs.dev
- Handles:
  - PDF processing
  - AI responses
  - Authentication
  - Email services (Resend)

---

## 📁 Project Structure

```
src/
│
├── app/            # Redux store setup
├── assets/         # Static assets
├── components/     # Reusable UI components
├── features/       # Feature-based modules
│   ├── auth/       # Authentication logic
│   ├── chat/       # Chat functionality
│   ├── pdfUpload/  # PDF upload logic
│
├── pages/          # Route pages
├── types/          # TypeScript types
│
├── App.tsx
├── main.tsx
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```
VITE_API_BASE_URL=https://api.askdocs.dev
```

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```
git clone https://github.com/garvbahal/chat_with_pdf_fe
cd askdocs-frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

---

## 🔄 How It Works

1. User uploads a PDF
2. File is sent to the backend (`api.askdocs.dev`)
3. Backend processes the document and generates embeddings
4. User asks questions
5. AI returns contextual answers based on the document

---

## 📦 Key Libraries

- **TanStack Query** → Server state management and caching
- **Redux Toolkit** → Global state management
- **Tailwind CSS** → Utility-first styling
- **Resend** → Email delivery (handled in backend)

---

## 📌 Future Improvements

- Support for multiple PDFs
- Improved chat history UI
- Better search within conversations
- Drag and drop file upload
- Enhanced AI responses

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Garv Bahal**  
Full Stack MERN Developer

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
