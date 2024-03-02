import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const location = `${base}/en`;

    if (browser) return await goto(location);
    else throw redirect(308, location);
}
