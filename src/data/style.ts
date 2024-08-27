export const styleBackground = (image: string) => {
  const backgroundSize = window.innerWidth > 1024 ? "250px" : "230px";

  return {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: backgroundSize,
  };
};
