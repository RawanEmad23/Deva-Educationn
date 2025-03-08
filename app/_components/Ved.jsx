"use client";
const Ved = () => {
  return (
    <>
      <video
        width="640"
        height="360"
        poster="/videos/cover.jpg"
        autoPlay
        muted
        loop
        className="object-cover w-full pt-10"
      >
        <source src="/videos/DEVA.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Ved;
