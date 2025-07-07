import Alert from "./components/Alert/Alert";
import {
  AlertTriangle,
  CircleX,
  X,
  Bell,
  CheckCheck,
  Info,
} from "lucide-react";

const App = () => {
  return (
    <div>
      {/* ========= Alert Error ========== */}
      <Alert
        type="alert-error"
        headerIcon={<CircleX size={20} />}
        xIcon={<X size={20} />}
        title="Error"
        description={
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            libero rerum eos fuga beatae saepe consequuntur totam dignissimos
            ducimus{" "}
            <a href="/" className="text-blue-500 underline">
              Ahiiiiiiiiiiii
            </a>
            , voluptatibus, ad, dolor dolorum labore exercitationem vitae
            veritatis debitis.
          </div>
        }
      >
        Hello Ahmed
      </Alert>
      {/* ========= Alert Info ========== */}
      <Alert
        type="alert-info"
        headerIcon={<Info size={20} />}
        xIcon={<X size={20} />}
        title="Info"
        description="Something Info"
      />
      {/* ======== Alert Primary ========= */}
      <Alert
        type="alert-primary"
        headerIcon={<Bell size={20} />}
        xIcon={<X size={20} />}
        title="CheckCheck"
        description="Something Primary"
      />
      {/* ======== Alert Success ======== */}
      <Alert
        type="alert-success"
        headerIcon={<CheckCheck size={20} />}
        xIcon={<X size={20} />}
        title="Success"
        description="Something Success"
      />
      {/* ======== Alert Warning ======== */}
      <Alert
        type="alert-warning"
        headerIcon={<AlertTriangle size={20} />}
        xIcon={<X size={20} />}
        title="warning"
        description="Something warning"
      />
    </div>
  );
};

export default App;
