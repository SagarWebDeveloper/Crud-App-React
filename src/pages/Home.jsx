import React, { useState } from "react";
import { addStudent } from "../../api/studentApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({name: "",course: "",mobile: "",city: ""});
  const handleChange = (e) => {setFormData({...formData,[e.target.name]: e.target.value,});
  };

  const handleSubmit = (e) => {e.preventDefault();
    addStudent(formData)
      .then(() => {
        alert("Student Added Successfully ✅");
        navigate("/view");
      })
      .catch(() => {
        alert("Something went wrong ❌");
      });
  };

  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: "700px", width: "100%" }}>
          <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">🎓 Add New Student</h3>
          <p className="text-muted">
            Fill the form to register a new student
          </p>
        </div>

        <form className="row g-4" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input type="text" name="name" className="form-control" placeholder="👤 Student Name" value={formData.name} onChange={handleChange} required/>
          </div>

          <div className="col-md-6">
            <input type="text" name="course" className="form-control" placeholder="📘 Course" value={formData.course} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <input type="tel" name="mobile" className="form-control" placeholder="📱 Mobile Number" value={formData.mobile} onChange={handleChange} pattern="[0-9]{10}" title="Enter 10 digit mobile number" required />
          </div>

          <div className="col-md-6">
            <input type="text" name="city" className="form-control" placeholder="🏙️ City" value={formData.city} onChange={handleChange} required />
          </div>

          <div className="col-12">
            <button className="btn btn-primary w-100 py-2 fw-semibold">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
