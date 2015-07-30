(function () {
    module.exports = function(grunt) {

        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-uglify');

        grunt.initConfig({
            concat: {
                css: {
                    src: [
                        'app/bower_components/angular-material/angular-material.css',
                        'app/bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.css',
                        'app/assets/css/bootstrap.css',
                        'app/assets/css/ui.css',
                        'app/assets/css/main.css'],
                    dest: 'app/assets/css/app.css'
                },
                app: {
                    options: {
                        separator:';'
                    },
                    src: [
                        'app/bower_components/jquery/dist/jquery.js',
                        'app/bower_components/angular/angular.js',
                        'app/bower_components/angular-animate/angular-animate.js',
                        'app/bower_components/angular-aria/angular-aria.js',
                        'app/bower_components/angular-ui-router/release/angular-ui-router.js',
                        'app/assets/scripts/core/app.module.js',
                        'app/assets/scripts/core/config.route.js',
                        'app/assets/scripts/core/app.controller.js',
                        'app/bower_components/angular-material/angular-material.js',
                        'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                        'app/bower_components/jquery-steps/build/jquery.steps.js',
                        'app/bower_components/toastr/toastr.js',
                        'app/bower_components/bootstrap-file-input/bootstrap.file-input.js',
                        'app/bower_components/jquery.slimscroll/jquery.slimscroll.js',
                        'app/assets/scripts/vendors/jquery.sparkline.min.js',
                        'app/bower_components/flot/jquery.flot.js',
                        'app/bower_components/flot/jquery.flot.resize.js',
                        'app/bower_components/flot/jquery.flot.pie.js',
                        'app/assets/scripts/vendors/jquery.flot.orderBars.js',
                        'app/bower_components/flot/jquery.flot.stack.js',
                        'app/bower_components/flot.curvedlines/curvedLines.js',
                        'app/bower_components/flot.tooltip/js/jquery.flot.tooltip.js',
                        'app/bower_components/flot/jquery.flot.time.js',
                        'app/bower_components/jquery.easy-pie-chart/dist/angular.easypiechart.js',
                        'app/bower_components/angular-ui-tree/dist/angular-ui-tree.js',
                        'app/bower_components/ngmap/build/scripts/ng-map.js',
                        'app/bower_components/ng-tags-input/ng-tags-input.js',
                        'app/assets/scripts/vendors/jquery-jvectormap-1.2.2.min.js',
                        'app/assets/scripts/vendors/jquery-jvectormap-world-mill-en.js',
                        'app/bower_components/angular-loading-bar/src/loading-bar.js',
                        'app/bower_components/angular-scroll/angular-scroll.js',
                        'app/bower_components/textAngular/dist/textAngular-rangy.min.js',
                        'app/bower_components/textAngular/dist/textAngular.min.js',
                        'app/bower_components/textAngular/dist/textAngular-sanitize.min.js',
                        'app/bower_components/Chart.js/Chart.js',
                        'app/bower_components/angular-chart.js/dist/angular-chart.js',
                    ],
                    dest: 'app/assets/scripts/app.js'
                },
                ui: {
                    options: {
                        separator:';'
                    },
                    src: [
                        'app/assets/scripts/core/app.module.js',
                        'app/assets/scripts/core/config.route.js',
                        'app/assets/scripts/core/app.controller.js',
                        'app/assets/scripts/layout/nav.module.js',
                        'app/assets/scripts/layout/nav.directive.js',
                        'app/assets/scripts/layout/ui.module.js',
                        'app/assets/scripts/layout/ui.directive.js'
                    ],
                    dest: 'app/assets/scripts/ui.js'
                }
            },
            cssmin: {
                css: {
                    files: {
                        'app/assets/css/app.min.css': ['app/assets/css/app.css']
                    }
                }
            },
            uglify: {
                options: {
                    mangle: false
                },
                app: {
                    files: {
                        'app/assets/scripts/app.min.js': ['app/assets/scripts/app.js']
                    }
                }
            }
        });

        grunt.registerTask('default', ['concat:css', 'concat:app', 'cssmin:css', 'uglify:app']);

    }
})();