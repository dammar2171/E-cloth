import Sidebar from "../components/UserAccount/Sidebar";

const AccountDetail = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8">
            <h1 className="text-center">user Detail</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default AccountDetail;
