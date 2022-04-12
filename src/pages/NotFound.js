import "../styles/partials/_not_found.scss"

function NotFound() {

    return (
        <>
            <div className="section single-page not-found">
                <div className="number">404</div>
                <div className="text"><span>Ooops...</span><br/>page not found</div>
            </div>
        </>
    )
}

export default NotFound;