// @ts-nocheck
import localStore from '$script/localStorage';
import { browser } from '$app/environment';

function fillStyleObject(cfg) {
	if (browser) {
		// wegen document.referrer
		if (cfg.language == null || cfg.language == undefined || cfg.language == '') {
			cfg.language = 'de';
		}
		if (cfg.theme == null || cfg.theme == undefined || cfg.theme == '') {
			cfg.theme = 'night';
		}
	}
}

export default class styleCfg {
	static async save(cfg) {
		if (browser && cfg != null && cfg != undefined) {
			console.log('saving config: ', cfg);
			document.documentElement.setAttribute('data-theme', cfg.theme);
			// document.documentElement.setAttribute('lang', cfg.language);
			localStore.save('jf-portfolio-styleConfig', cfg);
		}
	}

	static async load() {
		if (browser) {
			let cfg = await localStore.load('jf-portfolio-styleConfig');

			if (cfg != null && cfg != undefined) {
				fillStyleObject(cfg);
				console.log('recovered following config: ', cfg);
			} else {
				console.log('no data recovered!');

				cfg = {
					language: 'de',
					theme: 'night'
				};
			}

			document.documentElement.setAttribute('data-theme', cfg.theme);
			document.documentElement.setAttribute('lang', cfg.language);
			return cfg;
		}
	}
}
