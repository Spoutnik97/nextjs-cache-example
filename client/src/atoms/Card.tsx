import { FunctionComponent } from "react";

export const Card: FunctionComponent<{ title: string; body?: string }> = ({
  title,
}) => (
  <div
    style={{
      padding: 12,
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 10px",
      marginBottom: 12,
      borderRadius: 10,
    }}
  >
    <h3>{title}</h3>
  </div>
);
