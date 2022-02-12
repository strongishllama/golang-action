package helloworld

import (
	"context"
)

func Run(ctx context.Context, cfg config) error {
	cfg.action.Debugf("Example input: %s", cfg.ExampleInput)
	cfg.action.Debugf("Example debug")
	cfg.action.Errorf("Example error")
	cfg.action.Fatalf("Example fatal")
	return nil
}
