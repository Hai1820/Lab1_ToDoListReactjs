import React, { useEffect } from "react";
import CourseCard from "../../components/CourseCard";

export default function CouseOnline({ courses }) {
  return (
    <section className="section-courseonline section-blue">
      <div className="container">
        <div className="textbox">
          <h2 className="main-title">Khóa học Online</h2>
        </div>
        <div className="list row">
          {courses?.map((e) => (
            <CourseCard key={e.id} {...e} />
          ))}
        </div>
        <div className="text-deco">C</div>
      </div>
    </section>
  );
}
