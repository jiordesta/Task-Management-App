import {
  Button,
  DatePicker,
  Drawer,
  Empty,
  Input,
  Typography,
  Upload,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createProject, setCreateDrawer } from "../redux/projectSlice";
import TextArea from "antd/es/input/TextArea";
import Search from "antd/es/input/Search";
import { useState } from "react";

export const CreateProjectDrawer = () => {
  const [image, setImage] = useState(null);

  const [members, setMembers] = useState([]);
  const users = useSelector((state) => state.user.users);

  const drawer = useSelector((state) => state.project.createDrawer);
  const dispatch = useDispatch();
  const { Paragraph } = Typography;
  const { Dragger } = Upload;

  const MemberCard = ({ user }) => {
    const isAdded =
      members.find((member) => member._id === user._id) !== undefined;
    return (
      <div className="card mb-1">
        <div className="card-body p-1 m-0">
          <div className="row align-items-center text-center">
            <div className="col">
              <Paragraph className="mb-1">{`${user.fname} ${user.lname}`}</Paragraph>
            </div>
            <div className="col-4">
              {isAdded ? (
                <Button
                  className="w-100"
                  onClick={() => {
                    setMembers(
                      members.filter((member) => user._id !== member._id)
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
          <Dragger
            customRequest={({ file }) => {
              if (!file.type.startsWith("image/")) {
                dispatch(error("Enter a valid Image (.jpeg .jpg .png) "));
                return;
              }

              setImage(file);
            }}
            showUploadList={false}
          >
            <p className="ant-upload-text">
              {image ? (
                <>Image is Ready for upload!</>
              ) : (
                <>Click or drag image file in this area!</>
              )}
            </p>
          </Dragger>
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
                  return <MemberCard key={member._id} user={member} />;
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
              return <MemberCard key={user._id} user={user} />;
            })}
          </>
        </div>
      </div>
    </Drawer>
  );
};
