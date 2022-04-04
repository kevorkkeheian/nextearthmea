import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}> 
        <i class="bi bi-code-slash fw-bold m-1"></i>
        with 💙
        by <span class="fw-bold ms-1"> <a class="text-decoration-none" href="https://codgram.com">Codgram</a></span>
      </footer>
    </>
  )
}
