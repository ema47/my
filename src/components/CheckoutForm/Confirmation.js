import { Button, Divider, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = ({message}) => {
    console.log(message)
    return (
        <>
            <Typography variant='h6'>{message}</Typography>
            <Divider/>
            <Typography variant='subtitle2' gutterBottom>
                {message === "successful Payment"
                ? "Your Booking reference: Rgh8787878lkj"
                :""}
            </Typography>
            <Button component={Link} to='/' variant ='outlined' type='button'>
                Back to Home Page
            </Button>
        </>
    )
}

export default Confirmation
