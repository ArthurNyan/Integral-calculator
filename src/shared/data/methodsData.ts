export const methodsData = [
    {
        title: 'Интеграл',
        subtitles: [
            {
                title: 'Переменный шаг', subtitles: [
                    { name: 'С двойной проверкой', attribute: 'double_step' },
                    { name: 'С двойной проверкой', attribute: 'triple_step' }
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
                    { name: 'Первого порядка', attribute: 'Auler_frist_order' },
                    { name: 'Второго порядка', attribute: 'Auler_second_order' },
                    { name: 'Третьего порядка', attribute: 'Auler_third_order' },
                    { name: 'Четвертого порядка', attribute: 'Auler_fourth_order' },
                ]
            },
            {
                title: 'Метод Рунге-Кутта', subtitles: [
                    { name: 'Первого порядка', attribute: 'Ruk_frist_order' },
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
                    { name: 'Первого порядка', attribute: 'Auler_frist_order' },
                ]
            },
            {
                title: 'Метод Эйлера', subtitles: [
                    { name: 'Первого порядка', attribute: 'Auler_frist_order' },
                ]
            },
        ]
    }
]