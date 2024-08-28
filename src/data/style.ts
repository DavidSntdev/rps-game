export const styleBackground = (image: string) => {
  const backgroundSize = window.innerWidth > 1024 ? "300px" : "200px";

  return {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: backgroundSize,
  };
};
