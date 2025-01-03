import React from "react";
import { relatedPost } from "../../components/buttons/courseObj";
import { Link } from "react-router-dom";

const RelatedPost = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-2 ">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h2>
      <ul className="space-y-1">
        {relatedPost?.map((post, index) => (
          <li key={index} className="flex flex-col">
            <Link to={post?.link} className="text-gray-800 text-base font-semibold hover:text-red-500">
              <span className="mr-2 text-gray-800">&rarr;</span>{" "}
              {/* Arrow Key */}
              {post.title}
            </Link>
            <span className="text-xs text-gray-500">{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedPost;
