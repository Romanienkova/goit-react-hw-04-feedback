import styled from '@emotion/styled';

export const Options = styled.div`
  display: flex;
  gap: 24px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: green;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  :hover {
    background-color: tomato;
    color: white;
  }
`;
