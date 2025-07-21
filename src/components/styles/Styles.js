import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  min-height: 100vh;
  background: #f0f4f8;
  font-family: "Segoe UI", sans-serif;

  @media (min-width: 640px) {
    padding: 10px 20px;
  }

  @media (min-width: 1024px) {
    padding: 20px 40px;
  }
`;

const UtilityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Button = styled.button`
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.bg || "gray"};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 300px;
    margin-right: 0;
  }
`;

const Input = styled.input`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  @media (max-width: 640px) {
    max-width: 90%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;

  /* Responsive Grid Columns */
  grid-template-columns: repeat(
    ${({ columns }) => columns || 5},
    minmax(0, 1fr)
  );

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Card = styled.div`
  padding: 1.5rem 1rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 640px) {
    width: 90%;
  }
`;

const Avatar = styled.img`
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e2e2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background: #fff;
  max-width: 700px;
  width: 90%;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
  max-height: 90vh;

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const CloseBtn = styled.button`
  margin-top: 20px;
  background: #e53e3e;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  float: right;

  &:hover {
    background: #c53030;
  }
`;

const InfoSection = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  div {
    background: #f7f9fc;
    padding: 10px 15px;
    border-radius: 8px;
  }

  label {
    font-weight: bold;
    color: #333;
    font-size: 0.85rem;
  }

  p {
    margin: 4px 0 0 0;
    font-size: 0.95rem;
  }
`;


export {
  Container,
  UtilityContainer,
  Button,
  Input,
  GridContainer,
  Card,
  Avatar,
  Overlay,
  ModalWrapper,
  Header,
  CloseBtn,
  InfoSection
};
