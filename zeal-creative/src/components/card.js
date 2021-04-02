import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Card.module.css'

const Card = () => {
	return (
		<div className={styles.main}>
			<div className="m-5 d-flex align-items-center justify-content-center position-relative flex-wrap">
				<img className={styles.card} src="/rocketCard.png" alt="image of card"></img>
				<div className={styles.positionText}>What is Lorem Ipsum?
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 4500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
			</div>
			<div className="m-5 d-flex align-items-center justify-content-center position-relative flex-wrap">
				<img className={styles.card} src="/discoverCard.png" alt="image of card" />
				<div className={styles.positionText}>What is Lorem Ipsum?
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 4500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
				</div>
			<div className="m-5 d-flex align-items-center justify-content-center position-relative flex-wrap">
				<img className={styles.card} src="/keyboardCard.png" alt="image of card" />
				<div className={styles.positionText}>What is Lorem Ipsum?
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 4500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
			</div>
			<img className={'col-12'} src="/dividerHome.png" alt="image of card" />
		</div>
	)
}

export default Card;
