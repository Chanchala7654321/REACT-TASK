import { useState } from "react";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import JobBoard from "./components/JobBoard";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";
import { userData, jobListings } from "./components/data";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ProfileSection
        name={userData.name}
        role={userData.role}
        bio={userData.bio}
        isAvailable={userData.isAvailable}
      />
      <JobBoard />
      <Footer />
    </>
  );
}

export default App;
