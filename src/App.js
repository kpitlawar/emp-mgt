import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [error, setErrorMsg] = useState("");

  const validateForm = () => {
    if (
      name.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      contact.length === 0
    ) {
      alert("Please enter all required fields");
      return false;
    } else {
      console.log(
        "%cApp.js line:68 name",
        "color: #007800;",
        name,
        lastName,
        email,
        contact
      );
      return true;
    }
  };

  const onSave = () => {
    if (validateForm()) {
      axios
        .post("emp/employees", {
          name,
          lastName,
          email,
          contact,
        })
        .then((response) => {
          console.log("response===", response);
          alert(response);
        })
        .catch((error) => {
          console.error(
            "Error saving data:",
            error,
            name,
            lastName,
            email,
            contact
          );
        });
    }
  };

  const onReset = () => {
    setName("");
    setLastName("");
    setContact("");
    setEmail("");
    setErrorMsg("");
  };
  const renderEmpForm = () => {
    return (
      <div className="col d-flex justify-content-center">
        <div
          className="card border-warning p-3 mt-3"
          style={{
            width: "80%",
          }}
        >
          <div className="card-header">
            <h2 className="text-center mt-2 text-success">
              Welcome to Employee Management System
            </h2>
          </div>
          <div className="row card-body">
            <div className="mb-3 col-sm-6">
              <label className="form-label text-primary font-weight-bold">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                placeholder="Please enter your first name"
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.length === 0) {
                    setErrorMsg("Name is required");
                  } else {
                    setErrorMsg("");
                  }
                }}
              />
              {error && <small className="text-danger">{error}</small>}
            </div>
            <div className="mb-3 col-sm-6">
              <label className="form-label text-primary font-weight-bold">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                className="form-control"
                placeholder="Please enter your last name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-primary font-weight-bold">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                className="form-control"
                placeholder="name@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-primary font-weight-bold">
                Contact Number
              </label>
              <input
                type="number"
                value={contact}
                className="form-control"
                placeholder="0000000000"
                onChange={(e) => {
                  setContact(Number(e.target.value));
                }}
              />
            </div>
          </div>
          <div className="card-footer text-center">
            <button
              className="btn btn-primary mr-4"
              style={{ width: "15%" }}
              onClick={() => {
                onSave();
              }}
            >
              Save
            </button>
            <button
              className="btn btn-outline-primary"
              style={{ width: "15%" }}
              onClick={() => {
                onReset();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>{renderEmpForm()}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
