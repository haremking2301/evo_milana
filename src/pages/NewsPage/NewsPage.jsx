import React from 'react'
import useScrollToTop from '../../hooks/useScrollToTop'
import News from '../../components/News/News'

function NewsPage() {
    useScrollToTop()
    return (
        <div>
            <div className='h-[40px] bg-[#f3f5f7]'></div>
            <News></News>
        </div>
    )
}

export default NewsPage