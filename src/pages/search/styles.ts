import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Img = styled.img`
  width: 90px;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #fff;
  max-width: 480px;
  line-height: 56px;

  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0px;
  }

  button {
    width: 110px;
    height: 60px;
    background: #fff9;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#fff9')};
    }
  }
`;

export const Words = styled.div`
  margin-top: 80px;
  max-width: 700px;
  border-radius: 5px;

  a {
    background: #fff;
    border: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;

    div {
      margin: 16px;
      flex: 1;

      strong {
        font-size: 40px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin: 10px 0px 10px 0px;
      }
      h2 {
        font-size: 20px;
        color: #3d3d4d;
        font-weight: bold;

      }
    }
  }
`;

export const Error = styled.span``;
