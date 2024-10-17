import Header from "@/components/Header"
import PostPreview from "@/components/PostPreview";
import posts from "@/components/constant/post-array";

export default function Home() {
  return (
    <>
     <Header /> 
     <h2 style={{textAlign:"center"}}>All Blogs</h2>
     {posts && posts.map(post =>(
     <PostPreview key={post.id} posts={post}/> 
     ))}
    </>
  );
}
