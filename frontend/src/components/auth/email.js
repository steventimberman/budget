import React from 'react'
import TextField from '@material-ui/core/TextField';


const email = ({
	  input,
	  label,
	  meta: { touched, error },
	  ...custom
	}) => (
	  <TextField
	  	label='Email'
	    {...input}
	    {...custom}
	  />
	)

export default email

