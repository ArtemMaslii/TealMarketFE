import { Formik } from "formik";

const FormInput = ({type, placeholder, field}) => {
    return <input 
            className="field" 
            name={placeholder.toLowerCase()}
            type={type} 
            placeholder={placeholder} 
            {...field}
            />
};

const FormContainer = ({title, logo, children, onSubmit}) => {
    return (
        <form className="form" onSubmit={onSubmit}>
        <h1 className="title">{title}</h1>
        <div className="logo-container">
            <img src={logo} alt="Logo" />
        </div>
        {children}
        </form>
    );
}

const LoginForm = ({initialValues, onSubmit, validationSchema, title, logo, buttonText}) => {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formikProps => (
          <FormContainer title={title} logo={logo} onSubmit={formikProps.handleSubmit}>
            {Object.keys(initialValues).map((fieldName, index) => (
            <>
                <FormInput
                    key={index + title}
                    type={fieldName === "name" ? "text": fieldName}
                    placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                    field={formikProps.getFieldProps(fieldName)}
                />
                {formikProps.touched[fieldName] && formikProps.errors[fieldName] ? (
                    <div className="error-message">{formikProps.errors[fieldName]}</div>
                ): null}
            </>
            ))}
              <button className={`btn ${buttonText === "Sign In" ? "btn-in": "btn-up"}`} type="submit">{buttonText}</button>
          </FormContainer>
        )}
      </Formik>
    )
}

export default LoginForm;