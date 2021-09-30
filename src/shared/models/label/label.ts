import { LangCode } from './lang-code';

export type Label = Record<LangCode, string>;
export type LabelCollection = Record<string, Label>;
