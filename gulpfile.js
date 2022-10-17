const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const htmlmin=require('gulp-htmlmin');

//создаем такс (задачу) для стилей
const styles = () => {
    return src('src/style/**/*.css')
        .pipe(concat('style.css'))
        .pipe(dest('dist'));
} 
//создаем таск (задачу) для html
const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
}


//экпорт тасков (задач)
// exports.styles = styles;
// exports.html = htmlMinify;

exports.default = series(styles, htmlMinify);