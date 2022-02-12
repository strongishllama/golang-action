package helloworld

import "github.com/sethvargo/go-githubactions"

type config struct {
	ExampleInput string
}

func NewConfig(action *githubactions.Action) (config, error) {
	return config{
		ExampleInput: action.GetInput("example-input"),
	}, nil
}
