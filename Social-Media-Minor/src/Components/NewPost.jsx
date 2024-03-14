import { useContext, useRef } from "react";
import { PostList as PostListData } from "../Store/PostListStore";

export default function NewPost() {
  const { addPost } = useContext(PostListData);

  const usernameElement = useRef();
  const titleElement = useRef();
  const descElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();
  const Posted = (e) => {
    e.preventDefault();
    const username = usernameElement.current.value;
    const title = titleElement.current.value;
    const desc = descElement.current.value;
    const reaction = reactionElement.current.value;
    const tag = tagElement.current.value;
    addPost(username, title, desc, reaction, tag);

    usernameElement.current.value = "";
    titleElement.current.value = "";
    descElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";
  };
  return (
    <>
      <form className="PostForm" onSubmit={Posted}>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="username"
              ref={usernameElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              id="Title"
              aria-describedby="emailHelp"
              placeholder="Post Title"
              ref={titleElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Post Description
            </label>
            <textarea
              name=""
              id="desc"
              cols="33"
              rows="3"
              placeholder="Post Description"
              ref={descElement}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="reaction" className="form-label">
              Reactions
            </label>
            <input
              type="text"
              className="form-control"
              id="reactions"
              placeholder="Number of reactions"
              ref={reactionElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              placeholder="enter tags using space"
              ref={tagElement}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </form>
    </>
  );
}
