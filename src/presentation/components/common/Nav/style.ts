import styled, { css } from "styled-components";

export const NavContainer = styled.div`
  width: 320px;
  height: 100%;
  background-color: #fff;
  border-left: 1px solid #d9d9d9;
  box-shadow: 5px 1px 8px 0px rgba(0, 0, 0, 0.06);
  z-index: 2;
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  color: #1d1e5a;
`;

export const NavLogoContainer = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: bold;
  padding: 1rem 2rem;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    align-self: flex-end;
  }
`;

export const NavItemContainer = styled.ul`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-weight: bold;
`;

export const NavItem = styled.li<{ isSelect: boolean }>`
  width: 90%;
  height: auto;
  display: flex;
  column-gap: 10px;
  padding: 1rem 2rem;
  cursor: pointer;
  ${(props) =>
    props.isSelect &&
    css`
      background-color: #1d1e5a;
      border-radius: 0 5px 5px 0;
      color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    `};
`;
