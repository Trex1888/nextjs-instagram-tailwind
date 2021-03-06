function Story({ img, username }) {
  return (
    <div>
      <img
        src={img}
        alt="img"
        className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 cursor-pointer 
        hover:scale-110 transition transform duration-200 ease-out object-contain"
      />
      <h2 className="text-xs w-14 truncate text-center">{username}</h2>
    </div>
  );
}

export default Story;
