# Live-Canvas
Developed a real-time collaborative whiteboard platform integrating Tesseract OCR, with high accuracy.  

**Features**:
- Enabled multi-user interaction and synchronized drawing/text updates across clients in real time using Socket.IO
- Designed shareable session URLs, ensuring private collaboration spaces for users.

---
<img width="1919" height="968" alt="Screenshot 2025-07-13 232207" src="https://github.com/user-attachments/assets/1af0474a-fedf-42ce-909b-e63d85a9acc4" />

---

# TechStack

- **Frontend**: React.js / Next.js (for an interactive UI)  
- **Backend**: Node.js, Express.js  
- **Real-Time Communication**: Socket.io  
- **Tools**:  
  - Tesseract OCR  
  - Translation API (Google Translate API)  
- **Database**: MongoDB / Firebase (for session persistence, if required)

# How It Works  
1. **Users join a shared board** and start drawing in real-time.  
2. **A user takes a snapshot** of the board.  
3. **The OCR extracts handwritten or typed text** from the image.  
4. **The extracted text is shared** to the user.  
5. **Users view the board** without affecting the original board.
