import React from "react";
import CourseOffline from "./Course/CourseOffline";
import CourseOnline from "./Course/CourseOnline";

export default function Course() {
  return (
    <main className="homepage" id="main">
      <CourseOnline />
      <CourseOffline />
    </main>
  );
}
