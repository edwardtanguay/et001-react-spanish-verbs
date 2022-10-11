import { createContext, ReactNode, FC, useEffect, useState } from 'react';
import axios from 'axios';

const unstructuredSpanishVerbUrl = 'https://edwardtanguay.vercel.app/share/spanishVerbKinds.json';

interface IAppContext {
	siteName: string;
	unstructuredSpanishVerbs: any
}

const _state = {
	siteName: '',
	unstructuredSpanishVerbs: []
};

interface Props {
	children: ReactNode;
}

export const AppContext = createContext<IAppContext>(_state);

export const AppProvider: FC<Props> = ({ children }) => {
	const [unstructuredSpanishVerbs, setUnstructuredSpanishVerbs] = useState([]);
	const siteName = 'The Spanish Verb Quiz Site';

useEffect(() => {
	(async () => {
		setUnstructuredSpanishVerbs((await axios.get(unstructuredSpanishVerbUrl)).data);
	})();
}, []);

	return (
		<AppContext.Provider
			value={{
				siteName,
				unstructuredSpanishVerbs
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
