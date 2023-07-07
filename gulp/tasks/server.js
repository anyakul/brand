export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`,//Выключить для Jekyll, включить для верстки
            //baseDir: `${app.path.build.ht}`,//Включить для Jekyll, выключить для верстки
        },
    })
}