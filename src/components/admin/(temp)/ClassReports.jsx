import { useState } from 'react';
import {
  Container,
  Input,
  Select,
  SelectWrapper,
  UtilityContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button
} from '../../styles/Styles';
import { allStudents } from '../../../assets/Students';
import useDebounce from '../../../utils/Debounce';
import { useEffect } from 'react';

const ClassReports = () => {
  const [input, setInput] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [reports, setReports] = useState(allStudents)
  const debouncedInput = useDebounce(input, 300);

  const searchStudent = (e) => {
    setInput(e.target.value);
  };

  const handleClassChange = (value) => {
    setSelectedClass(value);
  };


  useEffect(() => {

    const filteredStudents = allStudents.filter((student) => {
      const matchesName = student.name.toLowerCase().includes(input.toLowerCase());
      const matchesClass = selectedClass === '' || student.class === selectedClass;
      return matchesName && matchesClass;
    });
    setReports(filteredStudents)
  }, [debouncedInput,selectedClass]);



  return (
    <Container>
      <UtilityContainer>
        <Input
          type="text"
          placeholder="Search by name or subject"
          value={input}
          onChange={searchStudent}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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

      {/* Table for Filtered Students */}
      <Table>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Class</Th>
            <Th>Section</Th>
            <Th>Result %</Th>
            <Th>Overall Grade</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports.length > 0 ? (
            reports.map((student, index) => (
              <Tr key={student.id || index}>
                <Td>{index + 1}</Td>
                <Td>{student.name}</Td>
                <Td>{student.class}</Td>
                <Td>{student.section}</Td>
                <Td>{student.result}%</Td>
                <Td>{student.grade}</Td>
                <Td>
                  <Button bg={"green"}>Print</Button>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan="5" style={{ textAlign: 'center' }}>
                No students found
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ClassReports;
