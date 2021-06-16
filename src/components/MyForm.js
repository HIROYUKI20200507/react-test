import React from "react";
import { Field, reduxForm } from "redux-form";

let MyForm = props => {
        const { handleSubmit } = props

return (
    <form onSubmit={handleSubmit}>
        <Field
            label="Standard"
            type="text"
            name="input"
            component="input"
            />
        <button
            className="weather-list-button"
            type="submit"
            >Search
        </button>
    </form>
    )
}

const createReduxForm = reduxForm({ form: 'formWeather'})
MyForm = createReduxForm(MyForm)

export default MyForm
