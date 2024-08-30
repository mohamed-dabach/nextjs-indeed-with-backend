import { IoIosArrowForward, IoMdInformationCircle } from 'react-icons/io'
import Checkbox from '@/componets/settings/checkBox'
import SectionHeading from '@/componets/settings/sectionHeading'
import SectionItem from '@/componets/settings/sectionItem'
import SectionItemDesc from '@/componets/settings/sectionItemDesc'
import SectionItemHeading from '@/componets/settings/sectionItemHeading'
import LinkWhiteBg from '@/componets/settings/LinkWhiteBg'
import Link from 'next/link'

export default function Notification() {
    return (
        <>
            <div className="mt-10">
                <SectionHeading>Subscriptions</SectionHeading>
                <SectionItem>
                    <div>
                        <SectionItemHeading>
                            Job and company alerts
                        </SectionItemHeading>
                        <SectionItemDesc>
                            Emails about new jobs matching your job searches and
                            companies you follow
                        </SectionItemDesc>
                    </div>
                    <IoIosArrowForward className="w-5 h-5 self-center" />
                </SectionItem>
            </div>

            <div className="mt-10">
                <SectionHeading>Employer and recruiter emails</SectionHeading>
                <SectionItem>
                    <div className="w-full">
                        <div className="flex justify-between w-full">
                            <div>
                                <SectionItemHeading>
                                    Application and account status
                                </SectionItemHeading>
                                <SectionItemDesc>
                                    Updates on your active job applications and
                                    Indeed account
                                </SectionItemDesc>
                            </div>
                            <LinkWhiteBg href={'#'}>Change</LinkWhiteBg>{' '}
                        </div>
                        <div className="mt-5">
                            <IoMdInformationCircle className="inline" />
                            <span className="text-[12px]">
                                To stop receiving these messages, adjust your
                                <Link
                                    href="#"
                                    className="text-blue-900 underline">
                                    {' '}
                                    Resume Privacy Settings
                                </Link>
                            </span>
                        </div>
                    </div>
                </SectionItem>
            </div>

            <div className="mt-10">
                <SectionHeading>Additional emails</SectionHeading>
                <SectionItem>
                    <div>
                        <SectionItemHeading>
                            Application and account status
                        </SectionItemHeading>
                        <SectionItemDesc>
                            Updates on your active job applications and Indeed
                            account
                        </SectionItemDesc>
                    </div>
                    <Checkbox />
                </SectionItem>
                {/*  */}
                <SectionItem>
                    <div>
                        <SectionItemHeading>
                            Recommended jobs
                        </SectionItemHeading>
                        <SectionItemDesc>
                            Targeted job recommendations based on your resume
                            and activity
                        </SectionItemDesc>
                    </div>
                    <Checkbox />
                </SectionItem>
                {/*  */}
                <SectionItem>
                    <div>
                        <SectionItemHeading>Career guidance</SectionItemHeading>
                        <SectionItemDesc>
                            Messages with career advice, company information,
                            resume suggestions, and more
                        </SectionItemDesc>
                    </div>
                    <Checkbox />
                </SectionItem>
                {/*  */}
                <SectionItem>
                    <div>
                        <SectionItemHeading>Indeed feedback</SectionItemHeading>
                        <SectionItemDesc>
                            Requests from Indeed to provide feedback or
                            participate in user studies and surveys
                        </SectionItemDesc>
                    </div>
                    <Checkbox />
                </SectionItem>
                {/*  */}
            </div>

            <div className="border-[1.5px] p-5 mt-8 rounded-lg">
                <h5>Want to get fewer emails from us?</h5>
                <Link
                    href={'#'}
                    className="text-blue-800 text-sm font-bold w-fit my-2 block">
                    Unsubscribe from comercial emails
                </Link>
                <p className="text-[12px] text-gray-500 ">
                    Indeed may still send you emails for confirmations and other
                    messages relevant to how you interact with Indeed. You can
                    unsubscribe from job alert, company alert, and daily job
                    feed subscriptions by updating your individual preferences
                    on the <strong>Job and company alerts</strong> page.
                </p>
            </div>
        </>
    )
}
