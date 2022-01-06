import React from 'react'
import { Grid, Box, TextField, Select, Paper, Typography, Button, Input } from '@mui/material';
import { useForm, Controller } from "react-hook-form";


const Form = () => {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      address1: '',
      address2: '',
      state: '',
      zipCode:''
    }
  });

  const onSubmit = data => console.log(data);


  return (
    <>
      <Box height={"100vh"} sx={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
        <Grid container justifyContent="center" alignItems="center">
            <form onSubmit={handleSubmit(onSubmit)}>
            <Paper elevation={3}  sx={{
                display: "flex",
                flexFlow: "column nowrap",
                alignItems: "center",
                mt: "28px",
                padding: "1em",
                width: 400,
               
              
            }}>
              <Box sx={{
                display: "flex",
                flexFlow: "row nowrap",
                mt: "1rem"
              }}>
                
                  {/* First name */}
                  <Controller
                    name="firstName"
                    rules={{
                        required: 'Please enter first name',
                        pattern: {
                            value: /^[a-z áéíóúÁÉÍÓÚñÑ]+$/i,
                            message: 'Invalid first name ',
                        },
                    }}
                    control={control}
                    render={({ field }) => <TextField
                        fullWidth
                        sx={{
                            mb: "1rem", mr: "1rem"
                        }}
                        {...field}
                        label="First name"
                        helperText={errors.firstName ? errors.firstName.message : ''}
                        error={!!errors.firstName} />}
                />
                  
                
                {/* Last name */}
                
                  <Controller
                    name="lastName"
                    rules={{
                        required: 'Please enter last name',
                        pattern: {
                            value: /^[a-z áéíóúÁÉÍÓÚñÑ]+$/i,
                            message: 'Invalid last name ',
                        },
                    }}
                    control={control}
                    render={({ field }) => <TextField
                        fullWidth
                        {...field}
                        label="Last name"
                        helperText={errors.lastName ? errors.lastName.message : ''}
                        error={!!errors.lastName}
                    />}
                />
                
                </Box>
                
              {/* email */}
              
                <Controller
                    name="email"
                    rules={{
                        required: 'Please enter a valid email address',
                        pattern: {
                            value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                            message: 'invalid email address',
                        },
                    }}
                    control={control}
                    render={({ field }) => <TextField
                        fullWidth {...field}
                        label="E-mail address" 
                        helperText={errors.email ? errors.email.message : ''}
                        error={!!errors.email}
                        />}
                />
              
              {/* Telephone */}
              
                <Controller
                        name="telephone"
                        rules={{
                            required: 'Please enter a valid telephone number',
                            pattern: {
                                value: /([+][\(]\d{1})(\d?| ?){2}([\)])-(\d{7,11})( {0,4})}*$/,
                                message: 'invalid telephone number',
                            },
                        }}
                    control={control}
                    render={({ field }) => <TextField
                        fullWidth
                        sx={{ mt: "1rem" }}
                        {...field} label="Telephone"
                        helperText={errors.telephone ? errors.telephone.message : ''}
                        error={!!errors.telephone}
                    />}
                />
             
              {/* Address line 1  */}
              
                 <Controller
                    name="address1"
                    rules={{
                        required: 'Please enter your address'
                    }}
                    control={control}
                    render={({ field }) => <TextField
                        fullWidth
                        sx={{ margin: "1rem" }}
                        {...field}
                        label="Address line 1"
                        helperText={errors.address1 ? errors.address1.message : ''}
                        error={!!errors.address1}
                    />}
                />
              
              {/* Address line 2  */}
            
                 <Controller
                    name="address2"
                    control={control}
                    render={({ field }) => <TextField fullWidth {...field} label= "Address line 2 " />}
                />
              <Box sx={{
                display: "flex",
                flexFlow: "row nowrap",
                marginY: "1rem"
              }}>
                {/* //state   */}
                
                   <Controller
                    name="state"
                    rules={{
                        required: 'Please enter your state'
                    }}
                    control={control}
                    render={({ field }) => <TextField
                        fullWidth
                        sx={{ mb: "1rem", mr: "1rem" }}
                        {...field}
                        label="State"
                        helperText={errors.state ? errors.state.message : ''}
                        error={!!errors.state}
                    />}
                />
            
            
                {/* zip code  */}
               
                   <Controller
                    name="zipCode"
                    rules={{
                        required: 'Please enter a valid telephone number',
                        pattern: {
                            value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                            message: 'invalid zipcode',
                        },
                    }}
                    control={control}
                    render={({ field }) => <TextField
                        fullWidth
                        sx={{ mb: "1rem" }}
                        {...field}
                        label="Zip code " 
                        helperText={errors.zipCode ? errors.zipCode.message : ''}
                        error={!!errors.zipCode}
                    />}
                />
                
            </Box>
            <Button type='submit' variant="contained" color="secondary" sx={{ mb: "1rem" }}> Submit</Button>
                  </Paper>
        </form>
        </Grid>
        </Box>
    </>
    )
}

export default Form
