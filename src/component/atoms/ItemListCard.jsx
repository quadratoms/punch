import React, { useMemo } from 'react';

const CardListItem = ({ items = [] }) => {
  const renderedItems = useMemo(() => {
    return items.map((item, index) => (
      <div key={index} className="px-2 bg-gray-100 rounded-md">
        {item}
      </div>
    ));
  }, [items]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-gray-100">
        <div className="px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
            {renderedItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListItem;
