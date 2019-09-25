#include <stdio.h>
int main()
{
	//printf("hello word\n");
	int a;
	fscanf(stdin,"%d",&a);
	//printf("input value is :%d \n",a);
	if(a<0){
		fprintf(stderr,"必须输入大于0");
		return 1;
	}
	return 0;
}
