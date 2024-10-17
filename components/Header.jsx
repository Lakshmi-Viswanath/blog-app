import Link from "next/link";
import styles from '@/components/styles/Header.module.css'

export default function Header(){
    return(
        <>
         <Link href='/' className={styles.Link}>Blog-App</Link>
        </>
    )
}