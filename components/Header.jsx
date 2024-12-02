import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        background: "#fdd000",
        padding: "20px 0px",
        width: "100vw",
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "1040px",
          display: "flex",
          margin: "0 auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href={"/"}>
          <span style={{ fontSize: "24px", fontWeight: 600 }}>ITCOFFEE</span>
        </Link>
        <ul
          style={{
            display: "flex",
            fontSize: "18px",
            fontWeight: 600,
            gap: "50px",
          }}
        >
          <Link href={"/brand"}>
            <li>BRAND</li>
          </Link>
          <Link href={"/franchise"}>
            <li>FRANCHISE</li>
          </Link>
          <Link href={"/menu"}>
            <li>MENU</li>
          </Link>
          <Link href={"/store"}>
            <li>STORE</li>
          </Link>
          <Link href={"/news"}>
            <li>NEWS</li>
          </Link>
          <Link href={"/goods"}>
            <li>GOODS</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
