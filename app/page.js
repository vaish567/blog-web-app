'use client'

import BlogList from "@/components/BlogList/BlogList";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer/>
    </>
  );
}
