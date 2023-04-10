import { useState } from "react";
import { validateUserName, validatePassword } from "./validation";
import style from "./Form.module.css";



const Form = ({login}) => {
    const [userData, setUserData] = useState({ 
        userName: '',
        password: '', });
        
        const [errors, setErrors] = useState({
            userName: "",
            password: "",
        });

    const handleChangeUserName = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property] : value});
        validateUserName({ ...userData, [property]: value }, setErrors, errors);
        
    };

    const handleChangePassword = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property] : value});
        validatePassword({ ...userData, [property]: value }, setErrors, errors);
    };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    login (userData);
  };
  
  

return(
<div className={style.container}>
    <form className={style.containerForm} onSubmit={handleSubmit}>
        <h1 className={style.titulo}>LOGIN, FOR LOOK DE CRAZY CHARACTERS</h1>
        <div>
        <label className={style.labelUsername} htmlFor="username">Username:</label>
        <input className={style.inputUsername}
        type="text"
        name="userName"
        value= {userData.userName}
        onChange = {handleChangeUserName}
        />
        <span className={style.errorUsername}>{errors.userName}</span>
        </div>
        <div>
        <label className={style.labelPassword} htmlFor="password">Password:</label>
        <input className={style.inputPassword}
        type="password"
        name="password"
        value= {userData.password}
        onChange = {handleChangePassword}
        />
        <span className={style.errorPassword}>{errors.password}</span>
        <div>
        <button className={style.btn} type="submit">LOGIN</button>
        </div>
        </div>
    </form>
    </div>
)
}

export default Form;