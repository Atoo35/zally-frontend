import React, { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert (props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = ({ open, onClose, severity, message, duration, anchorOrigin }) => {

    return (
        <>
            <Snackbar open={open} autoHideDuration={duration} onClose={onClose} anchorOrigin={anchorOrigin}>
                <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}
export default Notification;