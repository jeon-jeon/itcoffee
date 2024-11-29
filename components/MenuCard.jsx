const MenuCard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        gap: "5px",
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
      <span style={{ fontSize: "16px", fontWeight: 600 }}>{props.title}</span>
    </div>
  );
};

export default MenuCard;
