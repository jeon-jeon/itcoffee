import GoodsCard from "@/components/GoodsCard";

const Page = async ({ params }) => {
  const { id } = await params;

  const data = await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );

  return (
    <div style={{ width: "300px", height: "400px" }}>
      <GoodsCard imgSrc={data.thumbnail} title={data.title} />
    </div>
  );
};

export default Page;
