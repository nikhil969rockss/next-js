"use client";
import Link from "next/link";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div className="container mx-auto flex justify-between px-3  text-white py-10">
      <Link className="cursor-pointer" href={"/"}>
        {" "}
        <h1 className="font-[900] text-5xl">
          &lt;Code{" "}
          <span className="text-red-400 font-[900]">Snippet/&gt;.</span>
        </h1>
      </Link>
    </div>
  );
}
export default Navbar;
