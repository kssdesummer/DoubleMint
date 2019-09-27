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
	int *c,*d;
	c=&a;
	d=&b;
	printf("%p\n",&a);
	printf("%p\n",&b);
	printf("%d\n",*c);
	printf("%d\n",*d);
	change(&a,&b);
	printf("a=%d \n b= %d \n",a,b);
}
