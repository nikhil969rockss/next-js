import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto font-[900] flex flex-col items-center gap-1">
      <div className="text-4xl ">
        <h1 className="text-[#82B4CF] text-center">
          404 <span className="text-[#74C991]">Code</span>
          <span className="text-[#569CD6]"> Not</span>
          <span className="text-[#CE9178]"> Found.</span>
        </h1>
      </div>

      <Link
        className="underline hover:text-blue-300 font-medium text-sm"
        href={"/"}
      >
        Home
      </Link>
    </div>
  );
};
export default NotFound;
