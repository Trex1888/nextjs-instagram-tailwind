import Post from "./Post";

const posts = [
  {
    id: "1",
    username: "carini",
    userImg: "https://links.papareact.com/3ke",
    img: "https://i.pinimg.com/originals/1e/3f/2c/1e3f2ce184f7414c8d00ac4f5425a56b.jpg",
    caption: "Carini had a lumpy head.",
  },
  {
    id: "2",
    username: "bill",
    userImg: "https://links.papareact.com/3ke",
    img: "https://i.pinimg.com/originals/1e/3f/2c/1e3f2ce184f7414c8d00ac4f5425a56b.jpg",
    caption: "billiei had a lumpy head.",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
