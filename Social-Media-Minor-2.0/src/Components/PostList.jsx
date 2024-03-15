import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../Store/PostListStore";
import Loading from "./Loading";
import Posts from "./Posts";
import Welcome from "./Welcome";

export default function PostList() {
  const { postList, addPostApi } = useContext(PostListData);
  const [loading, setLoading] = useState(false);
  // console.log("hii");
  // console.log(postList);

  // const { addPostApi } = useContext(PostList);

  // const fetchapi = async () => {
  //   // console.log("hii");
  //   const datapromise = await fetch("https://dummyjson.com/posts");
  //   //   .then((res) => res.json())
  //   //   .then(console.log);
  //   const { posts } = await datapromise.json();
  //   addPostApi(posts);
  // };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPostApi(data.posts);
        setLoading(true);
      });
    return () => {
      console.log("Cleaning up UseEffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="container d-flex flex-column justify-content-center ">
        <div className="row">
          {!loading && <Loading />}
          {loading && postList.length === 0 && <Welcome />}
          {loading &&
            postList.map((post) => (
              <div className="col-md-4 p-4" key={post.id}>
                <Posts key={post.id} post={post} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
