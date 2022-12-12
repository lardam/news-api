import Link from "next/link"

export default function Article({ title }){
    return(
        <>
        <p>Post: {title}</p>
        <Link href='/'>Go to home page</Link>
        </>
    )
}