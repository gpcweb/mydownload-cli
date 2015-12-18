var http  = require('http');
var path  = require('path');
var fs    = require('fs');
var program = require('commander');
var chalk = require('chalk');

function initialize () {
  var pkg = require(path.join(__dirname, 'package.json')),
      errorMessage = 'Missing %s. Type --help for documentation';

  process.title = 'mydownload-cli';
  program.name = 'mydownload-cli';

  program.on('--help', function () {
    console.log('  Example:');
    console.log('');
    console.log('    $ mydownload-cli --url http://localhost:3001/some_file.pdf --output /some/path/my_awesome_file_name.pdf');
    console.log('    $ mydownload-cli -u http://localhost:3001/some_file.xml  -o /some/path/my_awesome_file_name.pdf');
    console.log('');
  });

  program
    .version(pkg.version)
    .option('-u, --url [value]', 'Add url')
    .option('-o, --output [value]', 'Output file path')
    .parse(process.argv);

  // checking if url is valid
  if (!program.url || typeof program.url !== 'string' || !program.url.match(/(http|https)/)) {
    console.log(chalk.red(errorMessage), 'url type');
    process.exit(1);
  }

  // checking if output path is valid
  if (!program.output || typeof program.output !== 'string') {
    console.log(chalk.red(errorMessage), 'output file path');
    process.exit(1);
  }
}

function saveFile (myUrl, filePath) {

  var request = http.get(myUrl);
  var newFile = fs.createWriteStream(filePath);

  request.on('response', function (response) {
    response.pipe(newFile);

    response.on('end', function () {
      console.log(chalk.yellow("Downloaded!"));
    });
  });

  request.on('error', function(e) {
    fs.unlinkSync(filePath);
    console.log(chalk.red(e));
  });
}

+function () {
  initialize();
  saveFile(program.url, program.output);
}();