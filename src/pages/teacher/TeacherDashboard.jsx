import { useEffect, useState } from "react";
import { getTeacherDashboard } from "../../services/api";

export default function TeacherDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTeacherDashboard();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Teacher Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Total Students</h3>
          <p>{data.totalStudents}</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Total Assignments</h3>
          <p>{data.totalAssignments}</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Total Subjects</h3>
          <p>{data.totalSubjects}</p>
        </div>
      </div>
    </div>
  );
}