import { FishNameLabel } from '../../../shared/i18n/fish-name';
import { LangCode } from '../../../shared/models/label/lang-code';

export interface FishSelectorViewModel {
  typeName: string;
  label: string;
}

const makeViewModel = (fishTypeName: string): FishSelectorViewModel => {
  const label = FishNameLabel[fishTypeName][LangCode.JaJp] || '';
  return {
    typeName: fishTypeName,
    label,
  };
};

export const makeViewModels = (fishTypeNames: string[]) => {
  return fishTypeNames.map(makeViewModel);
};
