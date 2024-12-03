import GoodsCard from "@/components/GoodsCard";
import Link from "next/link";

const Page = async () => {
  const data = await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((v) => v.products);

  return (
    <section
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "1040px",
        margin: "0 auto",
        padding: "50px 0px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {data.map((v, i) => (
          <Link href={`/goods/${v.id}`}>
            <GoodsCard key={i} imgSrc={v.thumbnail} title={v.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
