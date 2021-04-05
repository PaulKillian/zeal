import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Card.module.css'

const Card = () => {
	return (
		<>
		<div className={styles.main}>
			<div className={"d-flex align-items-center justify-content-center flex-wrap col-12 motto-container"}>
				<img className="col-8 motto shadowed position-relative"src="./explore2.jpg"></img>
				<div className={'text-white position-absolute col-5'}>
					<div className="display-1 text-center">EXPLORE</div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 4500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>
		</div>
		<div className={styles.main1}>
			<div className={"d-flex align-items-center justify-content-center flex-wrap col-12 motto-container"}>
				<img className="col-8 motto shadowed position-relative"src="./discover2.jpg"></img>
				<div className={'text-white position-absolute col-5'}>
					<div className="display-1 text-center">DISCOVER</div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 4500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>
		</div>
		<div className={styles.main}>
			<div className={"d-flex align-items-center justify-content-center flex-wrap col-12 motto-container"}>
				<img className="col-8 motto shadowed position-relative"src="./build.jpg"></img>
				<div className={'text-white position-absolute col-5'}>
					<div className="display-1 text-center">BUILD</div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 4500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>
			</div>
			</>
	)
}

export default Card;
