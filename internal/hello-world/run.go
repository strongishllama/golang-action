package helloworld

import (
	"context"
)

func Run(ctx context.Context, cfg config) error {
	cfg.action.Infof("Example input: %s", cfg.ExampleInput)
	cfg.action.Infof("Example info")
	cfg.action.Errorf("Example error")
	cfg.action.Fatalf("Example fatal")
	return nil
}
