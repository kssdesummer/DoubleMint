#include <stdio.h>

void change(int *a,int *b)
{
	int c=*a;
	*a=*b;
	*b=c;
}
int main()
{
	int a=1;
	int b=2;
	change(&a,&b);
	printf("a=%d \n b= %d \n",a,b);
}
