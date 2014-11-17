module.exports = function(grunt) {
    grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 9001,
					base: './'
				}
			}
		},
       	qunit: {
        	all: {
				options: {
		        	urls: [
						'http://localhost:9001/test/test-for-jquery-1.11.1.html',
						'http://localhost:9001/test/test-for-jquery-1.7.2.html',
						'http://localhost:9001/test/test-for-jquery-1.8.3.html',
						'http://localhost:9001/test/test-for-jquery-1.9.1.html',
						'http://localhost:9001/test/test-for-jquery-2.1.1.html',
	        			// 'http://localhost:9001/test/test-for-zepto.html'
        			]
    			}
    		}
    	},
        clean : {
            dist: 'dist/'
        },
        copy : {
            main : {
                expand: true,
                cwd: 'src/',
                src: ['jquery.mask.js'],
                dest: 'dist/'
            }
        },
        uglify : {
			options : {
				report: 'min'
			},
			dist : {
				src : 'src/jquery.mask.js',
				dest : 'dist/jquery.mask.min.js'
			}
		}
	});

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
  
  // A convenient task alias.
  grunt.registerTask('test', ['connect', 'qunit']);
grunt.registerTask('default', ['clean', 'copy', 'uglify'])
   
};