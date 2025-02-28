import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6vEogyX9lya0IO0RneduaKTYlIUzFjg4",
  authDomain: "projeto-teste-b7d98.firebaseapp.com",
  projectId: "projeto-teste-b7d98",
  storageBucket: "projeto-teste-b7d98.firebasestorage.app",
  messagingSenderId: "795464276336",
  appId: "1:795464276336:web:a2d1e1f5db9a23cfda97b5",
  measurementId: "G-FXJYYHS9K6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function App() {
  return (
    <div id="app" className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}