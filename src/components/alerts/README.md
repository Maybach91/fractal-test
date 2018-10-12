Readme File, hello!

View:
{{ view @alert }}

Render:
{{ render @alert }}


Uppercase:
{{uppercase "aBcDeF"}}



CONCAT:
{{concat "AAA" "BBB"}}







The  component can be included within other components like this:

```
\{{> @alert }}
```

This template for this component looks like this:

```
{{view '@alert'}}
```

and it therefore expects a set of data to render it that is in the following format:

```
{{context '@alert'}}
```