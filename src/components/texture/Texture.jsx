import paperTexture from "/assets/texture.jpg";

export default function Texture() {
  const wrapperStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: 1000,
    mixBlendMode: "multiply",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    opacity: 0.3,
  };

  return (
    <div style={wrapperStyles}>
      <img src={paperTexture} alt="paper texture" style={imageStyles} />
    </div>
  );
}
