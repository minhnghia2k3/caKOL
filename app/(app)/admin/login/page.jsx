import styles from "/app/(app)/admin/ui/login/loginForm/loginForm.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
