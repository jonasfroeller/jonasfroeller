// @ts-nocheck
import localStore from '$script/localStorage';
import { browser } from '$app/environment';

function fillStyleObject(cfg) {
	if (browser) {
		// wegen document.referrer
		if (cfg.language == null || cfg.language == undefined || cfg.language == '') {
			cfg.language = (navigator.language || navigator.userLanguage).includes('de') ? 'de' : 'en';
		}
		if (cfg.theme == null || cfg.theme == undefined || cfg.theme == '') {
			cfg.theme = window.matchMedia('prefers-color-scheme: dark').matches ? 'night' : 'cmyk';
		}
		return cfg;
	}
}

export default class styleCfg {
	static async save(cfg) {
		if (browser) {
			cfg = fillStyleObject(cfg, 'save');
			document.documentElement.setAttribute('data-theme', cfg.theme);
			document.documentElement.setAttribute('lang', cfg.language);
			localStore.save('jf-portfolio-styleConfig', cfg);
		}
	}

	static async load() {
		if (browser) {
			let cfg = await localStore.load('jf-portfolio-styleConfig');

			if (cfg != null && cfg != undefined) {
				cfg = fillStyleObject(cfg);
			} else {
				cfg = {
					language: (navigator.language || navigator.userLanguage).includes('de') ? 'de' : 'en',
					theme: window.matchMedia('prefers-color-scheme: dark').matches ? 'night' : 'cmyk'
				};
			}

			document.documentElement.setAttribute('data-theme', cfg.theme);
			document.documentElement.setAttribute('lang', cfg.language);
			return cfg;
		}
	}
}
