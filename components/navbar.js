import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./NavBar.module.css"

export default function Navbar(){
  const router = useRouter();
  return (
    <nav >
      <Link href="/"><span className={router.pathname === "/" ? "active" : ""}>Home</span></Link>
      <Link href="/about"><span className={router.pathname === "/about" ? "active" : ""}>About</span></Link>
      <style jsx>{`
          nav {
            background-color:tomato;
          }
          span {
            text-decoration: none;
          }
          .active {
            color: yellow;
          }
      `}</style>
      {/* <Link href="/" className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</Link> */}
      {/* <Link href="/about" className={`${styles.link} ${router.pathname === "/about" ? styles.active : ""}`}>About</Link> */}
    </nav>  
  )
}