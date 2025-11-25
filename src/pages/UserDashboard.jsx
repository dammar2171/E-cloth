import Sidebar from "../components/UserAccount/Sidebar";
const UserDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <Sidebar />
        </div>
        <div className="col-8">
          <h1 className="text-center">user Dashboard</h1>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;
