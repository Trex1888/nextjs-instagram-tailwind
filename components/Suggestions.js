import { useEffect, useState } from "react";
import faker from "faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestion = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.log(suggestion);
    setSuggestions(suggestion);
  }, []);

  return (
    <div className="ml-10 mt-4">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold">Suggestions for you</h3>
        <button className="text-gray-400 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            alt="img"
            className="w-10 h-10 rounded-full border -p[2px]"
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          {console.log(profile.company.catchPhrase)}
          <div>
            <button className="text-blue-400 text-xs font-bold">Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
