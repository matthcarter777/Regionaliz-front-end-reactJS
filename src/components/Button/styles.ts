import Styled from 'styled-components';
import { shade } from 'polished';

export const Container = Styled.button`
  background:  #7f00ff;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 95%;
  font-weight: 500;
  color: #fff;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
  background: ${shade(0.2, '#7f00ff')}
  }
`;
