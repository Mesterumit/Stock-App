import React from 'react'
import authImage from '../images/MARKER.png'

// u are looking for inputPros and  ednAdornemnt ?????
import {
    // box wrap all the content
    Box,
    Card,
    CardContent,
    // grid what we are gonna use button, input component 
    // how we are gonna use it, space between eachother
    Grid,
    // TEXTFIELD basiclay input field 
    TextField,
    //TYPOGRAPHY IS EQUVILANT OF h1,h2,h3
    Typography,
    Stack,
    Button,
    // LETS U PLACE "ICON, INPUT, TEXT, CONTENT" IN THE INPUT ITSELF IN THE INSIDE, BEGINNING, AT THE END
    // WE ARE GONNA USE IT FOR PASSWORD ICON TO SHOW THE PASSWORD OR HIDE THE PASSWROD
    InputAdornment,
    IconButton,

} from '@mui/material';
import { Field, Form, Formik, validateYupSchema } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom'
//USEdISPACTH SEND THE CURRENT OR DISERE STATE TO REDUCER/STORE TO UPDATE 
// THE STATE 
import { useDispatch } from 'react-redux';
import { login } from '../store/auth'
import { useState } from 'react';
// import  authImage  from '../images/auth.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const initialValues = { email: '', password: '' };

const registerSchema = yup.object().shape({
    email: yup.string().email("Email Invalid").required("Email is required"),
    password : yup.string().
    min(8,"Password must be at least 8 characters").
    max(12).
    matches(/\d/,"Password must contain at least 1 number").
    matches(/[a-z]/, "Password must contain at least 1 lowercsae letter").
    matches(/[A-Z]/, "Password must contain at least 1 uppercase letter").
    matches(/[!,?,@,#,$,%,ˆ,&,*,(,),_,+,=]/,"Password must contain at least 1 special character")
    .required("Password is required")
})



export const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        actions.setSubmiting(false);
        dispatch(login(values, navigate))
        actions.resetForm()
        
    }
    return (
        <>
            <Box sx={{ width: '100%', height: '100%', bgcolor: '#052159'  }}>

                <Typography variant='h2' color="white" align="center" component="h1">
                    Stock Managment App</Typography>

                <Grid container
                    p={3}
                    alignItems='center'
                    justifyContent='center'


                >
                    <Grid
                        xsm={12}
                        sm={6}
                        md={4}
                        display={{ xs: 'none', sm: 'block' }}
                    >
                        <img src={authImage} alt='login' style={{height:'70vh'}}  />
                    </Grid>
                    <Grid item xs={12} md={6} xl={4} marginLeft='150px'>
                        <Card sx={{maxWidth:"100%", padding:"2rem"}}>
                            <CardContent>
                                <Typography variant='h4' align='center'>
                                    Login
                                </Typography>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={handleSubmit}
                                    validationSchema={registerSchema }
                                >
                                    {/* we are desutracrturing from formik to us them in form field */}
                                    {({ values, errors, touched, handleChange }) => (

                                        <Form>
                                            <Field
                                                as={TextField}
                                                type="email"
                                                variant="outlined"
                                                label="Email"
                                                fullWidth
                                                name="email"
                                                margin="dense"
                                                error={Boolean(errors.email) && Boolean(touched.email)}
                                                helperText={Boolean(touched.email) ? errors.email : ""}
                                            />

                                            <Field
                                                as={TextField}
                                                type={showPassword ? 'text' : "password"}
                                                variant='outlined'
                                                label='Password'
                                                name='password'
                                                fullWidth
                                                margin='dense'
                                                error={Boolean(errors.password) && Boolean(touched.password)}
                                                helperText={Boolean(touched.password) ? errors.password : ''}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position='end' sx={{ pr: 2 }}>
                                                            <IconButton edge='end' onClick={() => setShowPassword(!showPassword)} >
                                                                {showPassword ? (<VisibilityIcon />) 
                                                                :
                                                                (<VisibilityOffIcon />)}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <Stack mt={2} justifyContent="center" alignItems="center">
                                                <Button 
                                                 
                                                   variant='contained'
                                                    type='submit' size='large'>
                                                    LOGIN
                                                </Button>
                                            </Stack>
                                        </Form>
                                    )}

                                </Formik>
                                <Typography  
                                 variant='subtitle2'
                                 align='center'
                                 component="div"
                                 onClick={()=> navigate("/register")}
                                 sx={{cursor:'pointer', color:'goldenrod'}}
                                >
                                  {" "}
                                  Don't have an account ?

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}