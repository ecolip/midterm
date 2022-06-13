import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => (props.orange ? '#F44336' : '#808080')};
  color: ${(props) => (props.orange ? 'white' : 'black')};
  margin-top: ${(props) => (props.mt1 ? '1rem' : 'none')};
  cursor: ${(props) => (props.cursorPoint ? 'pointer' : 'not-allowed')};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  user-select: none;
  border: none;
  &:hover {
    color: black;
  }
`;

export default Button;
