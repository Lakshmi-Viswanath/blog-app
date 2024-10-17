import Link from "next/link"
import styles from '@/components/styles/PostPreview.module.css'


export default function PostPreview({posts}){
  
    return(
        <div className={styles.postPreview}>  
        <h3 >
          <Link href={`/posts/${posts.slug}`} className={styles.title}>{posts.title}</Link>
        </h3>
        <p >{posts.excerpt}</p>
        </div>
    )
}