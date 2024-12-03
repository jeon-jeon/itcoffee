const GoodsCard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        gap: "10px",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: "1px solid #eeeeee",
        }}
        src={props.imgSrc}
        alt=""
      />
      <span>{props.title}</span>
    </div>
  );
};

export default GoodsCard;
