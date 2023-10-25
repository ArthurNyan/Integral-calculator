import './AuthorPage.scss'

const autors = [
    {
        id: 1,
        name: 'Нахатакян Артур Романович',
        email: 'aaryan@aaryan.ru',
        img: '../../../pin.jpeg'
    },
    {
        id: 2,
        name: 'Спирянов Максим Дмитриевич',
        email: 'maxim87858@mail.ru',
        img: '../../../Krosh.jpg'
    },
    {
        id: 3,
        name: 'Киняев Илья Константинович',
        email: 'email',
        img: '../../../esh.jpg'
    },
    {
        id: 4,
        name: 'Магер Егор Владимирович',
        email: 'egor.mager.hl@mail.ru',
        img: '../../../kopat.jpeg'
    },
    {
        id: 5,
        name: 'Сурков Андрей Анатольевич',
        email: 'andrey.surk.2904@gmail.com',
        img: '../../../los.jpg'
    },
]

const AuthorPage = () => {
    return <div className="author">
        <div className="fir__section">
            {autors.map((autor) =>
                <div className="card" key={autor.id}>
                    <img src={autor.img} alt={autor.name} />
                    <div className="name">{autor.name}</div>
                    <a className="email" href={`mailto:${autor.email}`}>{autor.email}</a>
                </div>)}
        </div>
    </div>
}

export default AuthorPage