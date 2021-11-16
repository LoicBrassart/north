import styled from 'styled-components';

const SThemeToggler = styled.button`
  font-family: 'Monaco', monospace;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.buttonBg};
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.5rem;
`;

export default SThemeToggler;
