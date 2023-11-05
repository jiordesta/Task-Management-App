import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProject } from "../redux/projectSlice";

export default function ProjectPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProject(id));
  }, []);
  return <div>ProjectPage</div>;
}
