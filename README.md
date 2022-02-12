# Golang Action

A template repository for writing custom GitHub Actions in Golang. The idea for this template repository came from this [article](https://full-stack.blend.com/how-we-write-github-actions-in-go.html).

<!-- BEGIN GHA DOCS -->
# Golang Action
A template repository for writing custom GitHub Actions in Golang.

## Inputs
| Name | Description | Required | Default |
| --- | --- | --- | --- |
| example-input | An example input to use in your action. | true |  |

## Outputs
No outputs.

## External Actions
No external actions.

## Example Usage
```yaml
- name: Golang Action
  uses: owner/repo@latest
  with:
    # An example input to use in your action.
    example-input:
```
<!-- END GHA DOCS -->
