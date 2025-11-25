import { useLocation } from "react-router";
import style from "../css/Checkout.module.css";
import { AppContext } from "../store/Context";
import { useContext } from "react";
import { useRef } from "react";
const CheckoutForm = () => {
  const fullnameElement = useRef();
  const imageElement = useRef();
  // const zoneElement = useRef();
  const districtElement = useRef();
  // const postcodeElement = useRef();
  const addressElement = useRef();
  const phoneElement = useRef();
  const passwordElement = useRef();
  const confirmPsdElement = useRef();
  const emailElement = useRef();

  const { setSignupData } = useContext(AppContext);
  const location = useLocation();
  const isAccountPage = location.pathname === "/account";

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const fullname = fullnameElement.current.value;
    const imageFile = imageElement.current.files[0];
    // const zone = zoneElement.current.value;
    const district = districtElement.current.value;
    // const postcode = postcodeElement.current.value;
    const address = addressElement.current.value;
    const phone = phoneElement.current.value;
    const password = passwordElement.current.value;
    const confirmPsd = confirmPsdElement.current.value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPsd) {
      alert("Passwords do not match.");
      return;
    }
    const email = emailElement.current.value;

    console.log(image);

    setSignupData({
      fullname,
      image: imageFile,
      district,
      address,
      password,
      phone,
      email,
    });
    alert("Signup successful!");

    fullnameElement.current.value = "";
    imageElement.current.value = "";
    // zoneElement.current.value = "";
    districtElement.current.value = "";
    // postcodeElement.current.value = "";
    addressElement.current.value = "";
    phoneElement.current.value = "";
    emailElement.current.value = "";
  };
  return (
    <form onSubmit={handleSubmitForm} className={`py-3 ${style.formContainer}`}>
      <h2>{!isAccountPage ? "Billing Details" : "Sign Up"}</h2>
      <div className="mb-1">
        <label htmlFor="exampleFullName" className="form-label">
          Full Name <span>*</span>
        </label>
        <input
          type="text"
          ref={fullnameElement}
          placeholder="full name"
          required
          className="form-control"
          id="exampleFullName"
          aria-describedby="fullnameHelp"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="exampleImage" className="form-label">
          Image <span>*</span>
        </label>
        <input type="file" ref={imageElement} className="form-control" />
      </div>
      {/* <div className="mb-1"> 
        <label htmlFor="exampleFullName" className="form-label">
          Zone <span>*</span>
        </label>
        <select
          name="zone"
          id="Zone"
          ref={zoneElement}
          className="form-control"
          required
        >
          <option value="">Select Zone</option>
          <option value="mechi">Mechi</option>
          <option value="koshi">Koshi</option>
          <option value="sagarmatha">Sagarmatha</option>
          <option value="janakpur">Janakpur</option>
          <option value="bagmati">Bagmati</option>
          <option value="narayani">Narayani</option>
          <option value="gandaki">Gandaki</option>
          <option value="dhaulagiri">Dhaulagiri</option>
          <option value="lumbini">Lumbini</option>
          <option value="rapti">Rapti</option>
          <option value="karnali">Karnali</option>
          <option value="bheri">Bheri</option>
          <option value="seti">Seti</option>
          <option value="mahakali">Mahakali</option>
        </select>
      </div>*/}
      <div className="mb-1">
        <label htmlFor="examplePostCode" className="form-label">
          District <span>*</span>
        </label>
        <select
          name="district"
          ref={districtElement}
          id="District"
          className="form-control"
          required
        >
          <option value="">Select District</option>

          <optgroup label="Province 1">
            <option value="bhojpur">Bhojpur</option>
            <option value="dhankuta">Dhankuta</option>
            <option value="ilam">Ilam</option>
            <option value="jhapa">Jhapa</option>
            <option value="khotang">Khotang</option>
            <option value="morang">Morang</option>
            <option value="okhaldhunga">Okhaldhunga</option>
            <option value="panchthar">Panchthar</option>
            <option value="sankhuwasabha">Sankhuwasabha</option>
            <option value="solukhumbu">Solukhumbu</option>
            <option value="sunsari">Sunsari</option>
            <option value="taplejung">Taplejung</option>
            <option value="terhathum">Terhathum</option>
            <option value="udayapur">Udayapur</option>
          </optgroup>

          <optgroup label="Madhesh Province">
            <option value="bara">Bara</option>
            <option value="dhanusha">Dhanusha</option>
            <option value="mahottari">Mahottari</option>
            <option value="parsa">Parsa</option>
            <option value="rautahat">Rautahat</option>
            <option value="saptari">Saptari</option>
            <option value="sarlahi">Sarlahi</option>
            <option value="siraha">Siraha</option>
          </optgroup>

          <optgroup label="Bagmati Province">
            <option value="bhaktapur">Bhaktapur</option>
            <option value="chitwan">Chitwan</option>
            <option value="dhading">Dhading</option>
            <option value="dolakha">Dolakha</option>
            <option value="kathmandu">Kathmandu</option>
            <option value="kavrepalanchok">Kavrepalanchok</option>
            <option value="lalitpur">Lalitpur</option>
            <option value="makwanpur">Makwanpur</option>
            <option value="nuwakot">Nuwakot</option>
            <option value="ramechhap">Ramechhap</option>
            <option value="rasuwa">Rasuwa</option>
            <option value="sindhuli">Sindhuli</option>
            <option value="sindhupalchok">Sindhupalchok</option>
          </optgroup>

          <optgroup label="Gandaki Province">
            <option value="baglung">Baglung</option>
            <option value="gorkha">Gorkha</option>
            <option value="kaski">Kaski</option>
            <option value="lamjung">Lamjung</option>
            <option value="manang">Manang</option>
            <option value="mustang">Mustang</option>
            <option value="myagdi">Myagdi</option>
            <option value="nawalpur">Nawalpur</option>
            <option value="parbat">Parbat</option>
            <option value="syangja">Syangja</option>
            <option value="tanahun">Tanahun</option>
          </optgroup>

          <optgroup label="Lumbini Province">
            <option value="arghakhanchi">Arghakhanchi</option>
            <option value="banke">Banke</option>
            <option value="bardiya">Bardiya</option>
            <option value="dang">Dang</option>
            <option value="gulmi">Gulmi</option>
            <option value="kapilvastu">Kapilvastu</option>
            <option value="nawalparasi">Nawalparasi (West)</option>
            <option value="palpa">Palpa</option>
            <option value="pyuthan">Pyuthan</option>
            <option value="rolpa">Rolpa</option>
            <option value="rupandehi">Rupandehi</option>
          </optgroup>

          <optgroup label="Karnali Province">
            <option value="dailekh">Dailekh</option>
            <option value="dolpa">Dolpa</option>
            <option value="humla">Humla</option>
            <option value="jumla">Jumla</option>
            <option value="kalikot">Kalikot</option>
            <option value="mugu">Mugu</option>
            <option value="rukum-west">Rukum (West)</option>
            <option value="salyan">Salyan</option>
            <option value="surkhet">Surkhet</option>
          </optgroup>

          <optgroup label="Sudurpashchim Province">
            <option value="achham">Achham</option>
            <option value="baitadi">Baitadi</option>
            <option value="bajhang">Bajhang</option>
            <option value="bajura">Bajura</option>
            <option value="dadeldhura">Dadeldhura</option>
            <option value="darchula">Darchula</option>
            <option value="doti">Doti</option>
            <option value="kailali">Kailali</option>
            <option value="kanchanpur">Kanchanpur</option>
          </optgroup>
        </select>
      </div>
      {/* <div className="mb-1"> 
        <label htmlFor="examplePostCode" className="form-label">
          Post Code/Zip <span>*</span>
        </label>
        <input
          type="text"
          required
          ref={postcodeElement}
          className="form-control"
          id="examplePostCode"
          aria-describedby="PostCodeHelp"
        />
      </div>*/}
      <div className="mb-1">
        <label htmlFor="exampleAddress" className="form-label">
          Full Address <span>*</span>
        </label>
        <input
          type="text"
          placeholder="House number and street number"
          required
          ref={addressElement}
          className="form-control"
          id="exampleAddress"
          aria-describedby="addressHelp"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="examplePhoneNumber" className="form-label">
          Phone Number <span>*</span>
        </label>
        <input
          type="text"
          ref={phoneElement}
          className="form-control"
          id="examplePhoneNumber"
          placeholder="phone number"
          aria-describedby="phonenumberHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address <span>*</span>
        </label>
        <input
          type="email"
          ref={emailElement}
          required
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email address"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password<span>*</span>
        </label>
        <input
          ref={passwordElement}
          type="password"
          required
          placeholder="please enter atleast 6 digit password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Confirm Password<span>*</span>
        </label>
        <input
          type="password"
          required
          ref={confirmPsdElement}
          placeholder="please enter same password again"
          className="form-control"
        />
      </div>
      {isAccountPage && (
        <button type="submit" className={`loginBtn ${style.checkoutBtn}`}>
          Sign Up
        </button>
      )}
    </form>
  );
};
export default CheckoutForm;
