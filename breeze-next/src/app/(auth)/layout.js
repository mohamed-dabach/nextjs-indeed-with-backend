import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/componets/ApplicationLogo'
import LoginLinks from '../LoginLinks'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <nav className="w-full block">
                <div className="container m-auto flex">
                    <LoginLinks />
                </div>
            </nav>
            <div className="text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <Link href="/">
                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                        </Link>
                    }>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
