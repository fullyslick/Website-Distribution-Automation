# Website Distribution

This project contain automation packages for Node.js, that are used before a website is uploaded on a server. The files in `dist` folder of the project, are modified by the **Installed Tools**. These files represents the optimized website ready for upload to the server.


## Installed Tools

- **Node.js**
- **Gulp** - `npm install --global gulp-cli` - command in terminal to install gulp package globally;
- **gulp-sass** - already installed in this project. For any project, navigate to project folder using the terminal and type `npm install gulp-sass` to install gulp package locally;
- **gulp-autoprefixer** - already installed in this project. For any project, navigate to project folder using the terminal and type `npm install gulp-autoprefixer` to install gulp package locally;
- **browser-sync** - already installed in this project. For any project, navigate to project folder using the terminal and type `npm install browser-sync gulp --save-dev` to install gulp package locally;
- **gulp-concat** - already installed in this project. For any project, navigate to project folder using the terminal and type `npm install gulp-concat` to install gulp package locally;
- **pump** and **gulp-uglify** - already installed in this project. For any project, navigate to project folder using the terminal and type `npm install pump` & `npm install gulp-uglify` to install gulp package locally;
- **linter** & **linter-eslint** plugins for **Atom** - and `npm install standard` to use it for linting in Atom. Restart **Atom**, to start linting.
- **gulp-babel** - already installed in this project. For any project, navigate to project folder using the terminal and type `npm install --save-dev gulp-babel babel-core babel-preset-env` to install gulp package locally. More info on [Babel](https://www.npmjs.com/package/gulp-babel);
- **gulp-sourcemaps** - already installed in this project. For any project, navigate to project folder using the terminal and type `npm install gulp-sourcemaps` to install gulp package locally; More info on [How To Use Sourcemaps](https://knpuniversity.com/screencast/gulp/sourcemaps) & [Sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps);

## How To Use The Tools
To use the tools checkout the configuration of the `gulpfile.js`.

### Important Note
You can achieve the same by using [Yoeman](http://yeoman.io) and [generator-default-gulp](https://github.com/kanlidy/generator-default-gulp) generator for Yoeman.
