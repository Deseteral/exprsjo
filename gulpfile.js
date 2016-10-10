const gulp = require('gulp');
const run = require('gulp-run');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('run', ['build'], () =>
  run('electron build').exec()
);

gulp.task('build-misc', () => gulp
  .src('package.json')
  .pipe(gulp.dest('build'))
);

gulp.task('build-html', () => gulp
  .src('app/index.html')
  .pipe(gulp.dest('build/app'))
);

gulp.task('build-js', () => gulp
  .src('app/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015-node6']
  }))
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest('build/app'))
);

gulp.task('build', ['build-misc', 'build-html', 'build-js']);
gulp.task('default', ['run']);
