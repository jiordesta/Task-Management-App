import { Typography, Button } from "antd";
import { useSelector } from "react-redux";

export const ProjectCard = ({ project }) => {
  const { Paragraph } = Typography;
  const owner = useSelector((state) => state.user.users).find(
    (user) => user._id === project.owner
  );
  return (
    <div className="col-md-4">
      <div className="card">
        <div
          className="card-body img-container m-0 p-0"
          style={{ height: "250px" }}
        >
          <img src={project.image} alt="" />
        </div>
        <div
          className="card-body p-2 custom-overflow"
          style={{ height: "200px", overflowY: "auto" }}
        >
          <Paragraph mark>{`Title: ${project.title}`}</Paragraph>
          <Paragraph className="mb-0">{`Manager: ${owner.fname} ${owner.lname}`}</Paragraph>
          <Paragraph className="mb-0">{`Start: ${project.start}`}</Paragraph>
          <Paragraph className="mb-0">{`End: ${project.end}`}</Paragraph>
          <Paragraph className="mb-0">{`Members: ${project.members.length}`}</Paragraph>
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
