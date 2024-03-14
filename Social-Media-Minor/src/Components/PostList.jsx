import { useContext } from "react";
import { PostList as PostListData } from "../Store/PostListStore";
import Posts from "./Posts";

export default function PostList() {
  const { postList } = useContext(PostListData);
  // console.log("hii");
  // console.log(postList);
  return (
    <>
      <div className="container d-flex flex-column justify-content-center ">
        <div className="row">
          {postList.map((post) => (
            <div className="col-md-4 p-4" key={post.id}>
              <Posts key={post.id} post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
