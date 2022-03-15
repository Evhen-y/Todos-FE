import React, { useState } from "react";
import { getUsers, getUserFilterSettings, getUsersFilter } from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { IUser } from "../../store/interface";
import { usersActions } from "../../store/actions";

const Users = () => {
  const [stateUsers, setStateUsers] = useState("");
  const dispatch = useDispatch();
  const userFilterSettings = useSelector(getUserFilterSettings());
  const users: IUser[] = useSelector(getUsersFilter());
  const searchHandlerUser = () => {
    dispatch(usersActions.USER_FILTER.REQUEST({ ...userFilterSettings, search: stateUsers }));
  };
  return (
    <div>
      <input value={stateUsers} type="text" onChange={(e) => setStateUsers(e.target.value)} />
      <button onClick={searchHandlerUser}>Filter SEARCH</button>

      {users?.map(({ name, id }) => (
        <div key={id}>{name} </div>
      ))}
    </div>
  );
};

export default Users;
