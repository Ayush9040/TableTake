const Shimmer = () => {
  return(
    <div className="flex flex-wrap">
      {Array(12).fill("").map((e, index)=><div className="w-[200] h-[200] bg-pink-50 shadow-lg p-3 m-3" key={index}></div>)}
    </div>
  );
};

export default Shimmer;