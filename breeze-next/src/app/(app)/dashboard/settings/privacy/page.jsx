import Link from 'next/link'
import SectionHeading from '@/componets/settings/sectionHeading'
import SectionItemDesc from '@/componets/settings/sectionItemDesc'
import SectionItemHeading from '@/componets/settings/sectionItemHeading'
import OldBlueLink from '@/componets/oldBlueLink'

export default function Privacy() {
    return (
        <>
            <SectionHeading>Privacy settings</SectionHeading>
            <section className="mt-6">
                <SectionItemHeading>Types of data collected</SectionItemHeading>
                <SectionItemDesc>
                    We collect different types of data depending on how you
                    interact with us. This includes, for example, when you're on
                    our site, responding to our promotional materials, and using
                    our services to help you find a job. For example, we may
                    collect your email address and resume information when you
                    create your account. As another example, we may collect
                    information about your activity on our site, such as the
                    searches you conduct and jobs you apply to. For more
                    information on the types of data we collect, check out{' '}
                    <OldBlueLink href="#"> Section 2 </OldBlueLink>of our
                    Privacy Policy.
                </SectionItemDesc>
            </section>
            <section className="mt-6">
                <SectionItemHeading>
                    How my data is used and disclosed
                </SectionItemHeading>
                <SectionItemDesc>
                    Indeed uses data to help people get jobs. How we use and
                    disclose your data also depends on how you use our site. We
                    go into much greater detail in Sections 4, 5 and 9 of our
                    Privacy Policy explaining our use and disclosure of your
                    data, but this can include to provide our services to you,
                    to protect you when you use our site, and to measure,
                    improve, and promote our services.
                </SectionItemDesc>
            </section>
            <section className="mt-6">
                <SectionItemHeading>Cookies</SectionItemHeading>
                <SectionItemDesc>
                    Our Cookie Policy explains how we use cookies, web beacons
                    and similar technologies, including some offered by
                    third-parties, to collect data about you. For more
                    information about our use of these technologies and your
                    ability to opt-out of them, please check out our{' '}
                    <OldBlueLink href="#">Cookie Policy.</OldBlueLink>
                </SectionItemDesc>
            </section>
            <section className="mt-6">
                <SectionItemHeading>
                    Accessing and Deleting My Data
                </SectionItemHeading>
                <SectionItemDesc>
                    Indeed offers all of its users rights to access and delete
                    their data, as detailed in{' '}
                    <OldBlueLink href="#">Section 8</OldBlueLink> of our Privacy
                    Policy. To access or delete your data held by Indeed, just
                    fill out this <OldBlueLink href="#">form</OldBlueLink> .
                </SectionItemDesc>
            </section>
            <section className="mt-6">
                <SectionItemHeading>Make My Resume Hidden</SectionItemHeading>
                <SectionItemDesc>
                    You can also set your Indeed Resume to "hidden" by visiting
                    your
                    <OldBlueLink href="#">
                        {' '}
                        Resume Privacy Settings.
                    </OldBlueLink>{' '}
                    For more information on what it means to have a "searchable"
                    or "hidden" Indeed Resume, please visit{' '}
                    <OldBlueLink href="#">Section 4</OldBlueLink> our Privacy
                    Policy.
                </SectionItemDesc>
            </section>
            <section className="mt-6 border-t-2 py-5 border-b-2">
                <SectionItemHeading>
                    Calls from Employers on Indeed
                </SectionItemHeading>
                <SectionItemDesc>
                    You are currently unsubscribed from receiving calls from
                    Indeed and employers who use Indeed, including using
                    automated call technology, forwarded, or recorded calls.
                    Calls from employers on Indeed about your applications will
                    not be forwarded to you. You will be subscribed again the
                    next time you apply to a job through Indeed.
                </SectionItemDesc>
            </section>
        </>
    )
}
