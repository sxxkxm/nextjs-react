import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./NavBar.module.css"

export default function Navbar(){
  const router = useRouter();
  return (
    <nav >
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>Home</Link>
      <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>About</Link>
      <style jsx>{`
          nav {
            background-color:tomato;
          }
          a {
            text-decoration: none;
          }
          .active {
            color: blue;
          }
      `}</style>
      {/* <Link href="/" className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</Link> */}
      {/* <Link href="/about" className={`${styles.link} ${router.pathname === "/about" ? styles.active : ""}`}>About</Link> */}
    </nav>  
  )
}