import React from 'react'
import { Slider, RangeSlider } from 'rsuite';

export default function MainSlider({ changeValue, maxVal, minVal,defaultVal }) {
    return (
        <div>
            <Slider
                style={{ marginTop:"10px" }}
                progress
                max={maxVal ?? 50}
                min={minVal ?? -50}
                defaultValue={defaultVal ?? 0}
                onChange={value => changeValue(value)}
            />
        </div>
    )
}
