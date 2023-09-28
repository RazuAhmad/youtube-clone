"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const page = ({ params }) => {

    return (
        <div>
            <h1 className="text-black">This is what is is ug {params.slug}
            </h1>
        </div>
    )
}

export default page