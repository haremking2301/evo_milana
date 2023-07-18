import React from 'react'
import Intro from '../../components/Intro/Intro'
import SectionMenu from '../../components/SectionMenu/SectionMenu'
import useScrollToTop from '../../hooks/useScrollToTop'
import SectionLove from '../../components/SectionLove/SectionLove'

function HomePage() {
    useScrollToTop()
    return (
        <div>
            <Intro></Intro>
            <SectionMenu></SectionMenu>
            <SectionLove></SectionLove>
        </div>
    )
}

export default HomePage