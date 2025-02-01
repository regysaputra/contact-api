@use('Illuminate\Support\Facades\Vite')

<!-- HTML for static distribution bundle build -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Swagger UI</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('build/swagger/swagger-ui.css') }}" />
    <link rel="icon" type="image/png" href="{{ asset('build/swagger/favicon-32x32.png') }}" sizes="32x32" />
    <link rel="icon" type="image/png" href="{{ asset('build/swagger/favicon-16x16.png') }}" sizes="16x16" />
  </head>

  <body>
    <div id="swagger-ui"></div>
    <script src="{{ asset('build/swagger/swagger-ui-bundle.js') }}" charset="UTF-8"> </script>
    <script src="{{ asset('build/swagger/swagger-ui-standalone-preset.js') }}" charset="UTF-8"> </script>
    <script type="module" src="{{ asset('build/swagger/swagger-initializer.js') }}" charset="UTF-8"> </script>
  </body>
</html>
