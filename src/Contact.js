import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setdata({ ...data, [name]: value });
    console.log(data);
  };

  // Connect with firebase

  const submitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, address, message } = data;
    if (firstName && lastName && phone && email && address && message){
    const res = fetch(
      "https://paynow-react-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        Headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          address,
          message,
        }),
      }
    );
    if (res) {
      setdata({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
      alert("Subscribed to PayNow");
    } else {
      alert("Subscription Failed");
    }      
  }
  else{
    alert("Please fill all the fields");
  }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br />
                    Sales Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet. Nam eligendi minima id dicta
                    minus sed magnam aperiam. Qui incidunt.
                  </p>
                  <figure>
                    <img
                      src="https://source.unsplash.com/random/1920x1080/?wallpaper,mountains"
                      className="img-fluid"
                      alt="IMG"
                    />
                  </figure>
                </div>
                {/* Right Side form */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="Post">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild ">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={data.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild ">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={data.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild ">
                        <input
                          type="phone"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Phone"
                          value={data.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild ">
                        <input
                          type="Email"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Email"
                          value={data.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Your Address"
                          value={data.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Your Message"
                          value={data.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para"
                      >
                        I agree that the PayNow may contact me at the Email
                        Address or Phone Number given above.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
