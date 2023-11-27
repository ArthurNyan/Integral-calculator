import { methodProp } from "../assets/lib/methodProp";
import { methodsProp } from "../assets/lib/methodsProp";

export const methodsData: methodProp[] = [
    {
        title: 'Интеграл',
        subtitles: [
            {
                title: 'Переменный шаг', subtitles: [
                    { name: 'С двойной проверкой', endpoit: 'double_step', preParams: 'ben', postParams: 'a' },
                    { name: 'С тройной проверкой', endpoit: 'triple_step', preParams: 'ben', postParams: 'a' }
                ]
            },
            {
                title: 'Постоянный шаг', subtitles: [
                    { name: 'Способ левых прямоугольников', endpoit: 'integrate_left', preParams: 'bn', postParams: 'a' },
                    { name: 'Способ правых прямоугольников', endpoit: 'integrate_right', preParams: 'bn', postParams: 'a' },
                    { name: 'Способ трапеций', endpoit: 'integrate_trapec', preParams: 'bn', postParams: 'a' },
                    { name: 'Способ порабол', endpoit: 'integrate_parabol', preParams: 'bn', postParams: 'a' },
                ]
            },
            {
                title: 'Кратное', subtitles: [
                    { name: 'Способ кратной проверки', endpoit: 'even_alg', preParams: 'bdn', postParams: 'ac', double: true },
                ]
            },

        ]
    },
    {
        title: 'Дифференциал',
        subtitles: [
            {
                title: 'Метод Эйлера', subtitles: [
                    { name: 'Первого порядка', endpoit: 'Ailer_first_order', activeDef: true, preParams: 'byn', postParams: 'a' },
                    { name: 'Второго порядка', endpoit: 'Ailer_second_order', activeDef: true, preParams: 'bydn', postParams: 'a', double: true },
                ]
            },
            {
                title: 'Метод Рунге-Кутта', subtitles: [
                    { name: 'Первого порядка', endpoit: 'Ruk_first_order', activeDef: true, preParams: 'byn', postParams: 'a' },
                    { name: 'Второго порядка', endpoit: 'Ruk_second_order', activeDef: true, preParams: 'bydn', postParams: 'a', double: true },
                ]
            },
        ]
    },
    {
        title: 'Нелинейные уравнения',
        subtitles: [
            {
                title: 'Метод Эйлера', subtitles: [
                    { name: 'Первого порядка', endpoit: 'Ailer_first_owdrder', postParams: '', preParams: '' },
                ]
            },
            {
                title: 'Метод Кутта-ругне', subtitles: [
                    { name: 'Первого порядка', endpoit: 'Ailer_firswdwadt_order', postParams: '', preParams: '' },
                ]
            },
        ]
    },
]