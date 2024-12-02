import MenuCard from "@/components/MenuCard";

const Page = async ({ params }) => {
  const data = await fetch("https://api.sampleapis.com/coffee/hot").then(
    (res) => res.json()
  );

  const { id } = params;

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <MenuCard imgSrc={data[id].image} title={data[id].title} />
    </div>
  );
};

export default Page;
