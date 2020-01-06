import {Icon} from 'components/icon';
import IconError from 'components/icon/error.inline.svg';
import IconInfo from 'components/icon/info.inline.svg';
import IconSuccess from 'components/icon/success.inline.svg';
import IconWarning from 'components/icon/warning.inline.svg';
import {getModifiers} from 'components/libs';
import * as Types from 'components/types';
import {CloseButton} from 'components/ui';
import React, {useState} from 'react';
import './Alert.scss';

const ICONS: any = {
	warning: IconWarning,
	error: IconError,
	info: IconInfo,
	success: IconSuccess,
};

export type AlertProps = {
	type?: Types.Feedback;
	showIcon?: Types.TrueFalse;
	children?: Types.Children;
	isDismissable?: Types.TrueFalse;
	className?: Types.ClassName;
};

export const Alert = (props: AlertProps) => {
	const {children, type = 'default', showIcon = true, isDismissable = false, className} = props;

	if (!children || React.Children.count(children) === 0) {
		return null;
	}

	const [show, setShow] = useState(true);

	const base: string = 'alert';

	const atts = {
		// ref,
		className:
			getModifiers(base, {
				type,
				hidden: !show,
			}) + `${className ? ` ${className}` : ''}`,
	};

	const onDismiss = (ev: React.MouseEvent) => {
		ev.preventDefault();

		setShow(false);
	};

	const icon = (ICONS as any)[type] || null;

	return (
		<div {...atts}>
			{/*
			{isDismissable && <div className={`${base}__countdown`}></div>}
			*/}
			<div className={`${base}__main`}>
				{showIcon && icon && (
					<div className={`${base}__icon`}>
						<Icon icon={icon} />
					</div>
				)}

				<div className={`${base}__content`}>{children}</div>

				{isDismissable && (
					<div className={`${base}__close`}>
						<CloseButton onClick={onDismiss} />
					</div>
				)}
			</div>
		</div>
	);
};
