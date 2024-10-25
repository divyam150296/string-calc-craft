import { useState } from "react"

const useCommonUpdateFunction = () => {
    const[modifiedData, remodification] = useState({value: '', noNegative: true})

    const updateSelectedValue = (value) => {
        console.log(value)
        let delimiter = /[,\n]/;
        let numString = value;

        if (value.startsWith('//')) {
            const parts = value.split('\n');
            delimiter = new RegExp(parts[0].slice(2));
            numString = parts.slice(1).join('\n');
        }

        const numArray = numString.split(delimiter).map(item => parseInt(item, 10));
        const negatives = numArray.filter(num => num < 0);

        if (negatives.length > 0) {
            remodification({
                value: negatives.join(','),
                noNegative: false
            })
        } else {
            remodification({
                value: numArray.reduce((sum, num) => sum + (isNaN(num) ? '' : num), 0),
                noNegative: true
            })
        }
    }
    console.log(modifiedData)
    return ([modifiedData, updateSelectedValue])
}

export default useCommonUpdateFunction
