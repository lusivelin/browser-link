import { cardButton, cardWrapper } from './style';
const Card = () => {
    return (
        <div className={cardWrapper()}>
            <article>
                <h1>Hello World, Testing</h1>
                <h4>Lorem ipsum dolor s</h4>
            </article>
            <button className={cardButton({ css: {} })}>Add New</button>
        </div>
    )
}

export default Card