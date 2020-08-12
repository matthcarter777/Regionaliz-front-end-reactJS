import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 80%;
  max-width: 700px;
  border: 2px;

  form {
    margin: 80px 0;
    width: 380px;
    background: #fff;
    color: #b3b3b3;
    text-align: center;
    border-radius: 10px;

    img {
      height: 200px;
      width: 400px;
    }

    h1 {
      color: #7f00ff;
      margin-bottom: 24px;
    }

    button {
      margin: 30px 0px 30px 0px;
    }

    a {
      color: #7f00ff;
      display: block;
      margin-top: 24px;
      margin: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
      color: ${shade(0.2, '#7f00ff')}
      }
    }
  }

  > a {
      color: #fff;
      display: block;
      margin-top: 24px;
      margin: 24px;
      text-decoration: none;
      transition: color 0.2s;

      display: flex;
      align-items: center;

      svg {
        margin-right: 15px;
      }

      &:hover {
      color: ${shade(0.2, '#fff')}
      }
    }

`;

