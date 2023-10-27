import { Button, Empty } from "antd";
import React from "react";
import { ProjectCard, TaskCard, UserCard } from "./Cards";

export default function Dashboard() {
  const viewportHeight = window.innerHeight;
  const projects = [
    { _id: 1 },
    { _id: 2 },
    { _id: 3 },
    { _id: 4 },
    { _id: 5 },
    { _id: 6 },
    { _id: 7 },
    { _id: 8 },
    { _id: 9 },
  ];
  const tasks = [
    { _id: 1 },
    { _id: 2 },
    { _id: 3 },
    { _id: 4 },
    { _id: 5 },
    { _id: 6 },
    { _id: 7 },
    { _id: 8 },
    { _id: 9 },
  ];
  const users = [
    { _id: 1 },
    { _id: 2 },
    { _id: 3 },
    { _id: 4 },
    { _id: 5 },
    { _id: 6 },
    { _id: 7 },
    { _id: 8 },
    { _id: 9 },
  ];

  const ShowProjects = () => {
    return (
      <div className="row g-2 mt-1">
        {projects.slice(0, 8).map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        })}
      </div>
    );
  };

  const ShowTasks = () => {
    return (
      <div className="row g-2 mt-1">
        {tasks.slice(0, 8).map((task) => {
          return <TaskCard key={task._id} task={task} />;
        })}
      </div>
    );
  };

  const ShowUsers = () => {
    return (
      <div className="row g-2 mt-1">
        {users.slice(0, 8).map((user) => {
          return <UserCard key={user._id} user={user} />;
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
    <div className="py-3">
      <div className="container card p-0" id="project-section">
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
          style={{ minHeight: "500px", overflow: "auto" }}
        >
          {projects.length > 0 ? <ShowProjects /> : <EmptyData />}
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
          style={{ minHeight: "500px", overflow: "auto" }}
        >
          {tasks.length > 0 ? <ShowTasks /> : <EmptyData />}
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
          style={{ minHeight: "500px", overflow: "auto" }}
        >
          {users.length > 0 ? <ShowUsers /> : <EmptyData />}
        </div>
      </div>
    </div>
  );
}
