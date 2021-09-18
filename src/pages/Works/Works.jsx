import React from 'react';
import workItems from "../../helpers/workItems.helper";

import PageHeader from "../../components/PageHeader/PageHeader";
import WorkItem from "../../components/WorkItem/WorkItem";

import s from "./gallery.module.scss";

function Works(props) {
  return (
    <>
      <PageHeader title="My last works"/>
      <div className={`container ${s.gallery}`}>
        {workItems.map((item, index) => (
        <WorkItem
          src = {item.src}
          alt = {item.alt}
          link = {item.link}
          linkTitle = {item.linkTitle}
          title = {item.title}
          dateTime={item.dateTime}
          dateTimeTitle={item.dateTimeTitle}
          key={`${item.src}_${index}`}
        />
        ))}
      </div>
    </>
);
}

export default Works;