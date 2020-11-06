import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPort() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Backt to home</a>
                </Link>
            </h2>
        </Layout>
    )
}
