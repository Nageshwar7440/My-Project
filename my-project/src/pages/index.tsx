import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./Components/CustomHooks/Layout";
import Home from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <>
     
     <Home></Home>
    </>
  );
}
