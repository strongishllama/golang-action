package helloworld

import (
	"context"
)

func Run(ctx context.Context, cfg config) error {
	cfg.action.Debugf(cfg.ExampleInput)
	return nil
}
