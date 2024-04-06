import React from 'react'
import Link from 'next/link'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

import classses from './index.module.scss'
import Image from 'next/image'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav className={[classses.header]}>
      <Gutter className={classses.wrap}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="logo" className={classses.logo} />
        </Link>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
