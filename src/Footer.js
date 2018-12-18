import React from 'react'
import { Link } from 'react-router-dom'

const FooterNav = ({ type }) => {
	return (
		<footer className="footer-nav">
			<div className="open-search">
				<Link to='/search'>Add a book</Link>
			</div>
		</footer>
	);
}

export default FooterNav
