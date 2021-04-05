import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Hero.module.css'

const Hero = () => {
	return (
		<>
			<img className="position-absolute" src="./Logo.jpg" alt="picture of logo"></img>
		<img className={styles.logo} src="./astro.jpg" alt="picture of logo"></img>
			</>
	)
}

export default Hero
