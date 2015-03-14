This is a tiny jQuery plugin for using [KaTeX](https://khan.github.io/KaTeX/)

## Usage

You can [download KaTeX](https://github.com/khan/katex/releases) and [jQuery](http://jquery.com/download/) and host it on your server or include the files on your page directly from a CDN:

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.1.1/katex.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.1.1/katex.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
```

Then inlclude `katex-jq.min.js` and invoke the plugin like so:

```html
<script>
    $('.math').katex();
</script>
```

#### Errors

If any LaTeX syntax error found, a `<span class='err'>` with an error message will be displayed.

If you want to see full error message, turn the debug mode on:

```js
$('.math').katex({
    debug: true,
});
```

#### Options

You can provide an object of options as the only argument. Available options are:

- `displayMode`: `boolean`. If `true` the math will be rendered in display mode, which will put the math in display style (so `\int` and `\sum` are large, for example), and will center the math on the page on its own line. If `false` the math will be rendered in inline mode. (default: `false`)

- `debug`: `boolean`. Whether to display a full debug message or a user-friendly one. Default is `false`.

- `errorMessage`: `string`(optional). Text to display in a non-debug when an error occurs.

For example:

```js
$('.math').katex({ displayMode: true });
```

## Contributing

Feel free to contribute! :)

For contributing to KaTeX see [KaTeX/CONTRIBUTING.md](https://github.com/Khan/KaTeX/blob/master/CONTRIBUTING.md)

## License

KaTeX and katex-jq are licensed under the [MIT License](http://opensource.org/licenses/MIT).
