import { FishSelectorViewModel, makeViewModels } from './view-model';
import { fishTypes } from '../../../_data/fish-types';

interface FishSelectorProps {
  onSelectFish?: () => void;
}

const Component = (
  mainItems: FishSelectorViewModel[],
  subItems: FishSelectorViewModel[]
): JSX.Element => {
  return (
    <div className='fixed bottom-0 w-full box-border bg-white bg-opacity-90'>
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
            className={`flex w-1/4 py-2 justify-center items-center font-bold text-xl border-white border-r border-b ${
              idx % 4 === 3 && 'border-r-0'
            }`}
          >
            {vm.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function FishSelector(): JSX.Element {
  const mainItems = makeViewModels(fishTypes.slice(0, 3));
  const subItems = makeViewModels(fishTypes.slice(3, -1));
  return Component(mainItems, subItems);
}
