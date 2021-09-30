import React, { useState, useEffect } from 'react';

function AssessmentData(props){
    const [assessment,setAssessment] = useState('');

    useEffect(() => {
        setAssessment(props.address);
        if(assessment!== '' && assessment != undefined ){
            fetch(process.env.ASSESSMENT_API_URI + process.env.ASSESSMENT_API_PATH).then(
                data => setAssessment(data.json())
            )
        }

    }, [props.address])

    return (
        <div>
            {assessment}
        </div>
    )
}

export default AssessmentData;  