#include <stdio.h>
#define INT_MAX 2147483647
int main()
{
	int flag=1;
	int i;
	int s=0;
	int x=INT_MAX;
	int count=0;
	while(flag){
		scanf("%d",&i);
		if(0==i) break;
		if(i<x){
		x=i;
		s=i;
		}
		count++;
	}
	printf("这%d个数的最小值为：%d \n",count,s);
	return 0;
}

