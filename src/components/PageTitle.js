import '../Css/ComponentStyles/PageTitle.css';

function PageTitle(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            { props.tagline &&
                <p>{props.tagline}</p>
            }
        </div>
    )
}

export default PageTitle;