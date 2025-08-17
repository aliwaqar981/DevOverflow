import ROUTES from "@/constants/routes";
import { getTimestamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import TagCard from "./TagCard";
import Metric from "../Metric";
interface Props {
  question: Question;
}

const QuestionCard = ({
  question: { _id, answers, author, createdAt, tags, title, upvotes, views },
}: Props) => {
  return (
    <div
      className="card-wrapper rounded-[10px] p-9
  sm:p-11 "
    >
      <div
        className="flex flex-col-reverse items-start justify-between
    gap-5 sm:flex-row"
      >
        <div>
          <span
            className="subtle-regular text-dark400_light700
          flex line-clamp-1 sm:hidden"
          >
            {getTimestamp(createdAt)}
          </span>
          <Link href={ROUTES.QUESTION(_id)}>
            <h3
              className="sm:h3-semibold base-semibold
          text-dark200_light900 flex-1 line-clamp-1"
            >
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map((tag) => (
          <TagCard _id={tag._id} name={tag.name} key={tag._id} compact />
        ))}
      </div>

      <div className="mt-6 flex-between w-full flex-wrap gap-3">
        <Metric
          imageUrl={author.image}
          alt={author.name}
          value={author.name}
          title={`• asked ${getTimestamp(createdAt)}`}
          href={ROUTES.PROFILE(author._id)}
          textStyles="body-medium text-dark400_light700"
          isAuthor
        />
        <div
          className="flex flex-row items-center gap-3 
            max-sm:flex-wrap max-sm:justiyfy-start"
        >
          <Metric
            imageUrl="/icons/like.svg"
            alt="like"
            value={upvotes}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imageUrl="/icons/message.svg"
            alt="answers"
            value={answers}
            title=" Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imageUrl="/icons/eye.svg"
            alt="views"
            value={views}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
