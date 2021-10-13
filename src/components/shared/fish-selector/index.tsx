import { useState } from 'react';
import { FishSelectorViewModel, makeViewModels } from './view-model';
import { fishTypes } from '../../../_data/fish-types';

interface FishSelectorProps {
  onSelectFish?: () => void;
}

const Component = (
  mainItems: FishSelectorViewModel[],
  subItems: FishSelectorViewModel[],
  isOpened: boolean,
  onClickToggle: () => void
): JSX.Element => {
  return (
    <div className='w-full overflow-hidden'>
      <button
        className='flex align-middle justify-center w-full bg-white bg-opacity-60'
        onClick={onClickToggle}
      >
        <span
          className={`material-icons text-xl font-bold text-white ${
            isOpened ? 'transform rotate-180' : ''
          }`}
        >
          expand_more
        </span>
      </button>
      <div
        className={`box-border bg-white bg-opacity-90 transition-max-height duration-500 ease-in-out ${
          !isOpened ? 'max-h-11' : 'max-h-72'
        }`}
      >
        <div className='flex w-full justify-between'>
          {mainItems.map((vm) => (
            <button
              key={vm.typeName}
              className='flex w-1/3 py-2 justify-center items-center font-bold text-xl border-white border-r border-b last:border-r-0'
            >
              {vm.label}
            </button>
          ))}
        </div>
        <div className='flex flex-wrap w-full justify-between'>
          {subItems.map((vm, idx) => (
            <button
              key={vm.typeName}
              className={`flex w-1/4 py-2 justify-center items-center font-bold border-white border-r border-b ${
                idx % 4 === 3 && 'border-r-0'
              }`}
            >
              {vm.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function FishSelector(): JSX.Element {
  const mainItems = makeViewModels(fishTypes.slice(0, 3));
  const subItems = makeViewModels(fishTypes.slice(3, -1));

  const [isOpened, setIsOpened] = useState(false);

  const onClickToggle = () => {
    setIsOpened(!isOpened);
  };

  return Component(mainItems, subItems, isOpened, onClickToggle);
}
