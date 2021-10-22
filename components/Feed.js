import Stories from "./Stories";
import Posts from "./Posts";
import Mini from "./Mini";
import Suggestions from "./Suggestions";

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

      <section className="hidden md:col-span-1 xl:inline-grid">
        <div className="fixed top-20">
          <Mini />
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;
