import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.log(suggestions);
    setSuggestion(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 mt-8 bg-white border-gray-200 border
    rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {suggestion.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
