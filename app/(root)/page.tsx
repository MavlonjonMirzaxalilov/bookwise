import { Button } from "@/components/ui/button";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title={"Latest booklist"}
        books={sampleBooks}
        containerClassName={"mt-28"}
      />
    </>
  );
};

export default Home;
