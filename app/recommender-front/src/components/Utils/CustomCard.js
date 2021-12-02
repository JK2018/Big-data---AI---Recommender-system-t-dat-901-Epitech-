import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'

const StyledDiv =  styled(Card)`
    /*width: 200px;
    height: 200px;*/
`

const CustomCard = props => {
    return (
        <div>
            <StyledDiv sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Resume
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Nbre de clients : 150
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Prix moyen des articles : 150
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Total des ventes : 150
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {props.children}
                </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                </Box>
            </Box>
            </StyledDiv>
        </div>
    )
}

CustomCard.propTypes = {

}

export default CustomCard
