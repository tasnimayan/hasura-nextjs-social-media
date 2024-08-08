// This component generates a list of component
// Data array and the component is passed to this component

import React from 'react';

interface ListProps<T> {
  data: T[];
  component: React.ComponentType<{data:T}>;
  emptyFallback?: React.ReactNode;
}

const List = <T,>({ data, component: Component, emptyFallback }: ListProps<T>) => {
  if (data.length === 0) {
    return <>{emptyFallback}</> || <p>No data available</p>;
  }

  return (
    <>
      {data.map((item, index) => (
        <Component key={index} data={item} />
      ))}
    </>
  );
};

export default List;
