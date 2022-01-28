import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from './components/HelloWorld';
export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: 'ts3DoPeLWnDBhX46xosa3F',
            token: 'exO97pv0jXzms2nB8gjtGTr0qBpfyfwS388itQCS1QtuEVLSlDZVWrJj4j6Hhoqkr7A4Bkdo3VsLWuhSorOw'
        }

    ]
})

PLASMIC.registerComponent(HelloWorld, {
    name: 'HelloWorld',
    props: {
        verbose: 'boolean',
        children: 'slot'
    }
})
