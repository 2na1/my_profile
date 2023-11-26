import { useRouter } from "next/router";
import Consert from "./consert";
import Book from "./book";
import Photo from "./photo";
export default function Review() {
  const router = useRouter();
  const { id } = router.query;

  // Define different content based on the id parameter
  let content = null;

  if (id === "1") {
    content = <Photo />;
  } else if (id === "2") {
    content = <Consert />;
  } else {
    content = <Book />;
  }

  return (
    <div>
      <br />
      <h1>{id}</h1>
      {content}
    </div>
  );
}
