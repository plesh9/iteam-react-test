'use client'
import type { FC } from 'react'
import PageLayout from '@widgets/PageLayout'
import SearchJobsForm from '@widgets/SearchJobsForm'

const page: FC = () => {
    return (
        <PageLayout>
            <SearchJobsForm title='Search Jobs' />
        </PageLayout>
    )
}

export default page
