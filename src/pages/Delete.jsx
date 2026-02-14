import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Delete() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "http://localhost:3000/students";
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const res = await axios.get(API);
      setStudents(res.data);
    } catch (error) {
      console.error("Fetch error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this student?")) return;

  try {
    await axios.delete(`${API}/${id}`);
    navigate("/view"); //  direct view page, no alert
  } catch (error) {
    console.error("Delete error", error);
  }
};


  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
    <div className="container mt-4 text-center">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Course</th>
            <th>Mobile</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((s, index) => (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>{s.mobile}</td>
                <td>{s.city}</td>
                <td className="text-center">
                  <button onClick={() => handleDelete(s.id)} className="btn btn-sm btn-danger" > Delete </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Delete;
