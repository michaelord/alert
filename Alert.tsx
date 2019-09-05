import * as React from 'react';

import './Alert.scss';

import {getModifiers} from 'components/libs';

import IconWarning from 'components/icon/warning.inline.svg';

import {Feedback} from 'components/types';

export type AlertProps = {
	type?: Feedback;
	showIcon?: boolean;
	children?: React.ReactNode;
	isDismissable?: boolean;
};

export const Alert = (props: AlertProps) => {
	const {children, type = 'default', showIcon = true, isDismissable = true} = props;

	if (!children || React.Children.count(children) === 0) {
		return null;
	}

	const base: string = 'alert';

	const atts = {
		className: getModifiers(base, {
			type,
		}),
	};

	return (
		<div {...atts}>
			{isDismissable && <div className={`${base}__countdown`}></div>}
			<div className={`${base}__main`}>
				{showIcon && (
					<div className={`${base}__icon`}>
						<IconWarning className="icon" />
					</div>
				)}

				<div className={`${base}__content`}>{children}</div>

				{isDismissable && <div className={`${base}__close`}>cross</div>}
			</div>
		</div>
	);
};
