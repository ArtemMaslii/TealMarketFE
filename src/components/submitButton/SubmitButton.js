import './submitButton.scss';
import { useFormikContext } from 'formik';

const SubmitButton = () => {
	const { dirty } = useFormikContext();

	return (
		<button className='submitBtn' type='submit' disabled={!dirty}>
			Save
		</button>
	);
};

export default SubmitButton;
