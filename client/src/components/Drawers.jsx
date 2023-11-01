import { Button, Drawer, Input, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createProject, setCreateDrawer } from "../redux/projectSlice";
import TextArea from "antd/es/input/TextArea";
import Search from "antd/es/input/Search";
import { useState } from "react";

export const CreateProjectDrawer = () => {
  const [members, setMembers] = useState([]);
  const users = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 12 },
    { id: 23 },
  ];

  const drawer = useSelector((state) => state.project.createDrawer);
  const dispatch = useDispatch();
  const { Paragraph, Title } = Typography;

  const getCurrentDate = () => {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDateString = date.toLocaleDateString(undefined, options);
    return formattedDateString;
  };

  const MemberCard = ({ user }) => {
    const isAdded =
      members.find((member) => member.id === user.id) !== undefined;
    return (
      <div className="card mb-1">
        <div className="card-body p-1 m-0">
          <div className="row align-items-center text-center">
            <div className="col">
              <Paragraph className="mb-1">{user.id}</Paragraph>
            </div>
            <div className="col-4">
              {isAdded ? (
                <Button
                  className="w-100"
                  onClick={() => {
                    setMembers(
                      members.filter((member) => user.id !== member.id)
                    );
                  }}
                >
                  Remove
                </Button>
              ) : (
                <Button
                  className="w-100"
                  onClick={() => {
                    setMembers([...members, user]);
                  }}
                >
                  Add
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Drawer
      title="About this site"
      placement="right"
      onClose={() => dispatch(setCreateDrawer(false))}
      open={drawer}
    >
      <div className="card">
        <div className="card-body p-1">
          <Paragraph className="mb-1 text-end">Project Details</Paragraph>
          <Input className="mb-1" placeholder="title.." />
          <TextArea rows={5} className="mb-1" placeholder="description.." />
          <Input
            className="mb-1"
            placeholder="manager.."
            defaultValue="John Irson Ordesta"
          />
          <Input placeholder="created.." defaultValue={getCurrentDate()} />
        </div>
        <div className="card-body p-1">
          <Paragraph className="mb-1 text-end">Project Members</Paragraph>
          <div
            className="custom-overflow m-0 p-0"
            style={{ height: "300px", overflowY: "auto", overflowX: "hidden" }}
          >
            {members.map((member) => {
              return <MemberCard key={member.id} user={member} />;
            })}
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body p-1">
          <Paragraph className="text-end">Available Users</Paragraph>
          <Search className="mb-1" />
          <>
            {users.map((user) => {
              return <MemberCard key={user.id} user={user} />;
            })}
          </>
        </div>
      </div>
    </Drawer>
  );
};
