'use client';

import { createContext, useContext } from 'react';
import { useQueryState, parseAsString, parseAsJson } from 'nuqs';
import schema, { FilterValues } from './filter.schema';

interface LayoutInterface {
  tab: string;
  setTab: (tab: string) => void;
  filter: FilterValues;
  setFilter: (filter: FilterValues) => void;
  search: string;
  setSearch: (search: string) => void;
}

const defaultValues: LayoutInterface = {
  tab: 'list',
  setTab: () => {},
  filter: {},
  setFilter: () => {},
  search: '',
  setSearch: () => {},
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

  const [search, setSearch] = useQueryState(
    'search',
    parseAsString.withDefault('').withOptions({
      clearOnDefault: true,
    })
  );

  const [filter, setFilter] = useQueryState(
    'filter',
    parseAsJson(schema.parse).withDefault({}).withOptions({
      clearOnDefault: true,
    })
  );

  return (
    <LayoutContext.Provider
      value={{
        tab,
        setTab,
        filter,
        setFilter,
        search,
        setSearch,
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
