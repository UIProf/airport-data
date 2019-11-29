import React from 'react';
import { OVERLAY_TYPES } from '../constants/constants';
import Loader from './Loader';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Overlay.scss'

const Overlay = ({ overlayType, className }) => {
	return (
		<div className={classNames('overlay', [className])}>
			{getChild()}
		</div>
	);

	function getChild() {
		switch (overlayType) {
			case OVERLAY_TYPES.LOADER:
				return <Loader />;
			default:
				return null;
		}
	}
}

Overlay.defaultProps = { overlayType: OVERLAY_TYPES.NONE };

Overlay.propTypes = {
    overlayType: PropTypes.symbol,
	className: PropTypes.string,
}

export default Overlay;