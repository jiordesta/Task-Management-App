import { Button, Empty } from "antd";
import React from "react";
import { ProjectCard, TaskCard, UserCard } from "./Cards";
import { CreateProjectDrawer } from "../components/Drawers";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const viewportHeight = window.innerHeight;
  const projects = useSelector((state) => state.project.projects);

  const ShowProjects = () => {
    return (
      <div className="row g-2 mt-1">
        {projects.slice(0, 6).map((project) => {
          return <ProjectCard key={project._id} project={project} />;
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
      <div className="py-3">
        <div className="container card p-0" id="project-section">
          <div className="card-header">
            <div className="row mt-1">
              <div className="col"></div>
              <div className="col"></div>
              <div className="col">
                <Button className="w-100">view all projects</Button>
              </div>
            </div>
          </div>
          <div
            className="card-body"
            style={{
              minHeight: `${viewportHeight - viewportHeight / 4}px`,
              overflow: "auto",
            }}
          >
            {projects.length > 0 ? <ShowProjects /> : <EmptyData />}
          </div>
        </div>
      </div>
      <CreateProjectDrawer />
    </>
  );
}
