import { createContext, ReactNode, FC } from 'react';

const _state = {
	siteName: ''
};

interface IAppContext {
	siteName: string;
}

interface Props {
	children: ReactNode;
}

export const AppContext = createContext<IAppContext>(_state);

export const AppProvider: FC<Props> = ({ children }) => {
	const siteName = 'The Spanish Verb Quiz Site';

	return (
		<AppContext.Provider
			value={{
				siteName,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
