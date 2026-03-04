import { useEffect, useState } from "react";
import { getStudentDashboard } from "../../services/api";

export default function StudentDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getStudentDashboard();
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
      <h2>Student Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>My Subjects</h3>
          <p>{data.totalSubjects}</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Pending Assignments</h3>
          <p>{data.pendingAssignments}</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Attendance %</h3>
          <p>{data.attendancePercentage}%</p>
        </div>
      </div>
    </div>
  );
}