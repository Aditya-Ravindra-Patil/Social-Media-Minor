import { useContext } from "react";
import { PostList } from "../Store/PostListStore";

export default function Welcome() {
  const { addPostApi } = useContext(PostList);

  const fetchapi = async () => {
    // console.log("hii");
    const datapromise = await fetch("https://dummyjson.com/posts");
    //   .then((res) => res.json())
    //   .then(console.log);
    const { posts } = await datapromise.json();
    addPostApi(posts);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>---Welcome---</h1>
          <h3>Empty Posts!!!</h3>
          <button type="button" className="btn btn-success" onClick={fetchapi}>
            Fetch Posts from API
          </button>
        </div>
      </div>
    </>
  );
}
