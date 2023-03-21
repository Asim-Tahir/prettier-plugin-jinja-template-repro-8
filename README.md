# `prettier-plugin-jinja-template` 8th Issue Reproduction

This repository is a reproduction of the issue described in [prettier-plugin-jinja-template#8](https://github.com/davidodenwald/prettier-plugin-jinja-template/issues/8).

## Steps to reproduce

1. Clone this repository
2. Run `yarn install` or `yarn`

   > **Note**
   >
   > If you don't have `yarn`, you can install it with `corepack enable` if nodejs version is `>= 14.19.0` or `>= 16.9.0`

3. Preview the input file before formatting:

   ```bash
   $ cat unformatted.jinja
   {% with text='text', version=1 %}
      {% include 'directory/template.jinja2' %}
   {% endwith %}

   {% with text='text', version=1 %}
      {% include 'directory/template.jinja2' %}
   {% endwith %}

   <div>
      {% with text='text', version=1 %}
         {% include 'directory/template.jinja2' %}
      {% endwith %}
   </div>
   ```

4. Run `yarn lint` to preview formatted output

   ```bash
   ❯ yarn lint
   yarn run v1.22.19
   $ prettier *.jinja
   {% with text='text', version=1 %}
   {% include 'directory/template.jinja2' %}
   {% endwith %}
   {% with text='text', version=1 %}
   {% include 'directory/template.jinja2' %}
   {% endwith %}

   <div>
   {% with text='text', version=1 %}
      {% include 'directory/template.jinja2' %}
   {% endwith %}
   </div>
   ✨  Done in 0.52s.
   ```

5. Run `yarn lint@fix` to format the input file:

   ```bash
   ❯ yarn lint@fix
   yarn run v1.22.19
   $ prettier --write *.jinja
   unformatted.jinja 19ms
   ✨  Done in 0.56s.
   ```

6. Preview formatted output:

   ```bash
   ❯ cat unformatted.jinja
   {% with text='text', version=1 %}
   {% include 'directory/template.jinja2' %}
   {% endwith %}
   {% with text='text', version=1 %}
   {% include 'directory/template.jinja2' %}
   {% endwith %}

   <div>
   {% with text='text', version=1 %}
      {% include 'directory/template.jinja2' %}
   {% endwith %}
   </div>
   ```

## Expected behavior

Expected output looks like this:

```jinja
{% with text='text', version=1 %}
  {% include 'directory/template.jinja2' %}
{% endwith %}
{% with text='text', version=1 %}
  {% include 'directory/template.jinja2' %}
{% endwith %}

<div>
  {% with text='text', version=1 %}
    {% include 'directory/template.jinja2' %}
  {% endwith %}
</div>
```

## Actual behavior

Actual output is:

```jinja
{% with text='text', version=1 %}
  {% include 'directory/template.jinja2' %}
{% endwith %}
{% with text='text', version=1 %}
  {% include 'directory/template.jinja2' %}
{% endwith %}

<div>
  {% with text='text', version=1 %}
    {% include 'directory/template.jinja2' %}
  {% endwith %}
</div>
```

## Environment

- `prettier`: [`2.8.6`](https://github.com/prettier/prettier/releases/tag/2.8.6)
- `prettier-plugin-jinja-template`: [`0.2.0`](https://github.com/davidodenwald/prettier-plugin-jinja-template/releases/tag/v0.2.0)
- `node`: [`v19.8.1`](https://github.com/nodejs/node/releases/tag/v19.8.1)
- `yarn`: [`1.22.19`](https://github.com/yarnpkg/yarn/releases/tag/v1.22.19)
