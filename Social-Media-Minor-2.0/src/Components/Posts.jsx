import { useContext } from "react";
import { PostList as PostListData } from "../Store/PostListStore";

export default function Posts({ post }) {
  const { deletePost } = useContext(PostListData);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash3"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
          </svg>
        </span>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title">{post.title}</h5>
            <div>
              {post.reactions}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
              </svg>
            </div>
          </div>
          <p className="card-text">{post.body}</p>
          {post.tags.map((data) => (
            <span className="badge bg-primary m-1" key={data}>
              {data}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
