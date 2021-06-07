import React from 'react'

const PredictedSection = ({ predictedImage }) => {
    
    return (
        <div id='prededsec'>
            <img src={predictedImage} alt="predicted image" />
        </div>
    )
}

export default PredictedSection
