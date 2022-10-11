import { createContext, ReactNode, FC } from 'react';

interface IAppContext {
	siteName: string;
}

interface Props {
	children: ReactNode;
}

export const AppContext = createContext<IAppContext | null>(null);

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
