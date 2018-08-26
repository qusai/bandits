import React, { Component } from 'react'
import styles from './loading.module.scss'

const Loading = () => {
  console.log('loading..')

  const inlineLoadingStyles = {
    backgroundColor: '#466060',
    fontFamily: 'GT America',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100vw',
    height: '100vh',
    zIndex: '100000',
  }

  return (
    <div className={styles.loading} style={inlineLoadingStyles}>
      <h1>Loading...</h1>
    </div>
  )
}

export default Loading
