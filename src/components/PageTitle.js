import '../Css/ComponentStyles/PageTitle.css';

function PageTitle(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.tagline &&
                <p>{props.tagline}</p>
            }
        </div>
    )
}

export default PageTitle;