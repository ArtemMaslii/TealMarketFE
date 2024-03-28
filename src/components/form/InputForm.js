import "./inputForm.scss";

const InputForm = ({type, name, label}) => {
    return (
        <div className="form-group">
            <label for={name} >{label}</label>
            <input type={type} name={name} placeholder=" " required />
        </div>
    );
};

export default InputForm;