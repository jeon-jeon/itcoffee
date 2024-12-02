const PromotionCard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        borderRadius: "20px",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <img
        style={{
          width: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        src={props.imgSrc}
        alt=""
      />

      <p style={{ color: "#7fb1ee" }}>{props.period}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default PromotionCard;
