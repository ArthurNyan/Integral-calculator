import React from 'react'
import './CardList.scss'
import { useDispatch } from 'react-redux'
import { updateEndPoint } from '../../app/store/intSlice'

const CardList = () => {
    const dispatch = useDispatch()

    return <section className="section">
        <div className="card-section">
            <div className="block-1">Интеграл</div>
            <div className="mg">
                <div>Переменный шаг</div>
                <ul className="ul-1">
                    <li><a onClick={() => dispatch(updateEndPoint('double_step'))}>С двойной проверкой</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('triple_step'))}>С тройной проверкой</a></li>
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

        <div className="card-section">
            <div className="block-1">Дифференциал</div>
            <div className="mg">
                <div>Метод Эйлера</div>
                <ul className="ul-1">
                    <li><a onClick={() => dispatch(updateEndPoint('Auler-frist-order'))} >Первого порядка</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('Auler-second-order'))}>Второго порядка</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('Auler-third-order'))}>Третьего порядка</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('Auler-fourth-order'))}>Четвертого порядка</a></li>
                </ul>
            </div>

            <div className="mg">
                <div >Метод Рунге-Кутта</div>
                <ul>
                <li><a onClick={() => dispatch(updateEndPoint('Ruk-frist-order'))} >Первого порядка</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('Ruk-second-order'))}>Второго порядка</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('Ruk-third-order'))}>Третьего порядка</a></li>
                    <li><a onClick={() => dispatch(updateEndPoint('Ruk-fourth-order'))}>Четвертого порядка</a></li>
                </ul>
            </div>
        </div>
    </section>
}

export default CardList