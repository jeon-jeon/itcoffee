import Menu from "@/components/Menu";
import MenuCard from "@/components/MenuCard";
import Link from "next/link";

const Page = async () => {
  const data = await fetch("https://api.sampleapis.com/coffee/hot").then(
    (res) => res.json()
  );

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1040px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <Menu />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {data.map((v, i) => (
          <Link href={`/menu/${i}`}>
            <MenuCard key={i} imgSrc={v.image} title={v.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
