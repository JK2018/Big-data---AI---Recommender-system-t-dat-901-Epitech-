import React from 'react'
import PropTypes from 'prop-types'
import { PieChart } from 'react-minimal-pie-chart';

const Piechart = props => {
    return (
        <div>
            <PieChart
                data={[
                    { title: 'One', value: 40, color: '#E38627' },
                    { title: 'Two', value: 40, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
                lineWidth={30}
                paddingAngle={2}
                animate={true}
                animationDuration={1000}
                //label={() => "fab"}
            />
        </div>
    )
}

Piechart.propTypes = {

}

export default Piechart
