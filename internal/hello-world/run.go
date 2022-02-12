package helloworld

import (
	"context"
	"fmt"
)

func Run(ctx context.Context, cfg config) error {
	fmt.Println(cfg.ExampleInput)
	return nil
}
