import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 300px;
  text-align: center;
  padding: 10px 20px;
  color: #000000;
  background: #efefef;
  border-radius: 18px;
  border: 1px solid #efefef;
`;

export const Button = styled.button`
  font-size: 14px;
  margin-top: 20px;
  padding: 20px 30px;
  color: #000000;
  background-color: #ffffff;
  border-radius: 14px;
  cursor: pointer;

`;
