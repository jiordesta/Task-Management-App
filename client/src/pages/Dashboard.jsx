import { Button, Typography, Empty } from "antd";
import React from "react";

export default function Dashboard() {
  const viewportHeight = window.innerHeight;
  const { Paragraph, Title } = Typography;
  const projects = [];
  const tasks = [];
  const users = [];

  const ProjectCard = ({ project }) => {
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

  const TaskCard = ({ task }) => {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-body"></div>
        </div>
      </div>
    );
  };

  const UserCard = ({ user }) => {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-body"></div>
        </div>
      </div>
    );
  };

  const ShowProjects = () => {
    return (
      <div className="row g-2 mt-1">
        {projects.map((project) => {
          return <ProjectCard key={data._id} project={project} />;
        })}
      </div>
    );
  };

  const ShowTasks = () => {
    return (
      <div className="row g-2 mt-1">
        {tasks.map((task) => {
          return <TaskCard key={data._id} task={task} />;
        })}
      </div>
    );
  };

  const ShowUsers = () => {
    return (
      <div className="row g-2 mt-1">
        {users.map((user) => {
          return <UserCard key={data._id} user={user} />;
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
    <>
      <div className="container card mt-3 p-0" id="project-section">
        <div className="card-header">
          <div className="row mt-1">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
              <Button className="w-100">view all my projects</Button>
            </div>
          </div>
        </div>
        <div
          className="card-body"
          style={{ minHeight: "700px", overflow: "auto" }}
        >
          {filter.length > 0 ? <ShowProjects /> : <EmptyData />}
        </div>
      </div>

      <div className="container card mt-3 p-0" id="task-section">
        <div className="card-header">
          <div className="row mt-1">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
              <Button className="w-100">view all my task</Button>
            </div>
          </div>
        </div>
        <div
          className="card-body"
          style={{ minHeight: "700px", overflow: "auto" }}
        >
          {filter.length > 0 ? null : <EmptyData />}
        </div>
      </div>

      <div className="container card mt-3 p-0" id="user-section">
        <div className="card-header">
          <div className="row mt-1">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
              <Button className="w-100">view all active users</Button>
            </div>
          </div>
        </div>
        <div
          className="card-body"
          style={{ minHeight: "700px", overflow: "auto" }}
        >
          {filter.length > 0 ? null : <EmptyData />}
        </div>
      </div>
    </>
  );
}
