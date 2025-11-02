import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const router = useRouter();
  
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
      {yourData.showResume && (
        <Button onClick={() => router.push("/resume")}>
          Resume
        </Button>
      )}
    </div>
  );
};

export default Socials;
