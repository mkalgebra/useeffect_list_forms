import { useState } from "react";

export default function Registration() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    nickname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.password.length < 8 ||
      user.password !== user.passwordConfirmation
    ) {
      alert("Prekratka lozinka ili se lozinke ne poklapaju");
      return;
    }

    alert("Uspjesna registracija");
  };

  const updateUser = (e) => {
    setUser((previousState) => {
      return { ...previousState, [e.target.id]: e.target.value };
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname:
          <input
            type={"text"}
            value={user.firstname}
            id="firstname"
            onChange={updateUser}
          ></input>
        </label>
        <br />
        <label>
          Lastname:
          <input
            type={"text"}
            value={user.lastname}
            id="lastname"
            onChange={updateUser}
          ></input>
        </label>
        <br />
        <label>
          Password:
          <input
            type={"password"}
            value={user.password}
            id="password"
            onChange={updateUser}
          ></input>
        </label>
        <br />
        <label>
          Password confirmation:
          <input
            type={"password"}
            value={user.passwordConfirmation}
            id="passwordConfirmation"
            onChange={updateUser}
          ></input>
        </label>
        <br />
        <label>
          Email:
          <input
            type={"email"}
            value={user.email}
            id="email"
            onChange={updateUser}
          ></input>
        </label>
        <br />
        <label>
          Nickname:
          <input
            type={"text"}
            value={user.nickname}
            id="nickname"
            onChange={updateUser}
          ></input>
        </label>
        <input type="submit" value="Send"></input>
      </form>

      <p>{user.firstname}</p>
      <p>{user.lastname}</p>
      <p>{user.password}</p>
      <p>{user.passwordConfirmation}</p>
      <p>{user.email}</p>
      <p>{user.nickname}</p>
    </>
  );
}
