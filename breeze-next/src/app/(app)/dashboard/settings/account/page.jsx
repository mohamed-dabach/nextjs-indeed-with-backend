'use client'
import SectionHeading from '@/componets/settings/sectionHeading'
import SectionItem from '@/componets/settings/sectionItem'
import SectionItemHeading from '@/componets/settings/sectionItemHeading'
import SectionItemDesc from '@/componets/settings/sectionItemDesc'
import LinkWhiteBg from '@/componets/settings/LinkWhiteBg'
import { useAuth } from '@/hooks/auth'

export default function Account() {
    const { user } = useAuth()

    return (
        <>
            <SectionHeading>Account Settings</SectionHeading>
            <SectionItem>
                <div>
                    <SectionItemHeading>Account type:</SectionItemHeading>
                    <SectionItemDesc>job seeker</SectionItemDesc>
                </div>
                <LinkWhiteBg href="#">Change account type</LinkWhiteBg>
            </SectionItem>
            {/*  */}
            <SectionItem>
                <div>
                    <SectionItemHeading>Email</SectionItemHeading>
                    <SectionItemDesc>{user?.email}</SectionItemDesc>
                </div>
                <LinkWhiteBg href="#">Change email</LinkWhiteBg>
            </SectionItem>
            {/*  */}
            <SectionItem>
                <div>
                    <SectionItemHeading>Phone number</SectionItemHeading>
                    <SectionItemDesc>{user?.phone}</SectionItemDesc>
                </div>
                <LinkWhiteBg href="#">Change phone number</LinkWhiteBg>
            </SectionItem>
            {/*  */}
            <SectionItem>
                <div>
                    <SectionItemHeading>
                        Third-party applications
                    </SectionItemHeading>
                    <SectionItemDesc>
                        No third-party applications have access to your account
                    </SectionItemDesc>
                </div>
            </SectionItem>
            {/*  */}
            <SectionItem>
                <div>
                    <SectionItemDesc>{user?.email}</SectionItemDesc>
                </div>
                <LinkWhiteBg href="/test">Sign out</LinkWhiteBg>
            </SectionItem>
            {/*  */}

            <div className="py-5">
                <p className="text-red-700 font-bold hover:text-red-900">
                    Close my account
                </p>
            </div>
        </>
    )
}
