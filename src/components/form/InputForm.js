import './inputForm.scss';

const InputForm = ({ type, name, label, value }) => {
	return (
		<div className='form-group'>
			<label for={name}>{label}</label>
			<input type={type} name={name} value={value} required />
		</div>
	);
};

export default InputForm;
