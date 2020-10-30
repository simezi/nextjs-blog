import Link from 'next/link'

export default function FirstPort() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Backt to home</a>
                </Link>
            </h2>
        </>
    )
}