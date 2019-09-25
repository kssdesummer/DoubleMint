#include <stdio.h>

int main()
{
	int a=1;
	int b=2;
	int tmp;
	tmp=a;
	a=b;
	b=tmp;
	printf("%d %d",a,b);
}
