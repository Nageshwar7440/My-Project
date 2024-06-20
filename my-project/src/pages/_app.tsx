import "@/styles/globals.css";
import "@/styles/navbar.scss";
import "@/styles/footer.scss";
import "@/styles/about.scss";
import "@/styles/Home.scss";
import "@/styles/Property.scss";
import "@/styles/contact.scss";
import "@/styles/WishList.scss";
import "@/styles/Blog.scss";
import "@/styles/FAQ.scss";
import "@/styles/Services.scss";
import "@/styles/MyAccount.scss";
import "@/styles/TermsAndConditions.scss";
import "@/styles/detail.scss";
import "@/styles/Login.scss";
import "@/styles/SignUp.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
