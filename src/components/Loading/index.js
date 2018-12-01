import React, { Component } from 'react'
import styles from './loading.module.scss'

const Loading = () => {
  const inlineLoadingStyles = {
    alignItems: 'center',
    backgroundColor: '#466060',
    display: 'flex',
    fontFamily: 'GT America',
    height: '100vh',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100vw',
    zIndex: '100000',
  }

  return (
    <div className={styles.loading} style={inlineLoadingStyles}>
      <span className={styles.loading_spinner} />
    </div>
  )
}

export default Loading
