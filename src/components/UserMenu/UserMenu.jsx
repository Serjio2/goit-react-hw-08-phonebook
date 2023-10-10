import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { BtnLogOut, UserName, UserNav } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNav>
      <UserName>Welcome, {user.name}</UserName>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnLogOut>
    </UserNav>
  );
};
