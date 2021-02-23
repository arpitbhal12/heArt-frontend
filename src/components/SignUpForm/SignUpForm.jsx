import react from 'react';
import classes from './SignUpForm.module.css';
import Input from '../UI/Input/Input';

const SignUpForm = () => {
	return (
		<div>
			<form onSubmit={() => {}} className={classes.FormFields}>
				<div className={classes.FormField}>
					<label className={classes.FormField__Label} htmlFor="name">
						Full Name
					</label>
					<input
						type="text"
						id="name"
						className={classes.FormField__Input}
						placeholder="Enter your full name"
						name="name"
						value={''}
						onChange={''}
					/>
				</div>
				<div className={classes.FormField}>
					<label className={classes.FormField__Label} htmlFor="password">
						Password
					</label>
					<input
						type="password"
						id="password"
						className={classes.FormField__Input}
						placeholder="Enter your password"
						name="password"
						value={''}
						onChange={''}
					/>
				</div>
				<div className={classes.FormField}>
					<label className={classes.FormField__Label} htmlFor="email">
						E-Mail Address
					</label>
					<input
						type="email"
						id="email"
						className={classes.FormField__Input}
						placeholder="Enter your email"
						name="email"
						value={''}
						onChange={(event) => {
							console.log(event.target.value);
						}}
					/>
				</div>

				<div className={classes.FormField}>
					<label className={classes.FormField__Label} htmlFor="phone">
						Phone
					</label>
					<input
						type="phone"
						id="phone"
						className={classes.FormField__Input}
						placeholder="Enter your mobile number"
						name="phone"
						value={''}
						onChange={(event) => {
							console.log(event.target.value);
						}}
					/>
				</div>

                <div className={classes.FormField__DropDown}>
					<label className={classes.FormField__Label__DropDown} htmlFor="role">Role: </label>

					<select className={classes.FormField__Select} name="role" id="role">
						<option className={classes.FormField__Select__Input} value="artist">Artist</option>
                        <option className={classes.FormField__Select__Input} value="user">User</option>
					</select>
				</div>

				<div className={classes.FormField}>
					<label className={classes.FormField__CheckboxLabel}>
						<input
							className={classes.FormField__Checkbox}
							type="checkbox"
							name="hasAgreed"
							value={''}
							onChange={(event) => {
								console.log(event.target.value);
							}}
						/>{' '}
						I agree all statements in{' '}
						<a href="" className={classes.FormField__TermsLink}>
							terms of service
						</a>
					</label>
				</div>

				<div className={classes.FormField}>
					<button className={classes.FormField__Button + " mr-20"}>Sign Up</button>{' '}
					<a href="#" className={classes.FormField__Link}>
						I'm already member
					</a>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
