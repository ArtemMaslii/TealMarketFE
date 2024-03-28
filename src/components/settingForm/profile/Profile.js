import InputForm from "components/form/InputForm";
import SubmitButton from "components/submitButton/SubmitButton";

const Profile = () => {
    return (
        <div className="profile">
            <div>
                <h2>Profile</h2>
                <InputForm name="name" type="text" label="Name" />
                <InputForm name="email" type="email" label="Email" />
                <InputForm name="phone" type="text" label="Phone Number" />
                <SubmitButton/>
            </div>
            <div>
                <h2>Address</h2>
                <InputForm name="country" type="text" label="Country" />
                <InputForm name="city" type="text" label="City" />
                <InputForm name="street" type="text" label="Street" />
                <InputForm name="post_code" type="text" label="Post code" />
                <SubmitButton/>
            </div>
        </div>
    );
};

export default Profile;
