import React from 'react';

import PageHeader from "../../components/PageHeader/PageHeader";
import BlogItem from "../../components/BlogItem/BlogItem";
import blogItems from "../../helpers/blogItems.helper";

function Blog(props) {
  return (
    <>
      <PageHeader title="Blog"/>
      <div className="container">
        {blogItems.map((item, index) => (
          <BlogItem
            src = {item.src}
            alt = {item.alt}
            link = {item.link}
            title = {item.title}
            subtitle = {item.subtitle}
            dateTime = {item.dateTime}
            author = {item.author}
            badges = {item.badges}
            key = {`${item.title}_${index}`}
          />
        ))}
      </div>
    </>
  );
}

export default Blog;