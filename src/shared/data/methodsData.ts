import { methodProp } from "../assets/lib/methodProp";

export const methodsData: methodProp[] = [
    {
        title: 'Интеграл',
        subtitles: [
            {
                title: 'Переменный шаг', subtitles: [
                    { name: 'С двойной проверкой', endpoit: 'double_step', preParams: ['b', 'e', 'n'], postParams: ['a'] },
                    { name: 'С тройной проверкой', endpoit: 'triple_step', preParams: ['b', 'e', 'n'], postParams: ['a'] }
                ]
            },
            {
                title: 'Постоянный шаг', subtitles: [
                    { name: 'Способ левых прямоугольников', endpoit: 'integrate_left', preParams: ['b', 'n'], postParams: ['a'] },
                    { name: 'Способ правых прямоугольников', endpoit: 'integrate_right', preParams: ['b', 'n'], postParams: ['a'] },
                    { name: 'Способ трапеций', endpoit: 'integrate_trapec', preParams: ['b', 'n'], postParams: ['a'] },
                    { name: 'Способ порабол', endpoit: 'integrate_parabol', preParams: ['b', 'n'], postParams: ['a'] },
                ]
            },
            {
                title: 'Кратное', subtitles: [
                    { name: 'Способ кратной проверки', endpoit: 'even_alg', preParams: ['b', 'd', 'n'], postParams: ['a', 'c'], },
                ]
            },

        ]
    },
    {
        title: 'Дифференциал',
        subtitles: [
            {
                title: 'Метод Эйлера', subtitles: [
                    { name: 'Первого порядка', endpoit: 'Ailer_first_order', activeDef: true, preParams: ['b', 'y', 'n'], postParams: ['a'] },
                    { name: 'Второго порядка', endpoit: 'Ailer_second_order', activeDef: true, preParams: ['b', 'y', 'd', 'n'], postParams: ['a'], double: true },
                ]
            },
            {
                title: 'Метод Рунге-Кутта', subtitles: [
                    { name: 'Первого порядка', endpoit: 'Ruk_first_order', activeDef: true, preParams: ['b', 'y', 'n'], postParams: ['a'] },
                    { name: 'Второго порядка', endpoit: 'Ruk_second_order', activeDef: true, preParams: ['b', 'y', 'd', 'n'], postParams: ['a'], double: true, },
                ]
            },
            {
                title: 'Система дифференцальных уравнений', subtitles: [
                    { name: 'Система трех уравнений', endpoit: 'defur_sistem_third', thirdSistem: true, preParams: ['b', 'x', 'y', 'z', 'n'], postParams: ['a'], },
                ]
            },
        ]
    },
    {
        title: 'Нелинейные уравнения',
        subtitles: [
            {
                title: 'Методы', subtitles: [
                    { name: 'Метод касательной', endpoit: 'tangent', preParams: ['b', 'e'], postParams: ['a', 'h'], nonlinear: true },
                    { name: 'Метод бисекции', endpoit: 'bisector', preParams: ['b', 'e'], postParams: ['a', 'h'], nonlinear: true },
                    { name: 'Метод хорд', endpoit: 'chords', preParams: ['b', 'e'], postParams: ['a', 'h'], nonlinear: true },
                ]
            },
        ]
    },
]