package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	var url string
	var count int64
	switch request.HTTPMethod {
	case "GET":
		url = request.QueryStringParameters["url"]
		count, _ = getItem(url)
	case "PUT":
		url = request.QueryStringParameters["url"]
		count, _ = updateCount(url)
	}

	return events.APIGatewayProxyResponse{
		Body:       fmt.Sprintf("%d", count),
		StatusCode: 200,
	}, nil
}

func main() {
	lambda.Start(handler)
}
