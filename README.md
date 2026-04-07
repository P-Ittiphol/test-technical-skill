# 📝 Assignment แบบทดสอบ

## 📌 Overview
This is a simple online exam system where users can answer questions, submit results, and see their score. Data is stored in MongoDB Atlas.

## 🚀 Tech Stack
- Frontend: Angular
- Backend: Node.js (Express)
- Database: MongoDB Atlas

## ✨ Features
- ทำข้อสอบ (เลือกได้คำตอบเดียว)
- เปลี่ยนคำตอบก่อนส่งได้
- บันทึกชื่อ + คะแนน
- แสดงผลคะแนน
- Reset เพื่อสอบใหม่

## 🗄️ Database Structure

### Questions
- question: string
- choices: string[]
- answer: string

### Assignments
- fullname: string
- answers: string[]
- score: number

## 🔧 Backend Setup
cd backend
npm install

cp .env.example .env
# ใส่ MongoDB Atlas connection string

npm run seed
npm start

## 🎨 Frontend Setup
cd frontend
npm install
ng serve

## 🌐 Run Application
Frontend: http://localhost:4200  
Backend: http://localhost:3000
