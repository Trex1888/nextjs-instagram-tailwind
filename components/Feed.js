import Stories from "./Stories";
import Posts from "./Posts";

function Feed() {
  return (
    <main
      className="grid grid-cols-1 mx-auto md:grid-cols-2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl"
    >
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <section>
        <h2>mini</h2>
        <h2>suggestions</h2>
      </section>
    </main>
  );
}

export default Feed;
