# Skyscanner Backpack Design System

### Overview

This repository holds two main directories, `backpack-precompile` and `backpack.framerfx`

`node_modules` included in certain directories to maintain consistency in what we had cloned at the time we were working on this project.

##### `backpack-precompile`

- `input` contains the backpack design system in it's current form (Before the rebranding)
- `output` contains a similar version with compiled scss, and stripped from flow bindings. Additionally, the files were renamed to .tsx so they could be consumed in an uncompiled state. The output folder was already generated with the current `build.js` script mentioned below.
- `build.js` is the custom script that maps over all components/directories in `input`, and contains the logic to create the `output` directory with the working components as described above

##### `backpack.framerfx`

This is a normal Framer X project, where we are consuming the components from Backpack.

##### Setup Notes

Since we are consuming the "compiled" version of the backpack components (from the output directory described above), we had to consume these components locally (as we dind't publish them anywhere). To do this, we had to use [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/) to complete the setup.

Steps:

- cd into desired output component directory (i.e. `backpack-precompile/output/bpk-component/button`) and run `yarn link --link-folder "/Users/yourusername/Library/Application Support/Framer X/yarn-link-folder"`. The `--link-folder` flag is needed, as Framer X also uses yarn link to manage the Framer Library, and only will be able to resolve links from the framer specificed link folder. Open a new project, and check the `.yarnrc` to find your exact `--link-folder` for your machine.
- After this, cd into `backpack.framerfx/node_modules` and run `yarn link bpk-components-button` (or whichever component library you're working on).
- Lastly, make sure you add the dependency to `backpack.framerfx/package.json`. The button should already be in there.

While doing these steps, I would reccomend having the Framer project closed.
