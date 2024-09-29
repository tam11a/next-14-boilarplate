'use client';

import { createContext, useContext } from 'react';
import { useQueryState, parseAsString } from 'nuqs';

interface LayoutInterface {
  tab: string;
  setTab: (tab: string) => void;
}

const defaultValues: LayoutInterface = {
  tab: 'list',
  setTab: () => {},
};

const LayoutContext = createContext<LayoutInterface>(defaultValues);

export default function LayoutStore({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [tab, setTab] = useQueryState(
    'tab',
    parseAsString.withDefault('list').withOptions({
      clearOnDefault: true,
    })
  );

  return (
    <LayoutContext.Provider
      value={{
        tab,
        setTab,
        // Add your context values here
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}
