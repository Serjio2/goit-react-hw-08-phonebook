import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 5px;
  /* text-align: center; */

  p {
    margin-bottom: 5px;
  }

  label {
    margin-top: -5px;
  }

  span {
    color: red;
    margin-left: 5px;
  }
`;

export const Button = styled.button`

  display: flex;
  align-items: center;
  width: 150px;
  margin: 15px auto;
  padding: 20px 30px;
  color: #000000;
  background-color: #ffffff;
  border-radius: 14px;
  cursor: pointer;
`;

export const StyledInput = styled(Field)`
  width: 200px;
  height: 40px;
`;

