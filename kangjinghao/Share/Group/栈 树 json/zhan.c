#include<stdio.h>
#include<stdlib.h>
#define maxsize 1024
typedef int datatype;
typedef struct
{
	datatype elements[maxsize];
	int Top;
}Stack;

void setNull(Stack *S)
{
	S->Top=-1;
}

int isfull(Stack *S)
{
	if(S->Top>=maxsize-1)return(1);
	else return(0);
}

int isempty(Stack *S)
{
	if(S->Top>=0)return 0;
	else return(1);
}

void push(Stack *S,datatype E)
{
	if(S->Top>=maxsize-1)
	{
		printf("Stack Overflow");}
	else
	{
		S->Top++;
		S->elements[S->Top]=E;
	}
}
datatype *pop(Stack  *S)
{
	datatype *temp;
	if(isempty(S))
	{
		printf("Stack Underflow");
		return(NULL);
	}
	else
	{
		S->Top--;
		temp=(datatype *)malloc(sizeof(datatype));
		*temp=S->elements[S->Top+1];
		return(temp);
	}
}

void conversion(int n)
{
	Stack S;
	setNull(&S);
	int r,m;
	r=n;
	while(r)
	{
		m=r%2;
		if(isfull(&S))printf("Over flow\n");
		else push(&S,m);
		r=r/2;
	}
	printf("转换后的二进制为\n");
	while(!isempty(&S))
	printf("%d",*(pop(&S)));
	printf("\n");
}

void main()
{
    int num;
    printf("请输入需要转换为二进制的十进制数据\n");
    scanf("%d",&num);
    conversion(num);
}
