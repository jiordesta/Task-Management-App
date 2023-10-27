import { Typography, Button } from "antd";

export const ProjectCard = ({ project }) => {
  const { Paragraph } = Typography;
  return (
    <div className="col-md-3">
      <div className="card">
        <div
          className="card-body img-container m-0 p-0"
          style={{ height: "150px" }}
        >
          <img src="/1.webp" alt="" />
        </div>
        <div
          className="card-body p-2 custom-overflow"
          style={{ height: "150px", overflowY: "auto" }}
        >
          <Paragraph mark>Title: Facebook App</Paragraph>
          <Paragraph>Manager: John Irson Ordesta</Paragraph>
          <Paragraph>Created: Oct. 9, 2023</Paragraph>
          <Paragraph className="mb-0">Members: 69</Paragraph>
          <Paragraph>Description: This is a description</Paragraph>
        </div>
        <div className="card-footer p-1 m-0">
          <Button className="w-100">view project</Button>
        </div>
      </div>
    </div>
  );
};

export const TaskCard = ({ task }) => {
  const { Paragraph } = Typography;
  return (
    <div className="col-md-3">
      <div className="card">
        <div
          className="card-body img-container m-0 p-0"
          style={{ height: "150px" }}
        >
          <img src="/task.webp" alt="" />
        </div>
        <div
          className="card-body p-2 custom-overflow"
          style={{ height: "150px", overflowY: "auto" }}
        >
          <Paragraph mark>Title: Add Home page to the landing page!</Paragraph>
          <Paragraph>Project: Facebook App</Paragraph>
          <Paragraph>Assigned: Sheena Coquilla</Paragraph>
          <Paragraph>
            Description: This is a task descriprion. This is a Task
            Description!This is a task descriprion. This is a Task Description!
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export const UserCard = ({ user }) => {
  const { Paragraph } = Typography;
  return (
    <div className="col-md-3">
      <div className="card">
        <div
          className="card-body img-container p-0 m-0"
          style={{ height: "150px" }}
        >
          <img src="/user.webp" alt="" />
        </div>
        <div
          className="card-body p-2 custom-overflow"
          style={{ height: "150px", overflowY: "auto" }}
        >
          <Paragraph mark>Name: John Irson Ordesta</Paragraph>
          <Paragraph>Active Tasks: 69</Paragraph>
          <Paragraph>
            Description: This is a user description!This is a user
            description!This is a user description!
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
