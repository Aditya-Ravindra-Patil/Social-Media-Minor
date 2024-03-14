import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewPost from "./Components/NewPost";
import SideBar from "./Components/SideBar";
import "./styles.css";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/PostListStore";

export default function App() {
  const [tab, setTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="App-container">
        <SideBar Tab={tab} setTab={setTab} />
        <div className="HeadFoot">
          <Header />
          {tab === "Home" ? <PostList /> : <NewPost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}
