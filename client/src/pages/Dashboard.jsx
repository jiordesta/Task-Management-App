import { Button, Typography, Empty } from "antd";
import React, { useState } from "react";

export default function Dashboard() {
  const viewportHeight = window.innerHeight;
  const { Paragraph, Title } = Typography;
  const [filter, setFilter] = useState([
    { _id: 1 },
    { _id: 2 },
    { _id: 3 },
    { _id: 4 },
    { _id: 5 },
  ]);

  const ProjectCard = () => {
    return (
      <div className="col-md-3">
        <div className="card">
          <div
            className="card-body img-container m-0 p-0"
            style={{ height: "150px" }}
          >
            <img src="/1.webp" alt="" />
          </div>
          <div className="card-body p-2">
            <Paragraph mark>Title: Task Management App</Paragraph>
            <Paragraph mark>Description: This is a description</Paragraph>
            <Paragraph mark>Owner: John Irson Ordesta</Paragraph>
            <Paragraph mark>Created: Oct. 9, 2023</Paragraph>
            <Paragraph mark className="mb-0">
              Members: 69
            </Paragraph>
          </div>
          <div className="card-footer p-1 m-0">
            <Button className="w-100">view project</Button>
          </div>
        </div>
      </div>
    );
  };

  const ShowData = () => {
    return (
      <div className="row g-2 mt-1">
        {filter.map((data) => {
          return <ProjectCard key={data._id} />;
        })}
      </div>
    );
  };

  const EmptyData = () => {
    return (
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: `${viewportHeight - viewportHeight / 4}px` }}
      >
        <div className="col"></div>
        <div className="col">
          <Empty></Empty>
        </div>
        <div className="col"></div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row text-center mt-3">
        <div className="col-md-3 mt-1">
          <Button className="w-100">All Projects</Button>
        </div>
        <div className="col-md-3 mt-1">
          <Button className="w-100">My Projects</Button>
        </div>
        <div className="col-md-3 mt-1">
          <Button className="w-100">Interacted Projects</Button>
        </div>
        <div className="col-md-3 mt-1">
          <Button className="w-100">Create Project</Button>
        </div>
      </div>
      {filter.length > 0 ? <ShowData /> : <EmptyData />}
    </div>
  );
}
