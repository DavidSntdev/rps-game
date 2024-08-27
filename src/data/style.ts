export const styleBackground = (image: string) => {
  const backgroundSize = window.innerWidth > 1024 ? "250px" : "230px";

  const imagePath = image.startsWith('http') || image.startsWith('/')
    ? image
    : `${process.env.PUBLIC_URL || ''}${image}`;

  return {
    backgroundImage: `url(${imagePath})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: backgroundSize,
  };
};