import { Fragment, useState } from "react"
import useCommonUpdateFunction from '~/component/useCommonUpdateFunction'

const UserInteractor = () => {
    
    const [inputValue, updateInputValue] = useState('')
    const [btnClicked, updateBtnClicked] = useState(false)
    const [updatedValue, updateSelectedValue] = useCommonUpdateFunction('')

    const updateUserInputValue = (event) => {
        console.log(event.target.value)
        updateInputValue(event.target.value)
        
    }

    const getEvaluatedData = () => {
        updateBtnClicked(true)
        updateSelectedValue(inputValue)
    }

    const removeSelectioon = () => {
        updateBtnClicked(false)
        console.log('blurred')
    }

    return(
        <Fragment>
            <div className="flex-col align-center">
                <label htmlFor="input-sec"> Enter what's in your mind</label>
                <textarea rows="8" cols="33" className="input-field" value={inputValue} onBlur={removeSelectioon} onChange={(event) => updateUserInputValue(event)} />
                { (!inputValue && btnClicked) && <div className='button-description'>* To see this magic do enter some data above</div>}
            </div>
            <div className="text-center">
                <button className="action-btn cursor-pointer" onClick={() => getEvaluatedData()}>Click on me to see "magic"</button>
                {(updatedValue.noNegative && btnClicked) ? 
                  (updatedValue.value && <div>Sum up Data: {updatedValue.value}</div>) : 
                  (updatedValue.value && <div>Negative Values are:  {updatedValue.value}</div>)}
            </div>
        </Fragment>
    )
}

export default UserInteractor