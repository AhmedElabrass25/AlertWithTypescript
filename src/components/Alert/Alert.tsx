import type React from "react";
import "./alert.scss";
import type { AlertType } from "../../types";
interface AlertProps {
  type: AlertType;
  headerIcon: React.ReactNode;
  xIcon: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
}
const Alert = ({
  type,
  headerIcon,
  xIcon,
  title,
  description,
  children,
}: AlertProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="left flex items-center gap-2">
          <span> {headerIcon}</span>
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        <span>{xIcon}</span>
      </div>
      {description && <div>{description}</div>}
      {children && <div className="text-center">{children}</div>}
    </div>
  );
};

export default Alert;
