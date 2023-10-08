import React from 'react'
import notFound from '../../Media/mistake404.png'
import s from './index.module.css'

export default function NotFoundPage() {
  return (
    <div>

<img className={s.centeredImage} src={notFound} alt="NotFoundPage" />

</div>
  )
}
