import React from 'react'
import './CardList.scss'
import { useDispatch } from 'react-redux'
import { updateEndPoint } from '../../app/store/intSlice'

const CardList = () => {
    const dispatch = useDispatch()

    return <section className="section">
        <div className="first-section">
            <div className="block-1">Интеграл</div>
            <div className="mg">
                <div>Переменный шаг</div>
                <ul className="ul-1">
                    <li><a onClick={() => dispatch(updateEndPoint('double_step'))}>С двойной проверкой</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('hz_step'))}>С тройной проверкой</a></li>
                </ul>
            </div>

            <div className="mg">
                <div >Постоянный шаг</div>
                <ul>
                    <li><a onClick={() => dispatch(updateEndPoint('integrate_left'))}>Способ левых прямоугольников</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('integrate_right'))}>Способ правых прямоугольников</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('integrate_trapec'))}>Способ трапеций</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('integrate_parabol'))}>Способ порабол</a></li>
                </ul>
            </div>
            <div className="mg">
                <div>Кратное</div>
                <ul>
                    <li><a onClick={() => dispatch(updateEndPoint('even_alg'))}>Способ кратной проверки</a></li>
                </ul>
            </div>
        </div>
        <div className="first-section">
            <div className="block-1">Дифференциал</div>
            <div className="mg">
                <div>Переменный шаг</div>
                <ul className="ul-1">
                    <li><a onClick={() => dispatch(updateEndPoint())} >С двойной проверкаой</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint())}>Lorem ipsum dolor sit amet consectetur</a></li>
                </ul>
            </div>

            <div className="mg">
                <div >Алгоритм</div>
                <ul>
                    <li><a onClick={() => dispatch(updateEndPoint())} >Треугольник какой-то</a></li>
                </ul>
            </div>
            <div className="mg">
                <div>Алгоритм</div>
                <ul>
                    <li><a onClick={() => dispatch(updateEndPoint())} >Кратный тругольник</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint())} >Квадратный треугольник</a></li>
                </ul>
            </div>
            <div className="in-bilde">В разработке </div>
        </div>
    </section>
}

export default CardList