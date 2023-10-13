import React from 'react'
import './CardList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../app/store'
import { update } from '../../app/slice'

const CardList = () => {

    const pageState = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()

    return <section className="section">
        <div className="first-section">
            <div className="block-1">Интеграл</div>
            <div className="mg">
                <div>Переменный шаг</div>
                <ul className="ul-1">
                    <li className='www'><a onClick={() => dispatch(update())}>С двойной проверкаой</a></li>
                    <li><a onClick={() => dispatch(update())}>Lorem ipsum dolor sit amet consectetur</a></li>
                </ul>
            </div>

            <div className="mg">
                <div >Постоянный шаг</div>
                <ul>
                    <li><a onClick={() => dispatch(update())}>Lorem ipsum dolor sit amet consectetur</a></li>
                    <li><a onClick={() => dispatch(update())}>Lorem ipsum dolor sit amet consectetur</a></li>
                    <li><a onClick={() => dispatch(update())}>Lorem ipsum dolor sit amet consectetur</a></li>
                    <li><a onClick={() => dispatch(update())}>Lorem ipsum dolor sit amet consectetur</a></li>
                </ul>
            </div>
            <div className="mg">
                <div>Кратное</div>
                <ul>
                    <li><a onClick={() => dispatch(update())}>Lorem ipsum dolor sit amet consectetur</a></li>
                    <li><a onClick={() => dispatch(update())}>Lorem ipsum dolor sit amet consectetur</a></li>
                </ul>
            </div>
        </div>
        <div className="first-section">
            <div className="block-1">Дифференциал</div>
            <div className="mg">
                <div>Переменный шаг</div>
                <ul className="ul-1">
                    <li><a onClick={() => dispatch(update())} >С двойной проверкаой</a></li>
                    <li><a onClick={() => dispatch(update())}>Lorem ipsum dolor sit amet consectetur</a></li>
                </ul>
            </div>

            <div className="mg">
                <div >Тоже шаг</div>
                <ul>
                    <li><a onClick={() => dispatch(update())} >Треугольник какой-то</a></li>
                </ul>
            </div>
            <div className="mg">
                <div>Кратное</div>
                <ul>
                    <li><a onClick={() => dispatch(update())} >Кратный тругольник</a></li>
                    <li><a onClick={() => dispatch(update())} >Квадратный треугольник</a></li>
                </ul>
            </div>
        </div>
    </section>
}

export default CardList