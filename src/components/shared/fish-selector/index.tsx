import { FishSelectorViewModel, makeViewModels } from './view-model';
import { fishTypes } from '../../../_data/fish-types';

interface FishSelectorProps {
  onSelectFish?: () => void;
}

const Component = (viewModels: FishSelectorViewModel[]): JSX.Element => {
  return (
    <div className='fixed bottom-0 w-full box-border bg-white bg-opacity-50'>
      <div className='flex w-full justify-between'>
        {viewModels
          .filter((_, idx) => idx < 3)
          .map((vm) => (
            <button
              key={vm.typeName}
              className='flex w-1/3 py-2 justify-center items-center font-bold text-xl border-blue bg-white border-r-2 last:border-r-0'
            >
              {vm.label}
            </button>
          ))}
      </div>
    </div>
  );
};

export default function FishSelector(): JSX.Element {
  const viewModels = makeViewModels(fishTypes);
  return Component(viewModels);
}
