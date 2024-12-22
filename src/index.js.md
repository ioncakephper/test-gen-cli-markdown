Sample CLI with options and arguments followed by commands with their own arguments and options

**Example Usage:**

```bash
node ./src/index.js [command] [arguments] [options]
```

**Version:**

```bash
node ./src/index.js -V # or --version
```

```txt
1.0.0
```

**Help:**

```bash
node ./src/index.js -h # or --help
```

```txt
Usage: index [options] [command] [pattern...]

Sample CLI with options and arguments followed by commands with their own arguments and options

Arguments:
  pattern                            Glob filename patterns (default: ["**/*[Oo]utline.yaml"])

Options:
  -h, --help                         display help for command
  -s, --sidebarsFilename <filePath>  Filename and path of sidebars filename (default: "sidebars.js")
  --templates <path>                 Path to templates folder (default: "templates")
  -V, --version                      output the version number

Commands:
  generate|g [options] [filename]    A special command of the app to generate a file.

```

**Arguments:**

| Argument | Description | Default |
|---|---|---|
| `pattern` | Glob filename patterns | ["**/*[Oo]utline.yaml"] |

**Options:**

| Option | Value | Description | Default |
|---|---- |---|---|
| `-h, --help` |  | display help for command |  |
| `-s, --sidebarsFilename` | filePath   | Filename and path of sidebars filename | "sidebars.js" |
| `--templates` | path   | Path to templates folder | "templates" |
| `-V, --version` |  | output the version number |  |

## Commands

- [`generate|g` command](#generate|g-command)

### `generate|g` command

A special command of the app to generate a file.

**Example Usage:**

```bash
node ./src/index.js generate [arguments] [options]
```

**Version:**

```bash
node ./src/index.js generate -V # or --version
```

```txt
1.0.0
```

**Help:**

```bash
node ./src/index.js generate -h # or --help
```

```txt
Usage: index generate|g [options] [filename]

A special command of the app to generate a file.

Arguments:
  filename             Name of file to generate (default: "README.md")

Options:
  --config <filename>  Configuration file (default: "schema.json")
  -h, --help           display help for command

```

**Arguments:**

| Argument | Description | Default |
|---|---|---|
| `filename` | Name of file to generate | "README.md" |

**Options:**

| Option | Value | Description | Default |
|---|---- |---|---|
| `--config` | filename   | Configuration file | "schema.json" |
| `-h, --help` |  | display help for command |  |

