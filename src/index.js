import React, {useState, useEffect} from 'react'
import { render } from 'react-dom'
import "./styles.scss";
import 'bootstrap';
import './i18n';
import {useTranslation} from 'react-i18next';
import moment from 'moment';
import axios from 'axios';
const Greeting = () => {
    const {t, i18n} = useTranslation();
    const date = moment().format();
    const [people, setPeople] = useState([]);

    useEffect((
        getPeople()
    ),[])
    
    const getPeople = async () => {
        const newPeople = await (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data
        console.log(newPeople)
    }

    return (
        <div>
            <h1 className="text-center">{t("Welcome to React" )}</h1>
            <div>{date}</div>
            <div id="image"></div>
        </div>
    )
}

render(
    <Greeting />,
    document.getElementById('target')
)