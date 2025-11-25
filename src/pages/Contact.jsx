import TopBarHome from "../components/TopBarHome";
import TopHeader from "../components/TopHeader";
import BottomHeader from "../components/BottomHeader";
import MainFooter from "../components/MainFooter";
import LowerFooter from "../components/LowerFooter";
import ContactContent from "../components/ContactContent";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <>
      <TopBarHome />
      <TopHeader />
      <BottomHeader />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <ContactContent />
            </div>
            <div className="col-7 ">
              <ContactForm />
            </div>
          </div>
          <div className="row">
            <div className="col-12 py-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96699.7865873654!2d80.1448724599753!3d28.989827173687832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1a6114470d65f%3A0xe5fe43613324f4b1!2sDaijee!5e1!3m2!1sen!2snp!4v1764079150606!5m2!1sen!2snp"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
      <LowerFooter />
    </>
  );
};
export default Contact;
