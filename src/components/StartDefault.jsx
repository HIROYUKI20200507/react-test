import React, { useEffect } from 'react';
import { searchInputAction } from "../reducks/users/actions";
import { useDispatch, useSelector } from "react-redux";
import MyForm from "../components/MyForm";


export const StartDefault = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)

    useEffect(() => {
        dispatch(searchInputAction({
            requestCity: '東京'
        }));
    },[])

    const resultSubmit = (event) => {
        dispatch(searchInputAction({
            requestCity: event.input
        }));
    }

    return (
        <div className="weather-list">
            <h1>お天気検索</h1>
            <MyForm onSubmit={resultSubmit} />
            <p> Location: {selector.weather.city} </p>
            {selector.weather.response && Object.keys(selector.weather.response).map(key => (
                <li key={key}>
                {selector.weather.response[key].dt_txt}
                    ,<img src={'http://openweathermap.org/img/w/'+selector.weather.response[key].weather[0].icon+'.png'} />
                    {selector.weather.response[key].weather[0].main}
                </li>
            ))}
        </div>
    );
}
    export default StartDefault;
