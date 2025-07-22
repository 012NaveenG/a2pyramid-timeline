import styled from "styled-components";
import {
  Avatar, Card, CloseBtn, Container,
  GridContainer, Header, InfoSection, Input,
  ModalWrapper, Overlay, Select,
  SelectWrapper, UtilityContainer
} from "../../styles/Styles.js";

import { useEffect, useState } from "react";
import Pagination from "../../ui/Pagination.jsx";
import useDebounce from "../../../utils/Debounce.jsx";
import { allStudents } from "../../../assets/Students.js";

const Name = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.4rem;
`;

const Subject = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
`;

const ManageStudents = () => {
  const [students, setStudents] = useState(allStudents);
  const [input, setInput] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 15;
  const debouncedInput = useDebounce(input, 300);
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleStudents = students.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const searchStudent = (e) => {
    setInput(e.target.value);
  };

  // Class Filter
  const handleClassChange = (value) => {
    setSelectedClass(value);
  };

  useEffect(() => {
    let filtered = allStudents;

    if (debouncedInput.trim() !== "") {
      filtered = filtered.filter((st) =>
        st.name.toLowerCase().includes(debouncedInput.toLowerCase()) ||
        (st.subject && st.subject.toLowerCase().includes(debouncedInput.toLowerCase()))
      );
    }

    if (selectedClass !== "") {
      filtered = filtered.filter((st) => st.class?.toString() === selectedClass.toString());
    }

    setStudents(filtered);
  }, [debouncedInput, selectedClass]);

  return (
    <Container>
      {selectedStudent && (
        <Modal data={selectedStudent} onClose={() => setSelectedStudent(null)} />
      )}

      <UtilityContainer>
        <Input
          type="text"
          placeholder="Search by name or subject"
          value={input}
          onChange={searchStudent}
        />

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <SelectWrapper>
            <Select
              id="class-select"
              value={selectedClass}
              onChange={(e) => handleClassChange(e.target.value)}
            >
              <option value="">All Classes</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Class {i + 1}
                </option>
              ))}
            </Select>
          </SelectWrapper>
        </div>
      </UtilityContainer>

      <GridContainer>
        {visibleStudents.map((st, idx) => (
          <Card key={idx} onClick={() => setSelectedStudent(st)}>
            <Avatar src={st.img} alt={st.name} />
            <Name>{st.name}</Name>
            <Subject>Class {st.class || "N/A"}- {st.section}</Subject>
          </Card>
        ))}
      </GridContainer>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default ManageStudents;

const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <Overlay>
      <ModalWrapper>
        <Header>
          <img src={data.img} alt={data.name} />
          <div>
            <h2>{data.name}</h2>
            <p>{data.designation}</p>
          </div>
        </Header>

        <InfoSection>
          <div><label>Student ID</label><p>{data.empId || "STU-" + Math.floor(1000 + Math.random() * 9000)}</p></div>
          <div><label>Class</label><p>{data.class || "N/A"} - {data.section}</p></div>
          <div><label>Date of Admission</label><p>{data.admissionDate || "N/A"}</p></div>
          <div><label>Contact</label><p>{data.phone || "N/A"}</p></div>
          <div><label>Email</label><p>{data.email || "N/A"}</p></div>
          <div><label>Address</label><p>{data.address || "N/A"}</p></div>
        </InfoSection>

        <CloseBtn onClick={onClose}>Close</CloseBtn>
      </ModalWrapper>
    </Overlay>
  );
};
