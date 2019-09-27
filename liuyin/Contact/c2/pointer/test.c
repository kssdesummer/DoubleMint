#include <stdio.h>
void change(int *a,int *b){
	int c=*b;
	*b=*a;
	*a=c;
}
void main(){
	int a=1,b=2;
	change(&a,&b);
	printf("%d\n",a);
	printf("%d\n",b);
}
