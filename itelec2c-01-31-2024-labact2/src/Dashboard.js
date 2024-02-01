import DashboardCard from "./DashboardCard.js";
import { data_dashboard } from "./data_dashboard.js";

function Dashboard() {
  return (
    <div className="dashboard d-flex flex-wrap justify-content-center">
      {data_dashboard.map((data) => (
        <DashboardCard dataObj={data} />
      ))}
    </div>
  );
}

export default Dashboard;
