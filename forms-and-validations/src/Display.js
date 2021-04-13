import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';


const styles = {
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Lobster'
    },
    card: {
        backgroundColor: 'blue',
        width: 300,
        marginLeft: 100
    }
}
const Display = (props) => {
    const {displayData} = props;
    const {classes} = props;
    const displayInfo = displayData.map(info => {
        return(
            <div>
             <p>{info.name}</p>
             <p>{info.dob}</p>
             <p>{info.email}</p>
             <p>{info.contact}</p>
             <p>{info.message}</p>
            </div>
        )
    })
    return(
        <div>
        
         <Card className={classes.card} >
                <CardContent>
                    <Typography className={classes.title}>Form Data</Typography>
                    <Typography>{displayInfo}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default withStyles(styles)(Display);