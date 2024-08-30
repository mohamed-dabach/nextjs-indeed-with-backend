import LinkWhiteBg from '@/componets/settings/LinkWhiteBg'
import SectionHeading from '@/componets/settings/sectionHeading'
import SectionItemDesc from '@/componets/settings/sectionItemDesc'

export default function Session() {
    return (
        <>
            <SectionHeading>Device management</SectionHeading>
            <div className="mt-6">
                <SectionItemDesc>
                    You are currently signed into your Indeed account on these
                    devices.
                </SectionItemDesc>
                <table className="border-collapse  mt-4 text-left  w-full ">
                    <tbody className="">
                        <tr className="">
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                Device
                            </th>
                            <td className="border border-gray-300 p-3 bg-white">
                                Chrome Windows
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                Date Logged In{' '}
                            </th>
                            <td className="border border-gray-300 p-3 ">
                                August 5, 2024{' '}
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                IP Address
                            </th>
                            <td className="border border-gray-300 p-3  ">
                                10.61.2.107 Maroc
                            </td>
                        </tr>
                        <tr className="">
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                Actions
                            </th>
                            <td className="border border-gray-300 p-3  ">
                                This device
                            </td>
                        </tr>
                    </tbody>
                    <tbody className="h-4"></tbody>
                    <tbody className="my-4 ">
                        <tr>
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                Device
                            </th>
                            <td className="border border-gray-300 p-3 bg-white">
                                Chrome Mobile Android
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                Date Logged In{' '}
                            </th>
                            <td className="border border-gray-300 p-3 ">
                                July 9, 2024
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                IP Address
                            </th>
                            <td className="border border-gray-300 p-3  ">
                                41.92.53.52 Casablanca
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                Actions
                            </th>
                            <td className="border border-gray-300 p-3  ">
                                <LinkWhiteBg href="#">Sign out</LinkWhiteBg>
                            </td>
                        </tr>
                    </tbody>
                    <tbody className="h-4"></tbody>
                    <tbody className="my-4 ">
                        <tr>
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                Device
                            </th>
                            <td className="border border-gray-300 p-3 bg-white">
                                Chrome Mobile Android
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                Date Logged In{' '}
                            </th>
                            <td className="border border-gray-300 p-3 ">
                                July 9, 2024
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                IP Address
                            </th>
                            <td className="border border-gray-300 p-3  ">
                                41.92.53.12 Agadir
                            </td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-3 bg-stone-200 ">
                                Actions
                            </th>
                            <td className="border border-gray-300 p-3  ">
                                <LinkWhiteBg href="#">Sign out</LinkWhiteBg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
