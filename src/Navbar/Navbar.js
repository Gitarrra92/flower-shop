import React from "react";
import styled from "styled-components";
import { black, white } from "../Styles/colors";

export const NavbarStyled = styled.div`
  background: ${black};
  padding: 20px;
  color: ${white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserStatus = styled.div`
  color: ${white};
`;

const LogInButton = styled.span`
  cursor: pointer;
`;

const LogOutButton = styled(LogInButton)`
  margin-left: 10px;
`;

export const Navbar = ({ login, loggedIn, logout }) => {
  return (
    <NavbarStyled>
      <div>
        Welcome to our shop!{" "}
        <span role="img" aria-label="flowers">
          💐💐💐
        </span>
      </div>
      <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            {loggedIn ? `Hello, ${loggedIn.displayName}.` : ""}
            {loggedIn ? (
              <LogOutButton onClick={logout}>Log out</LogOutButton>
            ) : (
              <LogInButton onClick={login}>Log in</LogInButton>
            )}
          </>
        ) : (
          "loading..."
        )}
      </UserStatus>
    </NavbarStyled>
  );
};
