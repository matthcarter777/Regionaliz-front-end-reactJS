import styled,{ css } from 'styled-components';


import Tooltip from '../../components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

//interface para definir novas propriedades para a div Container

export const Container = styled.div<ContainerProps>`
  background: #f2f2f2;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 16px;
  width: 95%;
  margin: 10px;

  display: flex;
  align-items: center;

  ${props => props.isErrored && css`
  border-color: #c53030;
  `}

  ${props => props.isFocused && css`
    color: #7f00ff;
    border-color: #7f00ff;
  `}

  ${props => props.isField && css`
    color: #7f00ff;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #b3b3b3;
    }

    & + input {
      margin-top: 8px;
    }

  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }

`;
