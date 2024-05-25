import React, { FC } from "react";
import Heading from "@/shared/Heading";
import { DEMO_POSTS } from "@/data/posts";
import { PostDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import ButtonPrimary from "@/shared/ButtonPrimary";
import WidgetTags from "./WidgetTags";
import WidgetCategories from "./WidgetCategories";
import WidgetPosts from "./WidgetPosts";
import Card3 from "./Card3";

// THIS IS DEMO FOR MAIN DEMO
// OTHER DEMO WILL PASS PROPS
const postsDemo: PostDataType[] = DEMO_POSTS.filter((_, i) => i > 7 && i < 14);
//
export interface SectionLatestPostsProps {
  posts?: PostDataType[];
  className?: string;
  postCardName?: "card3";
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  posts = postsDemo,
  postCardName = "card3",
  className = "",
}) => {
  const renderCard = (post: PostDataType) => {
    switch (postCardName) {
      case "card3":
        return <Card3 key={post.id} className="" post={post} />;

      default:
        return null;
    }
  };

  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full">
          <Heading>Latest Articles 🎈</Heading>
          <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
            {posts.map((post) => renderCard(post))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
