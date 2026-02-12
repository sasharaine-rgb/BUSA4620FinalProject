"use client";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();

  return (
    <div id="nav">
      <button onClick={() => router.push("/")}>Home</button>
      <button onClick={() => router.push("/contact")}>Contact</button>
    </div>
  );
}

export default Navigation;