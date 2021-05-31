import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import CodeContext from "../../store/code-context";

const Login = () => {
  const codeCtx = useContext(CodeContext);

  const Backdrop = () => {
    return <div className={styles.backdrop} onClick={backDropHandler} />;
  };

  const OverLay = () => {
    return (
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <LoginForm />
        </div>
      </div>
    );
  };

  const backDropHandler = () => {
    codeCtx.onLogin(false);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverLay />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Login;
