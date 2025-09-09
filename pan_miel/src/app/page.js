import Image from "next/image";
import Navbar from "./components/Navbar";
import Default_Image from "./components/Default_Image";

export default function Home() {
  return (
    <div className="Header-div">
      <Navbar/>
      <Default_Image/>
    </div>
  );
}
