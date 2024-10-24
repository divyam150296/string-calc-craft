import { Fragment, useState } from "react"
import useCommonUpdateFunction from '~/component/useCommonUpdateFunction'

const UserIteractor = () => {
    
    const [inputValue, updateInputValue] = useState('')
    const [updatedValue, updateSelectedValue] = useCommonUpdateFunction('')

    const updateUserInputValue = (event) => {
        console.log(event.target.value)
        updateInputValue(event.target.value)
        updateSelectedValue(event.target.value)
    }

    return(
        <Fragment>
            <div className="flex-col align-center">
                <label htmlFor="input-sec"> Enter what's in your mind</label>
                <input className="input-field" value={inputValue} onChange={(event) => updateUserInputValue(event)}/>
                { !inputValue && <div className='button-description'>* To see this magic do enter some data above</div>}
            </div>
            <div className="text-center">
                <button className="action-btn cursor-pointer">Click on me to see "magic"</button>
                <div>Sum up Data: {updatedValue}</div>
            </div>
        </Fragment>
    )
}

export default UserIteractor