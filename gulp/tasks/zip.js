//import {deleteAsync} from "del"
import zipPlugin from "gulp-zip";

export const zip = () => {
    //deleteAsync(`./${app.path.rootFolder}.zip`);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`)
       .pipe(zipPlugin('archive.zip'))
       .pipe(app.gulp.dest(`${app.path.buildFolder}/arhiv`));
}