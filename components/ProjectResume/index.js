import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(
    bullets.split("||").map(bullet => bullet.trim())
  );

  return (
    <div className="mt-5 mob:mt-4 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg mob:text-base w-2/5 mob:w-full mob:mb-2">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-3/5 mob:w-full">
        <h2 className="text-lg mob:text-base font-bold">{position}</h2>
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc ml-5 mob:ml-4">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 mob:my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
