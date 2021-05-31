import React, { useContext, useRef } from "react";
import styles from "./LoginForm.module.css";
import CodeContext from "../../store/code-context";

const LoginForm = (props) => {
  const codeCtx = useContext(CodeContext);

  const loginForm = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const currentVaultInput = loginForm.current.value;
    codeCtx.onVault(currentVaultInput);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmitHandler} autoComplete="off">
        <input
          className={styles.login}
          type="text"
          name="vaultCode"
          placeholder="VaultCode"
          ref={loginForm}
        />
      </form>
    </div>
  );
};

export default LoginForm;
