import styles from './test-component.module.css';

export type TTestComponent = React.PropsWithChildren;

export const TestComponent: React.FC<TTestComponent> = ({ ...rest }) => {
	return (
		<div
			className={styles.base}
			{...rest}
		>
			Component
		</div>
	)
}
