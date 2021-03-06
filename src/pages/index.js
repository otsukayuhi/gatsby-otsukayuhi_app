import React from "react"
import { Helmet } from "react-helmet"
import Gnav from "../components/nav"
import styles from "./index.module.scss"

const config = {
  title: "大塚 雄飛｜Otsuka Yuhi",
  desc: "フロントエンドエンジニアです。HTML、CSS、JavaScriptの設計・実装をしています。",
  url: "https://otsukayuhi.app/",
}

const initLines = () => {
  const lineLength = 4
  const lines = []
  for (let i = 0; i < lineLength; i++) {
    lines.push(
      <div
        className={`${styles.line} ${styles[`line${i + 1}`]}`}
        key={i}
      ></div>
    )
  }
  return lines
}

export default () => (
  <div className={styles.container}>
    <Helmet>
      <title>{config.title}</title>
      <meta name="description" content={config.desc} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={config.url} />
      <meta property="og:image" content={`${config.url}og.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="canonical" href={config.url} />
      <html lang="ja" />
    </Helmet>
    {initLines()}
    <h1 className={styles.title}>
      <span className={styles.text}>otsukayuhi.app</span>
    </h1>
    <Gnav />
  </div>
)