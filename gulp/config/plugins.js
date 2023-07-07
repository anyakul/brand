import browsersync from "browser-sync";
import newer from "gulp-newer"; //проверка обновления картинки

export const plugins = {
    browsersync: browsersync,
    newer: newer,
}