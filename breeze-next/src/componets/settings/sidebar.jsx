import { FaUser } from 'react-icons/fa'
import SideBarItemLink from './sideBarItemLink'
import { MdEmail, MdOutlineDesktopWindows } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'

export default function SideBar({ currentPath, handleSetActive }) {
    return (
        <>
            <aside className="min-h-[calc(100vh-60px)]">
                <h1 className="font-bold text-4xl py-4 pl-4">Settings</h1>
                <ul className=" font-medium mt-5">
                    <SideBarItemLink
                        to={'/dashboard/settings/account'}
                        currentPath={currentPath}
                        onClick={() => handleSetActive(false)}>
                        <FaUser className="w-5 h-5" />

                        <div>
                            <h3 className="font-semibold text-xl">
                                Account Settings
                            </h3>
                            <p className="font-normal text-[13px]">
                                Contact information and password
                            </p>
                        </div>
                    </SideBarItemLink>
                    <SideBarItemLink
                        to={'/dashboard/settings/notification'}
                        currentPath={currentPath}
                        onClick={() => handleSetActive(false)}>
                        <MdEmail className="w-5 h-5" />
                        <div>
                            <h3 className="font-semibold text-xl">
                                Email Settings
                            </h3>
                            <p className="font-normal text-[13px]">
                                Contact information and password
                            </p>
                        </div>
                    </SideBarItemLink>
                    <SideBarItemLink
                        to={'/dashboard/settings/session'}
                        currentPath={currentPath}
                        onClick={() => handleSetActive(false)}>
                        <MdOutlineDesktopWindows className="w-5 h-5" />
                        <div>
                            <h3 className="font-semibold text-xl">
                                Device Managment
                            </h3>
                            <p className="font-normal text-[13px]">
                                Manage your active devices and sessions
                            </p>
                        </div>
                    </SideBarItemLink>
                    <SideBarItemLink
                        to={'/dashboard/settings/privacy'}
                        currentPath={currentPath}
                        onClick={() => handleSetActive(false)}>
                        <IoMdLock className="w-5 h-5" />

                        <div>
                            <h3 className="font-semibold text-xl">
                                Privacy Settings
                            </h3>
                            <p className="font-normal text-[13px]">
                                Information about Indeed privacy settings
                            </p>
                        </div>
                    </SideBarItemLink>
                </ul>
            </aside>
        </>
    )
}
