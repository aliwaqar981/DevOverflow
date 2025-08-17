import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to learn react?",
    description: "I want to learn react, any suggestions?",
    tags: [
      { _id: "ab", name: "react" },
      { _id: "cd", name: "javascript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
    },
    upvotes: 10,
    answers: 2,
    views: 100,
    createdAt: new Date("2023-10-01T12:00:00Z"),
  },
  {
    _id: "2",
    title: "How to learn javascript?",
    description: "I want to learn javascfipot, any suggestions?",
    tags: [{ _id: "typescript", name: "typescript" }],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
    },
    upvotes: 10,
    answers: 2,
    views: 100,
    createdAt: new Date("2024-12-02T12:00:00Z"),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags
          .map((tag) => tag.name.toLowerCase())
          .includes(filter.toLowerCase())
      : true;
    return matchesQuery && matchesFilter;
  });
  return (
    <>
      <section
        className="flex w-full flex-col-reverse 
        justify-between gap-4 sm:flex-row sm:items-center"
      >
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 
          !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11 ">
        <LocalSearch
          imgSrc={"/icons/search.svg"}
          placeholder="Search questions..."
          otherClasses="flex-1"
          route="/"
        />
      </section>
      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
