import { useEffect, useState } from "react";
import { getForums, getPostsByForum } from "../api";
import PostCard from "../components/PostCard";

function Home() {
  const [forums, setForums] = useState([]);
  const [selectedForum, setSelectedForum] = useState("");
  const [posts, setPosts] = useState([]);


  // Load forums
  useEffect(() => {
    getForums()
      .then(function (data) {
        setForums(data);
      })
      .catch(function (error) {

        console.log("Error loading forums:", error);
      });
  }, []);


  function handleForumChange(e) {
    const forumName = e.target.value;
    setSelectedForum(forumName);

    if (forumName) {
      getPostsByForum(forumName)
        .then(function (postData) {
          //console.log(postData);

          setPosts(postData);
        })
        .catch(function (error) {
          console.log("Error loading posts:", error);
        });
    } else {
      // clear posts
      setPosts([]);
    }
  }
  let content;
  if (posts.length === 0) {
    content = <p>No posts to show</p>;
  } else {
    content = posts.map(function (post) {
      return <PostCard key={post.id} post={post} />;
    });
  }

  return (
    <div className="container">
      <h2>Select a Forum</h2>

      <select value={selectedForum} onChange={handleForumChange}>
        <option value="">Select forum</option>
        {forums.map(function (forum) {
          return (
            <option key={forum.id} value={forum.slug}>
              {forum.slug}
            </option>
          );
        })}
      </select>
      <hr />

      {content}
    </div>

  );
}
export default Home;
{/*****************************************************************************************
  File: Home.js 

  Programmer: Robin Wagubi

  First Version: 26/02/26

  Description: Displays a dropdown of forums. When a forum is selected, it fetches and 
  displays the posts in that forum using PostCard

  ***************************************************************************************/}