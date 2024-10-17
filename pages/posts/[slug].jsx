import posts from '@/components/constant/post-array'
import Header from '@/components/Header'
import { useRouter } from 'next/router';

export default function BlogPost({post}){
    const router = useRouter();
    const {slug} = router.query;
    return(
        <>
        <Header />
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        </>
    )
}

export async function getStaticPaths() {
    const paths = posts.map(post =>({
        params :{slug : post.slug}
}))
  console.log(paths)
    return {paths , fallback : false}
}

export async function getStaticProps({params}){
    const post = posts.find( post =>
        post.slug === params.slug
    )

    return{
        props:{
            post
        }
    }
}