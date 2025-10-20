import style from "../css/Checkout.module.css";
const CheckoutForm = () => {
  return (
    <form className={`py-3 ${style.formContainer}`}>
      <h2>Billing Details</h2>
      <div className="mb-1">
        <label htmlFor="exampleFullName" className="form-label">
          Full Name <span>*</span>
        </label>
        <input
          type="text"
          placeholder="full name"
          required
          className="form-control"
          id="exampleFullName"
          aria-describedby="fullnameHelp"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="exampleFullName" className="form-label">
          Country <span>*</span>
        </label>
        <select name="" id="country" className="form-control" required>
          <option value="nepal">Nepal</option>
        </select>
      </div>
      <div className="mb-1">
        <label htmlFor="exampleFullName" className="form-label">
          Zone <span>*</span>
        </label>
        <select name="zone" id="Zone" className="form-control" required>
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
      </div>
      <div className="mb-1">
        <label htmlFor="examplePostCode" className="form-label">
          District <span>*</span>
        </label>
        <select name="district" id="District" className="form-control" required>
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
      <div className="mb-1">
        <label htmlFor="examplePostCode" className="form-label">
          Post Code/Zip <span>*</span>
        </label>
        <input
          type="text"
          required
          className="form-control"
          id="examplePostCode"
          aria-describedby="PostCodeHelp"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="exampleAddress" className="form-label">
          Full Address <span>*</span>
        </label>
        <input
          type="text"
          placeholder="House number and street number"
          required
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
          className="form-control"
          id="examplePhoneNumber"
          placeholder="phone number"
          aria-describedby="phonenumberHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address(Optional)
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email address"
        />
      </div>
      <button type="submit" className={`${style.checkoutBtn}`}>
        Submit
      </button>
    </form>
  );
};
export default CheckoutForm;
