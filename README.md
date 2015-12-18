# mydownload-cli

Download files using the command line


## install
At the moment mydownload-cli is not npm'able. So you must download the source and run `$ npm install -g` in order to use it from the CLI (you may need to run it with `sudo`), or you just simply run it with node `$ nodejs mydownload-cli.js [options]`;

## usage

`$ mydownload-cli --url http://foo.bar.com/file.png --output /some/path/file.png`

There's also an alternative way to run mydownload-cli with `$ nodejs mydownload-cli.js [options]`

You can customize your chart with the many options chaaart provides

```
  -h, --help            output usage information
  -V, --version         output the version number

  -u, --url    [value]   Add a url
  -o, --output <value>   Output file path
```

## contribute

We know, mydownload is a little program, doesnt do much, but its my first contribution using node. But you can fork it, code it, make a pull request and watch it grow strong.