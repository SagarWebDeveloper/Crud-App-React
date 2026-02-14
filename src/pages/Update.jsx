import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function Update() {
  const API = "http://localhost:3000/students";

  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    course: "",
    mobile: "",
    city: "",
  });

  const formRef = useRef(null);

  // fetch all students
  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // select student from table
  const handleSelect = (student) => {
    setSelectedId(student.id);
    setForm(student);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  // form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // UPDATE + RESET + REFRESH
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!selectedId) {
      alert("Please select a student first");
      return;
    }

    await axios.put(`${API}/${selectedId}`, form);

    alert("Student Updated Successfully");

    //  reset form
    setForm({
      name: "",
      course: "",
      mobile: "",
      city: "",
    });
    setSelectedId(null);

    //  refresh page
    window.location.reload();
  };

  return (
    <div className="container mt-4 text-center">
      {/* TABLE */}
      <table className="table table-bordered mb-4">
        <thead className="table-dark">
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Course</th>
            <th>Mobile No.</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr
              key={s.id}
              className={selectedId === s.id ? "table-warning" : ""}
            >
              <td>{i + 1}</td>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.mobile}</td>
              <td>{s.city}</td>
              <td>
                <button className="btn btn-sm btn-warning" onClick={() => handleSelect(s)} > Select </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* FORM */}
      <form ref={formRef} onSubmit={handleUpdate} className="row g-3">
        <div className="col-md-6">
          <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" />
        </div>

        <div className="col-md-6">
          <input name="course" value={form.course} onChange={handleChange} className="form-control"  placeholder="Course" />
        </div>

        <div className="col-md-6">
          <input name="mobile" value={form.mobile} onChange={handleChange} className="form-control" placeholder="Mobile" />
        </div>

        <div className="col-md-6">
          <input name="city" value={form.city} onChange={handleChange} className="form-control" placeholder="City" />
        </div>

        <div className="col-12">
          <button className="btn btn-success w-100">Update Student</button>
        </div>
      </form>
    </div>
  );
}

export default Update;
