import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.id);
    console.log(newPostList);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_DATA,
  );

  const addPost = (username, title, desc, reaction, tag) => {
    // console.log(typeof tag);
    // console.log(tag.split(" "));
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        desc: desc,
        reactions: reaction,
        userId: username,
        tag: tag.split(" "),
      },
    });
  };
  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_DATA = [
  {
    id: "1",
    title: "kjsndkjnc",
    desc: "dccaadddddddddddddddddddd adcmkc dcj cj dajkc",
    reactions: 4,
    userId: "aditya",
    tag: ["sss", "fff", "ffdsf"],
  },
  {
    id: "2",
    title: "This is Title",
    desc: "This is Description",
    reactions: 7,
    userId: "Username",
    tag: ["Tags", "tags", "tags", "tags"],
  },
];
export default PostListProvider;
