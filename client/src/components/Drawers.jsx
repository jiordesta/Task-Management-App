import { Button, DatePicker, Drawer, Empty, Input, Typography } from "antd";
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
  const { Paragraph } = Typography;

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
          <DatePicker className="w-100 mb-1" placeholder="Start Date" />
          <DatePicker className="w-100 mb-1" placeholder="End Date" />
        </div>
        <div className="card-body p-1 card m-1">
          <Paragraph className="mb-1 text-end">Project Members</Paragraph>
          <div
            className="custom-overflow m-0 p-1 card"
            style={{
              height: "300px",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {members.length > 0 ? (
              <>
                {members.map((member) => {
                  return <MemberCard key={member.id} user={member} />;
                })}
              </>
            ) : (
              <Empty className="mt-5" description="No members!" />
            )}
          </div>
        </div>
        <div className="card-body p-1">
          <Button className="w-100">Create Project!</Button>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body p-1">
          <Paragraph className="text-end mb-1">Available Users</Paragraph>
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
