import webpHtmlNosvg from "gulp-webp-html-nosvg"

  export const copy = () => {//Выключить для Jekyll, включить для верстки
  return app.gulp.src(app.path.src.html)
      .pipe(webpHtmlNosvg())
    .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
}

 /*export const copy = () => {//Включить для Jekyll, выключить для верстки
    return app.gulp.src(app.path.src.ht)
       .pipe(webpHtmlNosvg())
       .pipe(app.gulp.dest(app.path.build.html))
       //.pipe(app.gulp.dest())
       .pipe(app.plugins.browsersync.stream())
}*/