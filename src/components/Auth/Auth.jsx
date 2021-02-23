import { red } from '@material-ui/core/colors';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import SignUpForm from '../SignUpForm/SignUpForm';
import classes from './Auth.module.css';

const Registration = () => {
	return (
		<>
			<div className={classes.App__Aside}>
				<div className={classes.Logo + ' ' + classes.Floating}>heArt</div>
			</div>
			<div className={classes.App__Form}>
				<div className={classes.PageSwitcher}>
					<a href="#" className={classes.PageSwitcher__Item}>
						Sign In
					</a>
					<a href="#" className={classes.PageSwitcher__Item + " " + classes.PageSwitcher__Item__Active}>
						Sign Up
					</a>
				</div>
				<div className={classes.FormTitle}>
                  <NavLink to="/signin" className={classes.FormTitle__Link}>Sign In</NavLink> or <NavLink exact to="/" className={classes.FormTitle__Link + " " + classes.FormTitle__Link__Active}>Sign Up</NavLink>
              	</div>
				<div className={classes.FormCenter}>
					<SignUpForm />
				</div>
			</div>
		</>
	);
};

export default Registration;
