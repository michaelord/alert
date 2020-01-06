import {Alert} from 'components/alert';
import {Placeholder} from 'components/libs';
import {PlaygroudCode, Playground} from 'components/styleguide';
import React from 'react';
import {AlertProps} from '../Alert';

export const AlertData: AlertProps = {
	children: Placeholder.content({count: 2}),
};

export const AlertDemo = () => (
	<Playground
		fields={[
			{
				name: 'showIcon',
				label: 'Show Icon',
				value: true,
				type: 'switch',
				help: '...',
			},
			{
				name: 'type',
				label: 'Type',
				type: 'radio',
				value: 'info',
				layout: 'boxed',
				help: '...',
				options: [
					{
						label: 'Default',
						value: 'default',
					},
					{
						label: 'Info',
						value: 'info',
					},
					{
						label: 'Error',
						value: 'error',
					},
					{
						label: 'Success',
						value: 'success',
					},
					{
						label: 'Warning',
						value: 'warning',
					},
				],
			},
		]}
	>
		{values => {
			return (
				<>
					<Alert {...AlertData} {...values} />
					<PlaygroudCode name="Alert" config={{...AlertData, ...values}} />
				</>
			);
		}}
	</Playground>
);
