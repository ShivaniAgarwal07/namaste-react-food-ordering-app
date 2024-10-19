import { useRouteError } from "react-router-dom"

const Error = () => {
    const errore= useRouteError()
    return(
        <>
            <h1>Oops! Something went wrong.</h1>
            <h2>{errore.status  }</h2>
            <h3>{errore.statusText}</h3>
        </>
    )
}
export default Error