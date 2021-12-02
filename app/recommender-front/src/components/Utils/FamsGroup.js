import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styled from 'styled-components'

const TabContextDiv =  styled.div`
    /*width: 500px;
    height: 500px;
    background-color: red;*/
`

const FamsGroup = props => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getMailles = () => {
        console.log("getMailles");
    }

    const [state, setstate] = useState("");

    useEffect(() => {
        getMailles()
    }, [])

    return (
        <TabContextDiv>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Maille" value="1" />
                <Tab label="Famille" value="2" />
                <Tab label="Univers" value="3" />
                </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </TabContextDiv>
    )
}

FamsGroup.propTypes = {

}

export default FamsGroup
