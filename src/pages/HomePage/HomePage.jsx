import React from 'react'
import Intro from '../../components/Intro/Intro'
import SectionMenu from '../../components/SectionMenu/SectionMenu'
import useScrollToTop from '../../hooks/useScrollToTop'
import SectionLove from '../../components/SectionLove/SectionLove'
import News from '../../components/News/News'

function HomePage() {
    useScrollToTop()
    return (
        <div>
            <Intro></Intro>
            <SectionMenu></SectionMenu>
            <SectionLove></SectionLove>
            <News></News>
        </div>
    )
}

export default HomePage