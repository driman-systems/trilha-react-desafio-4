import styled from 'styled-components';

interface ButtonContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 42px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#81259D')};
  color: #fff;
  border: 1px solid #81259d;
  border-radius: 21px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.6)};
  }
`;