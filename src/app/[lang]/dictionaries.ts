import 'server-only'
import { DataSchema, type AppData } from '@/data/schemas'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => DataSchema.parse(module.default)),
  pt: () => import('./dictionaries/pt.json').then((module) => DataSchema.parse(module.default)),
}

export const getDictionary = async (locale: 'en' | 'pt'): Promise<AppData> =>
  dictionaries[locale]()