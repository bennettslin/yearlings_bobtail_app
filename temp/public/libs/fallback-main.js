cfg({
    'libs': {

        'react': {
            'urls': [
                '//cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.js',
                'libs/react.js'
            ]
        }

    }
});

// Load React
req(function(react) {
    react("body").append("<h3 class='alert-success'>Loaded jQuery!</h3>");
});