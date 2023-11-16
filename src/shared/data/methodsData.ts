export const methodsData = [
    {
        title: 'Интеграл',
        subtitles: [
            {
                title: 'Переменный шаг', subtitles: [
                    { name: 'С двойной проверкой', attribute: 'double_step' },
                    { name: 'С тройной проверкой', attribute: 'triple_step' }
                ]
            },
            {
                title: 'Постоянный шаг', subtitles: [
                    { name: 'Способ левых прямоугольников', attribute: 'integrate_left' },
                    { name: 'Способ правых прямоугольников', attribute: 'integrate_right' },
                    { name: 'Способ трапеций', attribute: 'integrate_trapec' },
                    { name: 'Способ порабол', attribute: 'integrate_parabol' },
                ]
            },
            {
                title: 'Кратное', subtitles: [
                    { name: 'Способ кратной проверки', attribute: 'even_alg' },
                ]
            },

        ]
    },
    {
        title: 'Дифференциал',
        subtitles: [
            {
                title: 'Метод Эйлера', subtitles: [
                    { name: 'Первого порядка', attribute: 'Ailer_first_order' },
                    { name: 'Второго порядка', attribute: 'Ailer_second_order' },
                    { name: 'Третьего порядка', attribute: 'Ailer_third_order' },
                    { name: 'Четвертого порядка', attribute: 'Ailer_fourth_order' },
                ]
            },
            {
                title: 'Метод Рунге-Кутта', subtitles: [
                    { name: 'Первого порядка', attribute: 'Ruk_first_order' },
                    { name: 'Второго порядка', attribute: 'Ruk_second_order' },
                    { name: 'Третьего порядка', attribute: 'Ruk_third_order' },
                    { name: 'Четвертого порядка', attribute: 'Ruk_fourth_order' },
                ]
            },
        ]
    },
    {
        title: 'Нелинейные уравнения',
        subtitles: [
            {
                title: 'Метод Эйлера', subtitles: [
                    { name: 'Первого порядка', attribute: 'Ailer_first_order' },
                ]
            },
            {
                title: 'Метод Кутта-ругне', subtitles: [
                    { name: 'Первого порядка', attribute: 'Ailer_first_order' },
                ]
            },
        ]
    },
]