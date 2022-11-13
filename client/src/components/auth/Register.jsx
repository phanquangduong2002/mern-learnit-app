import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const Register = () => {
  //Context
  const { registerUser } = useContext(AuthContext);

  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password, confirmPassword } = registerForm;

  const onChangeRegisterForm = (e) =>
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });

  const register = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Passwords do not match" });
      setTimeout(() => setAlert(null), 3000);
      return;
    }

    try {
      const registerData = await registerUser(registerForm);
      if (!registerData.success) {
        setAlert({ type: "danger", message: registerData.message });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full pt-6 flex justify-center items-center flex-col relative">
      {alert && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.4 }}
          className="w-full flex items-center justify-center absolute top-0 left-0"
        >
          <div className="w-[30%] flex items-center justify-center bg-red-400 rounded-lg border-[1px] border-white text-white">
            <AlertMessage info={alert} />
          </div>
        </motion.div>
      )}
      <form
        onSubmit={register}
        className="w-[30%] mt-6 mb-8 flex justify-center flex-col gap-4"
      >
        <div className="w-full">
          <input
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeRegisterForm}
            type="text"
            className="w-full h-full py-2 px-3 text-textColor placeholder:text-[#6f6b80] rounded-lg outline-none border-[1px] border-borderColor"
          />
        </div>
        <div className="w-full">
          <input
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeRegisterForm}
            type="password"
            className="w-full h-full py-2 px-3 text-textColor placeholder:text-[#6f6b80] rounded-lg outline-none border-[1px] border-borderColor"
          />
        </div>
        <div className="w-full">
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={onChangeRegisterForm}
            type="password"
            className="w-full h-full py-2 px-3 text-textColor placeholder:text-[#6f6b80] rounded-lg outline-none border-[1px] border-borderColor"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center mt-4 py-2 px-3 text-white text-lg font-normal tracking-wide rounded-lg bg-[#56cc9d] hover:bg-[#3ac18c] transition-all ease-in-out duration-150"
        >
          Register
        </button>
      </form>
      <p className="w-full mb-4 text-white text-sm font-light">
        Already have an account?
        <Link to="/login" className="ml-2 text-base font-normal text-[#4eb7cd]">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
