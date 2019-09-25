#include <stdio.h>
int main()
{
	printf("输入一个数字\n");
	int a ;
	scanf("%d",&a);
	printf("输入另一个数字\n");
	int b;
	scanf("%d",&b);
	if(0!=b){
		printf("%d/%d=%d \n",a,b,a/b);
	}else{
		fprintf(stderr,"分母不能为零");
		return 1;
	}
	return 0;
}
