const MenuButton = (props) => {
  return (
    <button
      onClick={props.click}
      style={{
        flex: "1",
        padding: "14px 17px",
        fontSize: "17px",
        border: "1px solid #eeeeee",
        borderRadius: props.radius,
        backgroundColor: props.selected ? "navajowhite" : "white",
      }}
    >
      {props.menu}
    </button>
  );
};

export default MenuButton;
