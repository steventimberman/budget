import React, {Component, Fragment} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import CommonComponents from '../common';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form'
import password from '../auth/password'
import email from '../auth/email'
import * as fetchUser from '../../actions/auth/login'
import {withRouter} from 'react-router-dom'


//needs a handleSubmit prop
class LoginForm extends Component {
	onSubmit = formProps => {
			this.props.fetchUser(formProps, () => {
      this.props.history.push('/');
    });
			console.log(formProps);
	};

	render() {
		const { handleSubmit } = this.props;
		
		return (
			<div>
				<Grid container>
					<form onSubmit={handleSubmit(this.onSubmit)}>
							<Field
					          name="username"
					          label="Email"
					          component={email}
					          autoComplete='none'
					        />
	
						
							<Field
					          name="password"
					          type='password'
					          label='Password'
					          component={password}
					          autoComplete='none'
					        />
					      
							<CommonComponents.ContainedButton type="submit" color="inherit">Login</CommonComponents.ContainedButton>
						
					</form>
					
				</Grid>
			</div>
		)
	}
}



export default compose(
	connect(null, fetchUser),
	reduxForm({form: 'LoginForm', }),
	withRouter,
	)(LoginForm)






