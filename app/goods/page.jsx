import MenuCard from "@/components/MenuCard";
import Link from "next/link";

const Page = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        maxHeight: "1040px",
        margin: "0 auto",
        gap: "10px",
      }}
    >
      <Link href={"/goods/1"}>
        <MenuCard
          imgSrc="https://image.istarbucks.co.kr/upload/store/skuimg/2024/11/[9300000005590]_20241108105130637.jpg"
          title="머그"
        />
      </Link>
      <Link href={"/goods/2"}>
        <MenuCard
          imgSrc="https://image.istarbucks.co.kr/upload/store/skuimg/2024/10/[9300000005338]_20241023104220869.jpg"
          title="텀블러"
        />
      </Link>
      <Link href={"/goods/3"}>
        <MenuCard
          imgSrc="https://image.istarbucks.co.kr/upload/store/skuimg/2024/11/[9300000005615]_20241108110851934.jpg"
          title="악세사리"
        />
      </Link>
    </div>
  );
};

export default Page;
