import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;

  background-color: #fff159;
`;

export const WrapperContent = styled.div`
  margin: 0 350px;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 7px 0;

  > img {
    height: 34px;
  }
`;

export const WrapperInput = styled.div`
  width: 600px;
  height: 40px;

  padding: 7px 15px;

  display: flex;
  align-items: center;

  background-color: #fff;

  border-radius: 4px;

  > input {
    width: 100%;
    border: none;
    outline: none;

    font-size: 16px;
    color: #333;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 90%;

  margin-right: 10px;

  background-color: #e6e6e6;
`;
