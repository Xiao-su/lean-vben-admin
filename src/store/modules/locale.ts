
import { defineStore } from 'pinia';
import type { LocaleSetting } from '/#/config';


import { createLocalStorage } from '/@/utils/cache';

const ls = createLocalStorage();

interface LocaleState {
    localInfo: LocaleSetting;
}


// const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocaleSetting;

export const useLocaleStore = defineStore({
    id: 'app-locale',
    // state: (): LocaleState => ({
    //   localInfo: lsLocaleSetting
    // })
})

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
//   return useLocaleStore(store);
}