const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build-misc', () => gulp
  .src('package.json')
  .pipe(gulp.dest('build'))
);

gulp.task('build-bower', () => gulp
  .src('bower_components/**/*')
  .pipe(gulp.dest('build/bower_components'))
);

gulp.task('build-components', () => gulp
  .src('app/components/**/*.html')
  .pipe(gulp.dest('build/app/components'))
);

gulp.task('build-html', () => gulp
  .src(['app/index.html', 'app/splash-screen.html', 'app/app-theme.html'])
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

gulp.task('tests-js', () => gulp
  .src('tests/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015-node6']
  }))
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest('build/tests'))
);

gulp.task('tests-html', () => gulp
  .src('tests/**/*.html')
  .pipe(gulp.dest('build/tests'))
);

const buildTasks = ['build-misc', 'build-bower', 'build-components',
  'build-html', 'build-js'];

gulp.task('build', buildTasks);
gulp.task('tests', ['build', 'tests-js', 'tests-html']);
gulp.task('default', ['build']);
