import { authors } from '../../shared/data/authors'
import './AuthorPage.scss'

const AuthorPage = () => {
    return <div className="author">
        <div className="fir__section">
            {authors.map((autor) =>
                <div className="card" key={autor.id}>
                    <img src={autor.img} alt={autor.name} />
                    <div className="name">{autor.name}</div>
                    <a className="email" href={`mailto:${autor.email}`}>{autor.email}</a>
                </div>)}
        </div>
    </div>
}

export default AuthorPage