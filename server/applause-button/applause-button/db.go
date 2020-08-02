package main

import (
	"fmt"
	"log"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

var db = dynamodb.New(session.New(), aws.NewConfig().WithRegion("us-east-2"))

func getItem(url string) (int64, error) {

	input := &dynamodb.GetItemInput{
		TableName: aws.String("applause-button-table"),
		Key: map[string]*dynamodb.AttributeValue{
			"id": {
				S: aws.String(url),
			},
		},
	}

	result, err := db.GetItem(input)
	if err != nil {
		fmt.Println("Error occured")
		log.Printf("UnmarshalMap(GetItem response) err=%q", err)
		return 0, err
	}
	if result.Item == nil {
		fmt.Println("No result from Database")
		return 0, nil
	}

	var count int64
	if err = dynamodbattribute.Unmarshal(result.Item["applauseCount"], &count); err != nil {
		log.Printf("UnmarshalMap(GetItem response) err=%q", err)
	}

	return count, nil
}

func updateCount(url string) (int64, error) {

	key := map[string]*dynamodb.AttributeValue{
		"id": {
			S: aws.String(url),
		},
	}

	Increment := map[string]*dynamodb.AttributeValue{
		":val": {
			N: aws.String("1"),
		},
	}

	input := &dynamodb.UpdateItemInput{
		Key:                       key,
		TableName:                 aws.String("applause-button-table"),
		UpdateExpression:          aws.String("set applauseCount = applauseCount + :val"),
		ExpressionAttributeValues: Increment,
		ReturnValues:              aws.String("UPDATED_NEW"),
	}

	result, err := db.UpdateItem(input)
	if err != nil {
		log.Printf("UnmarshalMap(PutItem response) err=%q", err)
		return 0, nil
	}

	fmt.Println("Result from db Item ", result)

	var count int64
	if err = dynamodbattribute.Unmarshal(result.Attributes["applauseCount"], &count); err != nil {
		log.Printf("UnmarshalMap(PutItem response) err=%q", err)
	}

	return count, nil
}
