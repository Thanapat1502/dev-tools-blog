//import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pagese/Home";
import SignIn from "./Pagese/SignIn";
import LoginPage from "./Pagese/Login";
import ArticlePage from "./Pagese/ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:postId" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/** TODO
 * USER--------------
 * >> Sign up and Login
 *    +เพิ่มกรอบแดง คำเตือน เวลากรอกผิด
 *    ++ทำปุ่มป็อปอัพ
 *    +เพิ่ม Register success เมื่อสร้าง id เสร็จ
 *
 * >> หน้า landing
 *    ++ใส่ฟังก์ชั่นเสิร์จจาก search bar
 *    +เวลากด like เติมปุ่ม register สำหรับ non-member
 *    +ทำปุ่มป็อปอัพ
 *
 * >> เพิ่มหน้า Member menagement
 *    +++หน้า profile editer
 *    ++หน้า reset password
 *    ++ฟังก์ชั่น noticfication
 *
 * ADMIN----------------
 * >> หน้า Article menegment
 *    ++ดึงข้อมูลจาก database มา map
 *    ++++เพิ่มฟังก์ชั่นสำหรับแก้ไขเนื้อหา
 *
 * >> หน้า Category menagement
 *    ++เพิ่มฟังก์ชั่น เพิ่ม แก้ ลบ category
 *    +ทำปุ่มป็อปอัพ
 *    ???ลิงค์กับ posts??
 *
 * >> หน้า Profile
 *    +เพิ่มฟังก์ชั่นปุ่ม บันทึก Profile
 *
 * >> หน้า Notification
 *    +ทำ skeleton ของ notics
 *    +ดึงข้อมูล notic
 *    +เพิ่มฟังก์ชั่นปุ่ม view
 */
