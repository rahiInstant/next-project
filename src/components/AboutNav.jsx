import Link from "next/link";
import React from "react";

const AboutNav = () => {
  return (
    <div className="flex gap-2">
      <Link href={"/about/history"}>History</Link>
      <Link href={"/about/mission"}>Mission</Link>
    </div>
  );
};

export default AboutNav;
