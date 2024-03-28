import InputForm from "components/form/InputForm";
import SubmitButton from "components/submitButton/SubmitButton";

const Security = () => {
    return (
        <div className="security">
            <h2>Security</h2>
            <InputForm name="password" type="password" label="New Passwrod" />
            <InputForm name="confirm_password" type="password" label="Confirm New Password" />
            <SubmitButton/>
        </div>
    );
};

export default Security;