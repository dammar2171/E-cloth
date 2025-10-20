import BottomHeader from "../components/BottomHeader";
import LowerFooter from "../components/LowerFooter";
import MainFooter from "../components/MainFooter";
import TopSection from "../components/UserAccount/TopSection";
import UserAccountContainer from "../components/UserAccount/UserAccountContainer";

const Account = () => {
  return (
    <>
      <BottomHeader />
      <TopSection />
      <UserAccountContainer />
      <MainFooter />
      <LowerFooter />
    </>
  );
};
export default Account;
