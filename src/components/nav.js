import React from "react"
import styles from "./nav.module.scss"

export default () => (
  <nav>
    <ul className={styles.list}>
      <li className={styles.item}>
        <a
          href="https://twitter.com/otsukayuhi"
          target="_blank"
          rel="noopener noreferrer"
        >Twitter</a>
      </li>
      <li className={styles.item}>
        <a
          href="https://qiita.com/otsukayuhi"
          target="_blank"
          rel="noopener noreferrer"
        >Qiita</a>
      </li>
      <li className={styles.item}>
        <a
          href="https://github.com/otsukayuhi"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub</a>
      </li>
      <li className={styles.item}>
        <a
          href="https://note.mu/otsukayuhi"
          target="_blank"
          rel="noopener noreferrer"
        >note</a>
      </li>
      <li className={styles.item}>
        <a
          href="https://otsukayuhi.hatenablog.com/"
          target="_blank"
          rel="noopener noreferrer"
        >Blog</a>
      </li>
    </ul>
  </nav>
)