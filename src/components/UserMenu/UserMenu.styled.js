import styled from 'styled-components';

export const UserBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  button {
    border-radius: 8px;
    border: 1px solid #10b1ca;
    background-color: #a2cfd6;
    padding: 5px;

    color: #313131;
    font-weight: 400;
    font-size: 16px;
    height: 70%;
  }
`;
