const fs = require("fs-extra");
const glob = require("glob");
const flowRemoveTypes = require("flow-remove-types");
const sass = require("node-sass");
const sassFunctions = require("./input/bpk-mixins/sass-functions");

const packageInputPath = `${__dirname}/input`;
const packageOutputPath = `${__dirname}/output`;
const inputComponentNames = fs.readdirSync(packageInputPath);
// .filter(name => name === "bpk-component-button");

// Loop through input components
for (const inputComponentName of inputComponentNames) {
  // Copy to input package output directory
  fs.copySync(
    `${packageInputPath}/${inputComponentName}`,
    `${packageOutputPath}/${inputComponentName}`
  );

  const jsFilePathsToTranspile = glob
    .sync(`${packageInputPath}/${inputComponentName}/**/*.js`)
    .concat(glob.sync(`${packageInputPath}/${inputComponentName}/*.js`));

  for (const jsFilePathToTranspile of jsFilePathsToTranspile) {
    const outputPath = jsFilePathToTranspile.replace(
      packageInputPath,
      packageOutputPath
    );
    const input = fs.readFileSync(jsFilePathToTranspile, "utf8");
    let output = flowRemoveTypes(input).toString();

    // Determine if this file included flow types - we use this to calculate if we need to re-write the component and change it's extension to .jsx
    // @TODO use regex string to determine if file contained JSX
    let shouldConvertToTsx =
      input.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, "") !==
      output.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, "");

    if (shouldConvertToTsx) {
      const originalOutputPath = outputPath;
      const rewrittenOutputPath = outputPath.replace(".js", ".tsx");

      console.log(
        `${shouldConvertToTsx} Writing tsx file to ${rewrittenOutputPath}`
      );

      output = output
        .replace(/\.scss/g, ".css")
        .replace("import React", "import * as React")
        .replace("import PropTypes", "import * as PropTypes")
        .replace(/\,\s.*{\s.*}/g, "");

      // Write to file an replace .js extension with .tsx
      fs.writeFileSync(rewrittenOutputPath, output);

      // Remove original JS file
      fs.removeSync(originalOutputPath);
    }
  }

  const scssFilePathsToTranspile = glob
    .sync(`${packageInputPath}/${inputComponentName}/**/*.scss`)
    .concat(glob.sync(`${packageInputPath}/${inputComponentName}/*.scss`));

  for (const scssFilePathToTranspile of scssFilePathsToTranspile) {
    const outputPath = scssFilePathToTranspile.replace(
      packageInputPath,
      packageOutputPath
    );

    console.log(`Writing SCSS file to ${outputPath}`);

    const input = fs.readFileSync(scssFilePathToTranspile, "utf8");

    const result = sass.renderSync({
      data: input,
      outputStyle: "compressed",
      functions: sassFunctions,
      importer: (url, prev, done) => {
        console.log(`[${inputComponentName}] Before ${url}`);
        if (url.includes("~")) {
          // Replace ~ with path of package
          url = url.replace(`~`, `${packageInputPath}/`);

          if (url === `${packageInputPath}/bpk-mixins`) {
            // Add index to URL - a reference to ~/bpk-mixins assumes ~/bpk-mixins/_index
            url += `/_index`;
          }
        } else if (url === "variables") {
          // For some reason variables is occasionally referenced without a preceding underscore
          url = `${packageInputPath}/${inputComponentName}/src/_${url}`;
        } else if (
          inputComponentName === "bpk-component-tooltip" &&
          url === "src/bonds"
        ) {
          // bpk-component-tooltip references mixins
          url = `${packageInputPath}/bpk-mixins/src/_bonds`;
        } else if (url.startsWith("./") && url.endsWith(".scss")) {
          // resolve relative path to absolute path
          url = url.replace(
            "./",
            `${packageInputPath}/${inputComponentName}/src/`
          );
        } else if (inputComponentName === "bpk-mixins") {
          // Prepend filename with an underscore
          const filename = url.match(/([^\/]+$)/g)[0];
          if (url.startsWith("../")) {
            url = url.replace("../", "src/");
          } else if (url.startsWith("dist/scss")) {
            const prevFilename = prev.match(/([^\/]+$)/g)[0];
            url = `${prev.replace(prevFilename, `dist/scss/${filename}`)}`;
            return {
              file: url
            };
          } else if (!url.startsWith("src/")) {
            if (url === "index") {
              // url = `src/${url}`;
            } else {
              url = `src/mixins/${url}`;
            }
          }

          url = `${packageInputPath}/${inputComponentName}/${url.replace(
            /([^\/]+$)/g,
            `_${filename}`
          )}`;
        } else if (inputComponentName === "bpk-svgs") {
          url = `${packageInputPath}/${inputComponentName}/${url}`;
        }
        console.log(`[${inputComponentName}] After ${url}`);
        return {
          file: url
        };
      }
    });

    fs.writeFileSync(
      outputPath.replace(".scss", ".css"),
      result.css.toString()
    );

    // Remove original SCSS file
    fs.removeSync(outputPath);
  }
}
