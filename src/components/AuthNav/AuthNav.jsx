import { AuthNavItem, AuthNavLink, AuthNavList } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
      <AuthNavList>
        <AuthNavItem>
          <AuthNavLink to="login">LogIn</AuthNavLink>
        </AuthNavItem>
        <AuthNavItem>
          <AuthNavLink to="register">Register</AuthNavLink>
        </AuthNavItem>
      </AuthNavList>
    );
  };