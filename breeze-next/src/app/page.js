// import LoginLinks from '@/app/LoginLinks'

import Link from 'next/link'
import LoginLinks from './LoginLinks'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <div>
            <nav className="w-full block">
                <div className="container m-auto flex">
                    <LoginLinks />
                </div>
            </nav>
            <main>
                <h1 className=" p-4">
                    Visit the{' '}
                    <Link
                        className="text-blue-600 underline"
                        href="/dashboard/settings/account">
                        Settings page
                    </Link>{' '}
                    after you login !
                </h1>
            </main>
        </div>
    )
}

export default Home
