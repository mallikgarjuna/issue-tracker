import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <>
      <div>Hello World</div>
      <Pagination itemsCount={100} pageSize={10} currentPage={1} />
    </>
  );
}
