import { useState } from "react"

const useCommonUpdateFunction = () => {
    const[modifiedData, remodification] = useState(0)

    const updateSelectedValue = (value) => {
        let delimiter = /[,\n]/; // Default delimiters: comma and newline
        let numString = value;
        const numArray = numString.split(delimiter).map(Number);
        const negatives = numArray.filter(num => num < 0);

        if (negatives.length > 0) {
            remodification(negatives.join(','));
        } else {
            remodification(numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0))
        }
    }
    return ([modifiedData, updateSelectedValue])
}

export default useCommonUpdateFunction
