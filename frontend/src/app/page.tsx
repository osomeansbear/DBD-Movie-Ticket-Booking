"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { HomeSlider } from "@/components/Navbar/HomeSlider/HomeSlider";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeSlider />
    </main>
  );
}
