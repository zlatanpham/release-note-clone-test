import React from 'react';
import { BlogPostResponse } from '../apis/contentful';
import Pagination from 'components/Pagination';
import PostInfo from './PostInfo';

interface BlogListProps extends BlogPostResponse {}

// FIXME:
const PostList = ({ entries, total, skip, limit }: BlogListProps) => {
  return (
    <>
      <div className="divide-y divide-gray-200">
        {entries.map(({ slug, title, createdAt, tags }) => (
          <div className="py-3" key={slug}>
            <a
              href={`/news/${slug}`}
              className="text-lg font-bold mb-1 hover:text-primary transition-all duration-200"
            >
              {title}
            </a>

            <PostInfo createdAt={createdAt} tags={tags} />
          </div>
        ))}
      </div>
      {total > 0 ? (
        <Pagination pageSize={limit} total={entries.length} current={skip} />
      ) : null}
    </>
  );
};

export default PostList;
