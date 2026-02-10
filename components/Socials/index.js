import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";
import yourData from "../../data/portfolio.json";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/ShivamBhushanResume.pdf";
  link.download = "Shivam_Bhushan_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const Socials = ({ className }) => {
  const router = useRouter();

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
      <Button onClick={downloadResume}>
        Resume
      </Button>
    </div>
  );
};

export default Socials;
