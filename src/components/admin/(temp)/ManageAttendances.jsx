
import styled from 'styled-components';
import { Container, TabButton, TabWrapper } from '../../styles/Styles'
import { useState } from 'react';
const AttendanceBox = styled.div`
  background-color: #f5f5f5;
  padding: 1.5rem;
  border-radius: 10px;
`;

const Attendances = () => {
  const [activeTab, setActiveTab] = useState("staff");

  return (
    <Container>

      <TabWrapper>
        <TabButton
          active={activeTab === "staff"}
          onClick={() => setActiveTab("staff")}
        >
          Staff Attendance
        </TabButton>
        <TabButton
          active={activeTab === "student"}
          onClick={() => setActiveTab("student")}
        >
          Student Attendance
        </TabButton>
      </TabWrapper>


      {activeTab === "staff" ? (
        <StaffAttendanceManagement />
      ) : (
        <StudentAttendanceManagement />
      )}

    </Container>
  );
}

export default Attendances



const StaffAttendanceManagement = () => {
  return (
    <>
      <div>
        {/* Staff Attendance Content */}
        <h2 className="text-lg font-medium mb-2">Staff Attendance</h2>
        <p>Here you can manage and view staff attendance records.</p>
        {/* Add table or form later */}
      </div>
    </>
  )
}


const StudentAttendanceManagement = () => {
  return (
    <>
      <div>
        {/* Student Attendance Content */}
        <h2 className="text-lg font-medium mb-2">Student Attendance</h2>
        <p>Here you can manage and view student attendance records.</p>
        {/* Add table or form later */}
      </div>
    </>
  )
}