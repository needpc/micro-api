package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/gorilla/mux"
)

type Response struct {
	Error bool     `json:"error"`
	Data  []string `json:"data"`
}

// NotFoundHandler : 404 Not Found
func NotFoundHandler(w http.ResponseWriter, req *http.Request) {
	var (
		rjson []byte
	)

	rjson, _ = json.Marshal(Response{Error: true})

	w.WriteHeader(http.StatusNotFound)
	w.Header().Set("Content-Type", "application/json")
	w.Write(rjson)
}

func main() {
	var (
		wait time.Duration
		r    *mux.Router
	)

	// Router MUX
	r = mux.NewRouter()
	r.NotFoundHandler = http.HandlerFunc(NotFoundHandler)

	// Logs mod Nginx
	loggingHandler := NewApacheLoggingHandler(r, os.Stderr)
	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", 3000),
		Handler:      loggingHandler,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
		IdleTimeout:  time.Second * 60,
	}

	// Run our server in a goroutine so that it doesn't block.
	go func() {
		if err := server.ListenAndServe(); err != nil {
			log.Println(err)
		}
	}()

	c := make(chan os.Signal, 1)
	// We'll accept graceful shutdowns when quit via SIGINT (Ctrl+C)
	// SIGKILL, SIGQUIT or SIGTERM (Ctrl+/) will not be caught.
	signal.Notify(c, os.Interrupt)

	// Block until we receive our signal.
	<-c

	// Create a deadline to wait for.
	ctx, cancel := context.WithTimeout(context.Background(), wait)
	defer cancel()
	// Doesn't block if no connections, but will otherwise wait
	// until the timeout deadline.
	server.Shutdown(ctx)
	// Optionally, you could run srv.Shutdown in a goroutine and block on
	// <-ctx.Done() if your application should wait for other services
	// to finalize based on context cancellation.
	log.Println("shutting down")
	os.Exit(0)
}
