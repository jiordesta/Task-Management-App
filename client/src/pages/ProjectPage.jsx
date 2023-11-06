import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProject } from "../redux/projectSlice";
import { Typography, Button } from "antd";
import Loading from "./Loading";
import { TaskCard } from "./Cards";

export default function ProjectPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.project);
  const loadingProject = useSelector((state) => state.project.loadingProject);
  const { Paragraph } = Typography;

  useEffect(() => {
    dispatch(fetchProject(id));
  }, []);
  return (
    <>
      {loadingProject || !project ? (
        <Loading />
      ) : (
        <div className="container mt-2">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="card-body img-container p-1"
                  style={{ height: "600px" }}
                >
                  <img src={project.image} alt="" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="card-body p-1">
                  <Paragraph className="mb-1">{`Title: ${project.title}`}</Paragraph>
                  <Paragraph className="mb-1">{`Manager: ${project.owner}`}</Paragraph>
                  <Paragraph className="mb-1">{`Start: ${project.start}`}</Paragraph>
                  <Paragraph className="mb-1">{`End: ${project.start}`}</Paragraph>
                  <Paragraph className="mb-1">{`Members: ${project.members.length}`}</Paragraph>
                  <Paragraph className="mb-1">{`Description: ${project.description}`}</Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-header">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <Button className="w-100">New Task!</Button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row g-2">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <hr className="p-1 w-100" />
          </div>
        </div>
      )}
    </>
  );
}
