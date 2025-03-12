import React from 'react'
import '../assets/css/Subscribe.scss'
import { useTranslation } from 'react-i18next'

const Subscribe = () => {
  const {t}= useTranslation()
  return (
    <>
    <div className="subscribe">
        <h4 style={{width:"500px"}}>{t('signup')}</h4>
        <div className="input-button">
            <input placeholder={t('email')} type="text" name="" id="" />
            <button>{t('subscribe')}</button>
        </div>
    </div>
    </>
  )
}

export default Subscribe