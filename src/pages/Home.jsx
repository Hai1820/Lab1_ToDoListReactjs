import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Head from "../components/Head/Head";
import { useCourseList } from "../hooks/useCourseList";
import useQuery from "../hooks/useQuery";
import { courserService } from "../services/course";
import { homeService } from "../services/home/home";
import { getCourseList } from "../store/course";
import Action from "./Home/Action";
import Banner from "./Home/Banner";
import CourseOnline from "./Home/CouseOnline";
import Customer from "./Home/Customer";
import Special from "./Home/Special";

export default function Home() {
  const list = useCourseList();
  const { data: review } = useQuery(() => {
    return homeService.getReview();
  }, []);
  const { data: gallery } = useQuery(() => {
    return homeService.getGallery();
  }, []);
  return (
    <main className="homepage" id="main">
      <Head>
        <title>CFD Training</title>
      </Head>
      <Banner />
      {/* <CourseOffline courses={courses} /> */}
      <CourseOnline courses={list} />
      <Special />
      <Customer review={review} />
      {/* <Gallery /> */}
      <Action />
    </main>
  );
}
