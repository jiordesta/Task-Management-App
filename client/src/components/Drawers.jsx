import { Button, Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createProject, setCreateDrawer } from "../redux/projectSlice";

export const CreateProjectDrawer = () => {
  const drawer = useSelector((state) => state.project.createDrawer);
  const dispatch = useDispatch();
  return (
    <Drawer
      title="About this site"
      placement="right"
      onClose={() => dispatch(setCreateDrawer(false))}
      open={drawer}
    >
      <Button onClick={() => dispatch(createProject({ id: 1 }))}>create</Button>
    </Drawer>
  );
};
