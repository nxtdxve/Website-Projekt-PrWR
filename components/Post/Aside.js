import BLOG from '@/blog.config'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import { ChevronLeftIcon, ArrowUpIcon } from '@heroicons/react/outline'

const Aside = ({ subPageTitle, frontMatter }) => {
  const [showButton, setShowButton] = useState(false)
  const [showSubPageTitle, setShowSubPageTitle] = useState(false)

  useEffect(() => {
    if (frontMatter.title !== subPageTitle) {
      setShowSubPageTitle(true)
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 900) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [frontMatter, subPageTitle])
  return (
    <>
      <aside className='hidden sticky md:flex md:flex-col md:items-center md:self-start md:ml-8 md:inset-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <div>
            {showSubPageTitle && (
              <Link passHref href={`${BLOG.path}/${frontMatter.slug}`} scroll={false}>
                <a className='text-gray-600 dark:text-day hover:text-gray-400 dark:hover:text-gray-400'>
                  <ChevronLeftIcon className='w-5 h-5' />
                </a>
              </Link>
            )}
            {showButton && (
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                className='text-gray-600 dark:text-day hover:text-gray-400 dark:hover:text-gray-400'
              >
                <ArrowUpIcon className='w-5 h-5' />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}

export default Aside
