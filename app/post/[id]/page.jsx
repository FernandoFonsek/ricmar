export default function Post ({params}) {
    
    const {id} = params

    return(
        <div>
            <h1>this post is a {id}</h1>
        </div>
    )
}