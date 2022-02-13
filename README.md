[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/strongishllama/golang-action/main/LICENSE)
[![CI](https://github.com/strongishllama/golang-action/actions/workflows/ci.yaml/badge.svg)](https://github.com/strongishllama/golang-action/actions/workflows/ci.yaml)
[![Go Report Card](https://goreportcard.com/badge/github.com/strongishllama/golang-action)](https://goreportcard.com/report/github.com/strongishllama/golang-action)
![GitHub tag (latest SemVer pre-release)](https://img.shields.io/github/v/tag/strongishllama/golang-action?include_prereleases)
![GitHub go.mod Go version](https://img.shields.io/github/go-mod/go-version/strongishllama/golang-action)
[![PkgGoDev](https://pkg.go.dev/badge/github.com/strongishllama/golang-action)](https://pkg.go.dev/github.com/strongishllama/golang-action)

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
