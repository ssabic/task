import React from 'react';
import styled from 'styled-components';

const PersonalInfoForm = () => {
  return (
    <Wrapper>
      <form>
        <label>
          First Name
          <input type="text"></input>
        </label>
        <label>
          Last Name
          <input type="text"></input>
        </label>
        <label>
          E-Mail
          <input type="text"></input>
        </label>
        <label>
          Mobile Phone
          <input type="text"></input>
        </label>
        <label>
          Password
          <input type="password"></input>
        </label>
        <label>
          Confirm Password
          <input type="password"></input>
        </label>
        <button>Save Changes</button>
      </form>
      <Message>
        At least one uppercase letter <br></br>
        At least one lowercase letter <br></br>
        At least one number <br></br>
        At least one special character (i.e. !) <br></br>
        At least eight characters long <br></br>
      </Message>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  position: relative;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;

    grid-gap: 0 20px;
    label {
      display: flex;
      flex-direction: column;
      margin: 8px 0;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      color: #011f4b;
      input {
        margin-top: 3px;
        padding: 9px;
        background: #f3f6f9;
        border-radius: 8px;
        border: none;
        &:focus {
          outline: none;
        }
      }
    }
  }
  button {
    color: white;
    background-color: #1bc5bd;
    border-radius: 5px;
    border: none;
    outline: none;
    width: 120px;
    padding: 9px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Message = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #b5b5c3;
`;
export default PersonalInfoForm;
