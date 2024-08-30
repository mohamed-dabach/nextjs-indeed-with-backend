'use client'
import Header from '@/app/(app)/Header'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'

// export const metadata = {
//     title: 'Laravel - Dashboard',
// }

const Dashboard = () => {
    const { user } = useAuth()

    return (
        <>
            <Header title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden flex shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <p>
                                {' '}
                                Hello: <strong>{user.name}</strong>
                            </p>
                            <p className='text-red-400'>
                                For now Only{' '}
                                <Link
                                    href="dashboard/settings/account"
                                    className="text-blue-600 underline">
                                    Settings Page{' '}
                                </Link>{' '}
                                Working
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
