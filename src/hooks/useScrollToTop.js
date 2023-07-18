import { useEffect } from 'react'

function useScrollToTop() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        })
    }, [])
    return null
}

export default useScrollToTop