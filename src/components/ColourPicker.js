import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

import { ChromePicker } from 'react-color'

export default function ColourPIcker(props) {

    const [colour, setColour] = useState();

    function handleColourChange(colour) {
        setColour(colour)
        props.setColour(colour)
    }

    return (
        <div>
            <div>
                <ChromePicker color={colour} onChange={colour => handleColourChange(colour)} onChangeComplete={colour => setColour(colour)} />
            </div>
        </div>
    )
}
