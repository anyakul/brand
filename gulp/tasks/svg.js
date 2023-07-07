import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';

export const svg = () => {
  return app.gulp.src(app.path.src.svg)
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(app.gulp.dest(app.path.build.images));
}

/*
gulp.task("sprite", function () {
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});
*/
