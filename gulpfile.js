const gulp = require('gulp')
const sftp = require('gulp-sftp-up4')

gulp.task('deploy', () => gulp.src('dist/**/*')
    .pipe(sftp({
        host: 'abme.tk',
        keyContents: process.env.ROOT_KEY,
        remotePath: '/var/www/abme',
        remotePlatform: 'unix',
        user: 'root',
    })))
