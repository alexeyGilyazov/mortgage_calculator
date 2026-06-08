import './Nav.scss';
import { useState } from 'react'
import logo from '../../img/logo2.webp'

export default function Nav() {

    const [actualPhone, setActualPhone] = useState('+78332308698')

    const changePhone = event => {
        event.preventDefault()
        const currentPhone = event.target.value
        setActualPhone(currentPhone)
    }

    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <img src={logo} alt="logo" />
                <p className='nav__logo_text'>ГК Железно</p>
            </div>
            <div className="nav__managers">
                <label>
                    <p className='nav__managers_person'>Ваш менеджер</p>
                    <select onChange={changePhone}>
                        <option value="+78332308698">Горячая линия</option>
                        <option value="+79091444155">Алексей Гилязов</option>
                        <option value="+79195011005">Виктор Кормщиков</option>
                        <option value="+79536882847">Степан Макаров</option>
                    </select>
                    <a className='nav__contacts_phone' href={`tel:+${actualPhone}`} >{actualPhone}</a>
                </label>
            </div>
        </nav>
    )
}
