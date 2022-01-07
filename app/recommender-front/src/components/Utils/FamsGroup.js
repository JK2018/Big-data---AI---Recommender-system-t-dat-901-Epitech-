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
    height: 500px;*/
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    border-radius: 4px;
    background-color: #fff;
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
            <TabPanel value="1">
                <ul>
                    <li>Nombre total : 54</li>
                    <li>Sous categories : 134</li>
                    <li>Utilisateurs : 250</li>
                </ul>
            </TabPanel>
            <TabPanel value="2">
                <ul>
                    <li>Nombre total : 43</li>
                    <li>Sous categories : 122</li>
                    <li>Utilisateurs : 34</li>
                </ul>
            </TabPanel>
            <TabPanel value="3">
                <ul>
                    <li>Nombre total : 10</li>
                    <li>Sous categories : 22</li>
                    <li>Utilisateurs : 68</li>
                </ul>
            </TabPanel>
            </TabContext>
        </TabContextDiv>
    )
}

FamsGroup.propTypes = {

}

export default FamsGroup
